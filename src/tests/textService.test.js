const { analyzeText } = require("../services/textService");

describe("Text Analysis", () => {
  const text =
    "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.";

  it("should return correct word count", () => {
    const stats = analyzeText(text);
    expect(stats.wordCount).toBe(9); // 9 words
  });

  it("should return correct character count", () => {
    const stats = analyzeText(text);
    expect(stats.charCount).toBe(33); // 33 characters excluding spaces and punctuation
  });

  it("should return correct sentence count", () => {
    const stats = analyzeText(text);
    expect(stats.sentenceCount).toBe(2); // 2 sentences
  });

  it("should return correct paragraph count", () => {
    const stats = analyzeText(text);
    expect(stats.paragraphCount).toBe(1); // 1 paragraph
  });

  it("should return longest words in paragraphs", () => {
    const stats = analyzeText(text);
    expect(stats.longestWords).toEqual(["jumps"]); // 'jumps' is the longest word
  });

  it("should handle punctuation correctly", () => {
    const textWithPunctuation =
      "hi this is another sentence. let's just updateeee it.";
    const stats = analyzeText(textWithPunctuation);
    expect(stats.wordCount).toBe(8); // 8 words
    expect(stats.charCount).toBe(30); // 30 characters excluding spaces and punctuation
    expect(stats.sentenceCount).toBe(2); // 2 sentences
    expect(stats.paragraphCount).toBe(1); // 1 paragraph
    expect(stats.longestWords).toEqual(["updateeee"]); // 'updateeee' is the longest word
  });
});
