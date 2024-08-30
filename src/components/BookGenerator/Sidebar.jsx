import React from 'react';

const Sidebar = () => {
    return (
        <div className="bg-gray-600 p-6 w-1/4 min-h-full text-white rounded-md m-4 mt-4">
            <h2 className="text-3xl font-bold mb-6">AI Book Generator</h2>
            <div className="mb-4">
                <label className="block mb-2">Model</label>
                <select className="w-full p-2 bg-gray-800 rounded">
                    <option>GPT-4o Mini</option>
                    {/* Add other options */}
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-2">Language</label>
                <select className="w-full p-2 bg-gray-800 rounded">
                    <option>English</option>
                    {/* Add other options */}
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-2">Book Topic</label>
                <input type="text" className="w-full p-2 bg-gray-800 rounded" placeholder="The Quantum Paradox" />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Target Word Count</label>
                <input type="number" className="w-full p-2 bg-gray-800 rounded" placeholder="100" />
            </div>
            <button className="bg-indigo-600 w-full py-2 mt-4 rounded">Generate Book</button>
            <p className="mt-4 text-sm">Book generated! Word count: 440</p>
        </div>
    );
};

export default Sidebar;
