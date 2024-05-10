const analyzeText = (text) => {
  // Split text into paragraphs (considering newline characters)
  const paragraphs = text.split(/\n+/).filter(Boolean);

  // Initialize variables for statistics
  let wordCount = 0;
  let charCount = 0;
  const sentences = text.split(/[.!?]/).filter(Boolean);
  const longestWords = [];

  // Process each paragraph
  paragraphs.forEach(paragraph => {
      // Remove punctuation and convert to lowercase
      const cleanedParagraph = paragraph.replace(/[^\w\s]/g, '').toLowerCase();
      
      // Split paragraph into words
      const words = cleanedParagraph.split(/\s+/).filter(Boolean);
      
      // Update word and character counts
      wordCount += words.length;
      charCount += words.join('').length;

      // Find longest word in the paragraph
      const longestWord = words.reduce((longest, current) => current.length > longest.length ? current : longest, '');
      longestWords.push(longestWord);
  });

  return {
      wordCount,
      charCount,
      sentenceCount: sentences.length,
      paragraphCount: paragraphs.length,
      longestWords,
  };
};

module.exports = {
  analyzeText,
};
