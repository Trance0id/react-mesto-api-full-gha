require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { errors, celebrate, Joi } = require('celebrate');

const auth = require('./middlewares/auth');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const { login, createUser } = require('./controllers/users');

const errorHandler = require('./middlewares/errorHandler');
const { linkPattern } = require('./utils/constants');
const NotFoundError = require('./utils/errors/NotFoundError');

const { requestLogger, errorLogger } = require('./middlewares/logger');
const cors = require('./middlewares/cors');

const { PORT = 3000 } = process.env;

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(requestLogger);
app.use(cors);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(2).max(30).required(),
  }),
}), login);
app.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(2).max(30).required(),
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(linkPattern),
  }),
}), createUser);
app.get('/signout', (req, res) => {
  res.clearCookie('jwt', {
    maxAge: 3600000 * 24 * 7, httpOnly: true, sameSite: 'none', secure: true,
  }).send({ message: 'Вы успешно вышли из аккаунта' });
});

app.use(auth);
app.use('/users', usersRouter);
app.use('/cards', cardsRouter);
app.use('/:anything', (req, res, next) => {
  const { anything } = req.params;
  next(new NotFoundError(`Обращение к несуществующемму эндпоинту ${anything}`));
});

app.use(errorLogger);

app.use(errors());
app.use(errorHandler);

mongoose
  .connect('mongodb://127.0.0.1:27017/mestodb')
  .then(() => {
    app.listen(PORT);
  });
