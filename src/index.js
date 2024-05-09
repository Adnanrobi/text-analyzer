const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const connectDB = require("./db");
const textRoutes = require("./routes/textRoutes");
const { cacheMiddleware } = require("./services/cache");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(limiter);
app.use(cacheMiddleware);

app.use("/api/texts", textRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
