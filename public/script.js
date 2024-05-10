document.getElementById("text-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const textInput = document.getElementById("text-input").value;

  const response = await fetch("/api/texts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: textInput }),
  });

  const data = await response.json();
  const statsResponse = await fetch(`/api/texts/${data._id}/stats`);
  const stats = await statsResponse.json();

  const longestWordsResponse = await fetch(
    `/api/texts/${data._id}/longest-words`
  );
  const longestWords = await longestWordsResponse.json();

  document.getElementById("results").innerHTML = `
        <h2>Analysis Results</h2>
        <p>Word Count: ${stats.wordCount}</p>
        <p>Character Count: ${stats.charCount}</p>
        <p>Sentence Count: ${stats.sentenceCount}</p>
        <p>Paragraph Count: ${stats.paragraphCount}</p>
        <p>Longest Words: ${longestWords.join(", ")}</p>
    `;
});
