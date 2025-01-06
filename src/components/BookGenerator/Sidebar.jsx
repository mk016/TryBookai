import React, { useState } from 'react';
import { FaBook, FaLanguage, FaImage, FaFileAlt } from 'react-icons/fa';

const Sidebar = ({ onGenerate }) => {
    const [bookDetails, setBookDetails] = useState({
        topic: '',
        genre: 'fiction',
        language: 'english',
        wordCount: 1000,
        pages: 1,
        includeImages: false,
        tone: 'neutral',
        prompt: '',
        model: 'gpt-4'
    });

    const languages = [
        { code: 'english', name: 'English' },
        { code: 'hindi', name: 'Hindi' },
        { code: 'french', name: 'French' },
        { code: 'spanish', name: 'Spanish' },
        { code: 'german', name: 'German' }
    ];

    const genres = [
        'Fiction', 'Non-Fiction', 'Fantasy', 'Science Fiction',
        'Mystery', 'Romance', 'Horror', 'Adventure'
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setBookDetails(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onGenerate(bookDetails);
    };

    return (
        <div className="bg-gray-800/50 backdrop-blur-lg p-6 w-1/4 min-h-full text-white rounded-xl shadow-xl m-4 mt-4">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                AI Book Generator
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Book Topic */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2">
                        <FaBook className="text-purple-400" />
                        <span>Book Topic</span>
                    </label>
                    <input
                        type="text"
                        name="topic"
                        value={bookDetails.topic}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-900/50 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                        placeholder="Enter your book topic..."
                    />
                </div>

                {/* Detailed Prompt */}
                <div className="space-y-2">
                    <label>Detailed Prompt</label>
                    <textarea
                        name="prompt"
                        value={bookDetails.prompt}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-900/50 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all h-32"
                        placeholder="Describe your book idea in detail..."
                    />
                </div>

                {/* Genre Selection */}
                <div className="space-y-2">
                    <label>Genre</label>
                    <select
                        name="genre"
                        value={bookDetails.genre}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-900/50 rounded-lg border border-gray-700"
                    >
                        {genres.map(genre => (
                            <option key={genre.toLowerCase()} value={genre.toLowerCase()}>
                                {genre}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Language Selection */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2">
                        <FaLanguage className="text-purple-400" />
                        <span>Language</span>
                    </label>
                    <select
                        name="language"
                        value={bookDetails.language}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-900/50 rounded-lg border border-gray-700"
                    >
                        {languages.map(lang => (
                            <option key={lang.code} value={lang.code}>
                                {lang.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Word Count & Pages */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="flex items-center gap-2">
                            <FaFileAlt className="text-purple-400" />
                            <span>Pages</span>
                        </label>
                        <input
                            type="number"
                            name="pages"
                            value={bookDetails.pages}
                            onChange={handleChange}
                            min="1"
                            max="500"
                            className="w-full p-3 bg-gray-900/50 rounded-lg border border-gray-700"
                        />
                    </div>
                    <div className="space-y-2">
                        <label>Words per Page</label>
                        <input
                            type="number"
                            name="wordCount"
                            value={bookDetails.wordCount}
                            onChange={handleChange}
                            min="100"
                            max="1000"
                            className="w-full p-3 bg-gray-900/50 rounded-lg border border-gray-700"
                        />
                    </div>
                </div>

                {/* Image Generation Option */}
                <div className="flex items-center space-x-3">
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="checkbox"
                            name="includeImages"
                            checked={bookDetails.includeImages}
                            onChange={handleChange}
                            className="form-checkbox h-5 w-5 text-purple-500 rounded border-gray-700 bg-gray-900/50"
                        />
                        <span className="flex items-center gap-2">
                            <FaImage className="text-purple-400" />
                            Generate AI Images
                        </span>
                    </label>
                </div>

                {/* Generate Button */}
                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-200 transform hover:scale-[1.02]"
                >
                    Generate Book
                </button>
            </form>
        </div>
    );
};

export default Sidebar;
