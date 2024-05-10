const analyzeText = (text) => {
  // Normalize text: remove punctuation, convert to lower case.
  const normalizedText = text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .trim();

  // Split text into words
  const words = normalizedText.split(/\s+/).filter(Boolean);

  // Split text into sentences
  const sentences = text.split(/[.!?]+/).filter(Boolean);

  // Split text into paragraphs
  const paragraphs = text.split(/\n+/).filter(Boolean);

  // Count words
  const wordCount = words.length;

  // Count characters (excluding spaces and punctuation)
  const charCount = normalizedText.replace(/\s+/g, "").length;

  // Count sentences
  const sentenceCount = sentences.length;

  // Count paragraphs
  const paragraphCount = paragraphs.length;

  // Find the longest word in each paragraph
  const longestWords = paragraphs.map((paragraph) => {
    const wordsInParagraph = paragraph
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(/\s+/)
      .filter(Boolean);
    return wordsInParagraph.reduce(
      (longest, current) =>
        current.length > longest.length ? current : longest,
      ""
    );
  });

  return {
    wordCount,
    charCount,
    sentenceCount,
    paragraphCount,
    longestWords,
  };
};

module.exports = {
  analyzeText,
};
