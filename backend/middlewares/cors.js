const { DEFAULT_ALLOWED_METHODS } = require('../utils/constants');

module.exports = (req, res, next) => {
  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];

  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Credentials', 'true');

  if (method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.set('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }

  return next();
};
