import React, { useState } from 'react';
import { FaPlay, FaDownload, FaChartBar, FaSave } from 'react-icons/fa';
import { generateBookContent, generateBookImage } from '../../services/openaiService';
import { jsPDF } from 'jspdf';

// Add these utility functions
const calculateReadability = (text) => {
    // Simple Flesch-Kincaid readability score calculation
    const words = text.trim().split(/\s+/).length;
    const sentences = text.split(/[.!?]+/).length;
    const syllables = text.split(/[aeiou]/i).length;
    
    const score = 206.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words);
    return Math.round(score); // Returns a number between 0-100
};

const analyzeSentiment = (text) => {
    // Simple sentiment analysis
    const positiveWords = ['good', 'great', 'happy', 'wonderful', 'excellent', 'joy'];
    const negativeWords = ['bad', 'sad', 'terrible', 'awful', 'horrible', 'misery'];
    
    const words = text.toLowerCase().split(/\s+/);
    let positiveCount = words.filter(word => positiveWords.includes(word)).length;
    let negativeCount = words.filter(word => negativeWords.includes(word)).length;
    
    if (positiveCount > negativeCount) return 'Positive';
    if (negativeCount > positiveCount) return 'Negative';
    return 'Neutral';
};

const BookGenerator = ({ bookDetails }) => {
    const [generatedContent, setGeneratedContent] = useState({
        title: '',
        content: '',
        analytics: {
            wordCount: 0,
            genre: '',
            readabilityScore: 0,
            sentiment: ''
        },
        images: []
    });

    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerate = async () => {
        setIsGenerating(true);
        try {
            // Generate book content
            const content = await generateBookContent(bookDetails);
            
            // Generate cover image
            const coverImage = await generateBookImage(
                bookDetails.topic, 
                bookDetails.prompt
            );

            // Calculate analytics
            const wordCount = content.split(' ').length;
            
            const newBook = {
                title: bookDetails.topic,
                content: content,
                image: coverImage,
                genre: bookDetails.genre,
                description: bookDetails.prompt,
                analytics: {
                    wordCount,
                    genre: bookDetails.genre,
                    readabilityScore: calculateReadability(content),
                    sentiment: analyzeSentiment(content)
                },
                images: [coverImage]
            };

            setGeneratedContent(newBook);
            
            // Save to books collection
            saveToBooks(newBook);

        } catch (error) {
            console.error('Error:', error);
            alert('Error generating book content');
        } finally {
            setIsGenerating(false);
        }
    };

    const saveToBooks = (book) => {
        const existingBooks = JSON.parse(localStorage.getItem('books') || '[]');
        const newBook = {
            id: Date.now(),
            ...book,
            isSaved: true,
            isLiked: false
        };
        localStorage.setItem('books', JSON.stringify([...existingBooks, newBook]));
    };

    const handleDownloadPDF = () => {
        const doc = new jsPDF();
        
        // Add title
        doc.setFontSize(20);
        doc.text(generatedContent.title, 20, 20);
        
        // Add content
        doc.setFontSize(12);
        const splitText = doc.splitTextToSize(generatedContent.content, 180);
        doc.text(splitText, 15, 40);
        
        // Save PDF
        doc.save(`${generatedContent.title}.pdf`);
    };

    return (
        <div className="bg-gray-800/50 backdrop-blur-lg p-6 w-3/4 min-h-full text-white rounded-xl shadow-xl mt-8">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                    {generatedContent.title || "Your Generated Book"}
                </h3>
                <button className="bg-purple-600 py-2 px-4 rounded-lg hover:bg-purple-700 transition-all flex items-center gap-2">
                    <FaSave />
                    View Saved Books
                </button>
            </div>

            {/* Content Area */}
            <div className="space-y-6">
                {/* Text Editor */}
                <textarea
                    className="w-full h-96 p-6 bg-gray-900/50 rounded-xl text-sm border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    value={generatedContent.content}
                    placeholder="Your generated content will appear here..."
                    readOnly
                />

                {/* Generated Images (if any) */}
                {generatedContent.images?.length > 0 && (
                    <div className="grid grid-cols-3 gap-4">
                        {generatedContent.images.map((img, index) => (
                            <img 
                                key={index}
                                src={img}
                                alt={`Generated illustration ${index + 1}`}
                                className="rounded-lg w-full h-48 object-cover"
                            />
                        ))}
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-4">
                    <button className="bg-purple-600 py-2 px-4 rounded-lg hover:bg-purple-700 transition-all flex items-center gap-2">
                        <FaPlay />
                        Text to Speech
                    </button>
                    <button className="bg-blue-600 py-2 px-4 rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2">
                        <FaDownload />
                        Download PDF
                    </button>
                    <select className="bg-gray-900/50 p-2 rounded-lg border border-gray-700">
                        <option>Select Voice</option>
                        <option>Male Voice</option>
                        <option>Female Voice</option>
                    </select>
                </div>

                {/* Analytics Dashboard */}
                <div className="mt-8">
                    <h4 className="text-xl font-bold flex items-center gap-2 mb-4">
                        <FaChartBar className="text-purple-400" />
                        Analytics Dashboard
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
                            <p className="text-sm text-gray-400">Word Count</p>
                            <p className="text-2xl font-bold">{generatedContent.analytics.wordCount}</p>
                        </div>
                        <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
                            <p className="text-sm text-gray-400">Genre</p>
                            <p className="text-2xl font-bold">{generatedContent.analytics.genre}</p>
                        </div>
                        <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
                            <p className="text-sm text-gray-400">Readability Score</p>
                            <p className="text-2xl font-bold">{generatedContent.analytics.readabilityScore}</p>
                        </div>
                        <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
                            <p className="text-sm text-gray-400">Sentiment</p>
                            <p className="text-2xl font-bold">{generatedContent.analytics.sentiment}</p>
                        </div>
                    </div>
                </div>

                {/* Add Generate button if not already generated */}
                {!generatedContent.content && (
                    <button
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg transform transition-transform duration-300 hover:scale-105"
                    >
                        {isGenerating ? 'Generating...' : 'Generate Book'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default BookGenerator;
