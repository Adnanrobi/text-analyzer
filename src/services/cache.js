const NodeCache = require("node-cache");
const cache = new NodeCache();

const cacheMiddleware = (req, res, next) => {
  if (req.method === "POST" && req.originalUrl === "/api/texts") {
    const key = req.originalUrl + JSON.stringify(req.body);
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
  } else {
    next();
  }
};

module.exports = {
  cacheMiddleware,
};
