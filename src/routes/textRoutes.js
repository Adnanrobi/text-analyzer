const { Router } = require("express");
const {
  createText,
  getTextStats,
  getLongestWords,
  updateText,
  deleteText,
} = require("../controllers/textController");

const router = Router();

router.post("/", createText);
router.get("/:id/stats", getTextStats);
router.get("/:id/longest-words", getLongestWords);
router.put("/:id", updateText);
router.delete("/:id", deleteText);

module.exports = router;
