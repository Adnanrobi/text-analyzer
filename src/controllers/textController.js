const Text = require("../models/Text");
const { analyzeText } = require("../services/textService");

const createText = async (req, res) => {
  try {
    const { content } = req.body;
    const newText = new Text({ content });
    await newText.save();
    res.json(newText);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

const getTextStats = async (req, res) => {
  try {
    const text = await Text.findById(req.params.id);
    if (!text) {
      return res.status(404).json({ msg: "Text not found" });
    }
    const stats = analyzeText(text.content);
    res.json(stats);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

const getLongestWords = async (req, res) => {
  try {
    const text = await Text.findById(req.params.id);
    if (!text) {
      return res.status(404).json({ msg: "Text not found" });
    }
    const longestWords = analyzeText(text.content).longestWords;
    res.json(longestWords);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

const updateText = async (req, res) => {
  try {
    const text = await Text.findByIdAndUpdate(
      req.params.id,
      { content: req.body.content },
      { new: true }
    );
    if (!text) {
      return res.status(404).json({ msg: "Text not found" });
    }
    res.json(text);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

const deleteText = async (req, res) => {
  try {
    const text = await Text.findByIdAndDelete(req.params.id);
    if (!text) {
      return res.status(404).json({ msg: "Text not found" });
    }
    res.json({ msg: "Text removed" });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

module.exports = {
  createText,
  getTextStats,
  getLongestWords,
  updateText,
  deleteText,
};
