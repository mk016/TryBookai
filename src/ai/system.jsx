import React, { useState } from 'react';

function App() {
  const [prompt, setPrompt] = useState('');
  const [pages, setPages] = useState(1);
  const [language, setLanguage] = useState('en');
  const [generatedText, setGeneratedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch('http://localhost:5173/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          prompt, 
          pages, 
          language,
          // Add any additional parameters from your form
          genre: 'fiction', // You can make this dynamic
          includeImages: false // You can make this dynamic
        }),
      });

      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to generate content');
      }

      setGeneratedText(data.text);
    } catch (err) {
      setError(err.message);
      console.error('Generation error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Book Generator</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block mb-2">Book Prompt:</label>
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Enter your book prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={4}
          />
        </div>

        <div>
          <label className="block mb-2">Number of pages:</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
            min={1}
          />
        </div>

        <div>
          <label className="block mb-2">Language:</label>
          <select 
            className="w-full p-2 border rounded"
            value={language} 
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
          onClick={handleGenerate}
          disabled={isLoading || !prompt}
        >
          {isLoading ? 'Generating...' : 'Generate Book'}
        </button>
      </div>

      {generatedText && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Generated Text:</h2>
          <div className="bg-gray-100 p-4 rounded whitespace-pre-wrap">
            {generatedText}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
