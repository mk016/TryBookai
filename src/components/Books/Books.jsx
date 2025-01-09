import React, { useState, useEffect } from 'react';
import { FaBook, FaHeart, FaTrash } from 'react-icons/fa';

const booksData = [
    {
        id: 1,
        title: "The Art of Programming",
        content: "A comprehensive guide to programming concepts and best practices. Learn how to write clean, efficient, and maintainable code. Perfect for beginners and intermediate developers looking to level up their skills.",
        genre: "Technology",
        image: "https://source.unsplash.com/400x300/?programming",
        isLiked: false
    },
    {
        id: 2,
        title: "Digital Marketing Essentials",
        content: "Learn the fundamentals of digital marketing, including SEO, social media marketing, content strategy, and analytics. A practical guide for modern marketers.",
        genre: "Marketing",
        image: "https://source.unsplash.com/400x300/?marketing",
        isLiked: true
    },
    {
        id: 3,
        title: "Web Development Basics",
        content: "Start your journey in web development with this comprehensive guide. Covers HTML, CSS, JavaScript, and modern frameworks. Build responsive and interactive websites.",
        genre: "Technology",
        image: "https://source.unsplash.com/400x300/?webdevelopment",
        isLiked: false
    },
    {
        id: 4,
        title: "Creative Writing Masterclass",
        content: "Unlock your inner storyteller with this creative writing guide. Learn narrative structures, character development, and more.",
        genre: "Writing",
        image: "https://source.unsplash.com/400x300/?writing",
        isLiked: false
    }
];

const Books = () => {
    const [books, setBooks] = useState(booksData);
    const [deletedBooks, setDeletedBooks] = useState([]);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const savedBooks = JSON.parse(localStorage.getItem('books') || '[]');
        const savedDeletedBooks = JSON.parse(localStorage.getItem('deletedBooks') || '[]');
        if (savedBooks.length > 0) {
            setBooks(savedBooks);
        }
        if (savedDeletedBooks.length > 0) {
            setDeletedBooks(savedDeletedBooks);
        }
    }, []);

    const handleDelete = (id) => {
        const bookToDelete = books.find(book => book.id === id);
        const updatedBooks = books.filter(book => book.id !== id);
        const updatedDeletedBooks = [...deletedBooks, bookToDelete];

        localStorage.setItem('books', JSON.stringify(updatedBooks));
        localStorage.setItem('deletedBooks', JSON.stringify(updatedDeletedBooks));
        setBooks(updatedBooks);
        setDeletedBooks(updatedDeletedBooks);
    };

    const handleToggleLike = (id) => {
        const updatedBooks = books.map(book => {
            if (book.id === id) {
                return { ...book, isLiked: !book.isLiked };
            }
            return book;
        });
        localStorage.setItem('books', JSON.stringify(updatedBooks));
        setBooks(updatedBooks);
    };

    const filteredBooks = books.filter(book => {
        if (filter === 'All') return true;
        if (filter === 'Liked') return book.isLiked;
        return book.genre === filter;
    });

    const genres = ['Liked', ...new Set(books.map(book => book.genre))];

    return (
        <div className="relative mt-[100px]">
            <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(125%_125%_at_50%_10%,_#000_40%,_#63e_100%)]"></div>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8 text-white">Your Generated Books</h1>

                <div className="mb-6 flex justify-center space-x-4">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="px-4 py-2 rounded-lg bg-gray-700 text-gray-300"
                    >
                        <option value="All">All</option>
                        {genres.map((genre) => (
                            <option key={genre} value={genre}>{genre}</option>
                        ))}
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBooks.map(book => (
                        <div key={book.id} className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 shadow-xl">
                            <img 
                                src={book.image} 
                                alt={book.title}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold text-white mb-2">{book.title}</h3>
                            <p className="text-gray-400 mb-4 line-clamp-3">{book.content}</p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => handleToggleLike(book.id)}
                                        className={`p-2 rounded-lg transition-colors ${book.isLiked ? 'text-red-500' : 'text-gray-400'}`}
                                    >
                                        <FaHeart />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(book.id)}
                                        className="text-gray-400 hover:text-red-500 p-2 rounded-lg transition-colors"
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                                <span className="text-sm text-gray-400">
                                    {book.genre}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <h2 className="text-3xl font-bold text-white mb-6">Deleted Books</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {deletedBooks.map(book => (
                            <div key={book.id} className="bg-gray-700 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-white">{book.title}</h3>
                                <p className="text-gray-400">{book.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;
