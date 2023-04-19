const { DEFAULT_ALLOWED_METHODS } = require('../utils/constants');

module.exports = (req, res, next) => {
  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];
  const requestReferer = req.headers.referer;

  res.header('Access-Control-Allow-Origin', requestReferer);
  res.header('Access-Control-Allow-Credentials', 'true');

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.send({ headers: res.headers });
  }

  return next();
};
