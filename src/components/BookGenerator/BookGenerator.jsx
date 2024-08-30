import React from 'react';

const MainContent = () => {
    return (
        <div className="bg-gray-800 p-6 w-3/4 min-h-full text-white rounded-md mt-8">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Chapter One: The Whispers of Uncertainty</h3>
                <button className="bg-indigo-600 py-2 px-4 rounded">View Saved PDFs</button>
            </div>
            <textarea
                className="w-full h-96 p-4 bg-gray-900 rounded text-sm"
                value={`In the quiet that cloaked the universe at its inception...`}
                readOnly
            />
            <div className="mt-4 flex space-x-4">
                <button className="bg-indigo-600 py-2 px-4 rounded">Play</button>
                <button className="bg-indigo-600 py-2 px-4 rounded">Download & Save Your Book</button>
                <input type="text" className="bg-gray-700 p-2 rounded" placeholder="Voice" />
            </div>
            <div className="mt-6">
                <h4 className="text-xl font-bold">Analytics Dashboard</h4>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-gray-700 p-4 rounded">
                        <p className="text-sm">Word Count</p>
                        <p className="text-2xl font-bold">440</p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded">
                        <p className="text-sm">Genre Classification</p>
                        <p className="text-2xl font-bold">Sci-fi</p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded">
                        <p className="text-sm">Readability Score</p>
                        <p className="text-2xl font-bold">183 (Flesch-Kincaid)</p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded">
                        <p className="text-sm">Sentiment Analysis</p>
                        <p className="text-2xl font-bold">Negative</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
