const analyzeText = (text) => {
  const words = text.toLowerCase().match(/\b\w+\b/g) || [];
  const sentences = text.split(/[.!?]/).filter(Boolean);
  const paragraphs = text.split(/\n/).filter(Boolean);
  const longestWords = paragraphs.map((p) =>
    p.split(/\s+/).reduce((a, b) => (b.length > a.length ? b : a), "")
  );

  return {
    wordCount: words.length,
    charCount: words.join("").length,
    sentenceCount: sentences.length,
    paragraphCount: paragraphs.length,
    longestWords,
  };
};

module.exports = {
  analyzeText,
};
