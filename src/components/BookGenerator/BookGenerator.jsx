import React, { useState, useEffect } from 'react';
import { FaPlay, FaDownload, FaChartBar, FaSave } from 'react-icons/fa';
import { generateBookContent, generateBookImage } from '../../services/openaiService';
import { jsPDF } from 'jspdf';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
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
    const [displayText, setDisplayText] = useState('');
    const [generationProgress, setGenerationProgress] = useState(0);
    const [currentStep, setCurrentStep] = useState('');

    // Typing animation effect
    useEffect(() => {
        if (generatedContent.content && displayText !== generatedContent.content) {
            let index = 0;
            const timer = setInterval(() => {
                if (index < generatedContent.content.length) {
                    setDisplayText(prev => prev + generatedContent.content[index]);
                    index++;
                    setGenerationProgress((index / generatedContent.content.length) * 100);
                } else {
                    clearInterval(timer);
                }
            }, 10);

            return () => clearInterval(timer);
        }
    }, [generatedContent.content]);

    useEffect(() => {
        // Add validation check when bookDetails changes
        if (bookDetails) {
            console.log('BookGenerator received:', {
                topic: bookDetails.topic,
                genre: bookDetails.genre,
                language: bookDetails.language,
                fullDetails: bookDetails
            });
            
            // Only proceed if all required fields are present and valid
            if (bookDetails.topic && bookDetails.genre && bookDetails.language) {
                handleGenerate();
            } else {
                console.error('Missing required fields in bookDetails:', bookDetails);
            }
        }
    }, [bookDetails]);

    const handleGenerate = async () => {
        // Add validation at the start of generation
        if (!bookDetails || !bookDetails.topic || !bookDetails.genre || !bookDetails.language) {
            console.error('Cannot generate: missing required fields', {
                topic: bookDetails?.topic,
                genre: bookDetails?.genre,
                language: bookDetails?.language
            });
            return;
        }

        setIsGenerating(true);
        setDisplayText('');
        setGenerationProgress(0);
        
        try {
            console.log('Starting generation with:', bookDetails); // Debug log
            
            setCurrentStep('Analyzing prompt...');
            await new Promise(r => setTimeout(r, 1000));
            setGenerationProgress(10);

            setCurrentStep('Generating content...');
            const content = await generateBookContent({
                topic: bookDetails.topic,
                prompt: bookDetails.prompt,
                genre: bookDetails.genre,
                language: bookDetails.language,
                wordCount: bookDetails.wordCount * bookDetails.pages,
                includeImages: bookDetails.includeImages,
                tone: bookDetails.tone,
                model: bookDetails.model
            });
            
            console.log('Generated content:', content);
            setGenerationProgress(50);

            let coverImage = null;
            if (bookDetails.includeImages) {
                setCurrentStep('Creating cover image...');
                coverImage = await generateBookImage(bookDetails.topic, bookDetails.prompt);
                console.log('Generated cover image URL:', coverImage);
                setGenerationProgress(75);
            }

            setCurrentStep('Finalizing book...');
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
                images: coverImage ? [coverImage] : []
            };

            console.log('Final book object:', newBook);
            setGeneratedContent(newBook);
            setGenerationProgress(100);
            saveToBooks(newBook);

        } catch (error) {
            console.error('Generation error:', error);
            alert('Error generating book content: ' + error.message);
        } finally {
            setIsGenerating(false);
            setCurrentStep('');
        }
    };

    // Text-to-Speech functionality
    const handleTextToSpeech = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(generatedContent.content);
            const voices = window.speechSynthesis.getVoices();
            const selectedVoice = document.querySelector('select').value;
            utterance.voice = voices.find(voice => voice.name === selectedVoice) || voices[0];
            window.speechSynthesis.speak(utterance);
        } else {
            alert('Text-to-speech is not supported in your browser');
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

    // Add back navigation function
    const handleGoBack = () => {
        navigate(-3); // This will go back 3 steps in the history
    };

    return (
        <div className="w-3/4 pl-4">
            <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl shadow-xl">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={handleGoBack}
                            className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-all"
                        >
                            ← Back
                        </button>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                            {generatedContent.title || "Your Generated Book"}
                        </h3>
                    </div>
                    <button className="bg-purple-600 py-2 px-4 rounded-lg hover:bg-purple-700 transition-all flex items-center gap-2">
                        <FaSave />
                        View Saved Books
                    </button>
                </div>

                {/* Generation Progress (only show when generating) */}
                {isGenerating && (
                    <div className="mb-6">
                        <div className="flex justify-between mb-2">
                            <span>{currentStep}</span>
                            <span>{Math.round(generationProgress)}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                                className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${generationProgress}%` }}
                            ></div>
                        </div>
                    </div>
                )}

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

                    {/* Update the Generate button */}
                    {!generatedContent.content && (
                        <button
                            onClick={handleGenerate}
                            disabled={isGenerating}
                            className={`bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg transform transition-transform duration-300 ${
                                isGenerating ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                            }`}
                        >
                            {isGenerating ? 'Generating...' : 'Generate Book'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookGenerator;
