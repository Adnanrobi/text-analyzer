const NodeCache = require("node-cache");
const cache = new NodeCache();

const cacheMiddleware = (req, res, next) => {
  const key = req.originalUrl;
  const cachedResponse = cache.get(key);
  if (cachedResponse) {
    res.json(cachedResponse);
  } else {
    res.sendResponse = res.json;
    res.json = (body) => {
      cache.set(key, body, 3600);
      res.sendResponse(body);
    };
    next();
  }
};

module.exports = {
  cacheMiddleware,
};
