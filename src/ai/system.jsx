import React, { useState } from 'react';

function App() {
  const [prompt, setPrompt] = useState('');
  const [pages, setPages] = useState(1);
  const [language, setLanguage] = useState('en');
  const [generatedText, setGeneratedText] = useState('');

  const handleGenerate = async () => {
    const response = await fetch('http://localhost:5000/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, pages, language }),
    });

    const data = await response.json();
    setGeneratedText(data.text);
  };

  return (
    <div>
      <h1>Book Generator</h1>
      <textarea
        placeholder="Enter your book prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <br />
      <label>Number of pages:</label>
      <input
        type="number"
        value={pages}
        onChange={(e) => setPages(e.target.value)}
      />
      <br />
      <label>Language:</label>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
  
      </select>
      <br />
      <button onClick={handleGenerate}>Generate Book</button>
      <div>
        <h2>Generated Text:</h2>
        <p>{generatedText}</p>
      </div>
    </div>
  );
}

export default App;
