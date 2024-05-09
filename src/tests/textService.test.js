const { analyzeText } = require("../services/textService");

describe("Text Analysis", () => {
  const text =
    "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.";

  it("should return correct word count", () => {
    const stats = analyzeText(text);
    expect(stats.wordCount).toBe(14);
  });

  it("should return correct character count", () => {
    const stats = analyzeText(text);
    expect(stats.charCount).toBe(49);
  });

  it("should return correct sentence count", () => {
    const stats = analyzeText(text);
    expect(stats.sentenceCount).toBe(2);
  });

  it("should return correct paragraph count", () => {
    const stats = analyzeText(text);
    expect(stats.paragraphCount).toBe(1);
  });

  it("should return longest words in paragraphs", () => {
    const stats = analyzeText(text);
    expect(stats.longestWords).toEqual(["jumps"]);
  });
});
