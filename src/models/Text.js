const { Schema, model } = require("mongoose");

const TextSchema = new Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = model("Text", TextSchema);
