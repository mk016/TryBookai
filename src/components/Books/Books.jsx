import React, { useState } from 'react';
import { FaHeart, FaBookmark, FaFilter } from 'react-icons/fa';

// Sample book data (you can replace with your actual data)
const booksData = [
  {
    id: 1,
    title: "The Quantum Paradox",
    image: "https://en.wikipedia.org/wiki/Ad_Astra_(film)#/media/File:Ad_Astra_-_film_poster.jpg",
    description: "A mind-bending journey through parallel universes and quantum mechanics.",
    genre: "Science Fiction",
    isSaved: false,
    isLiked: false,
  },
  {
    id: 2,
    title: "Mystic Mountains",
    image: "https://source.unsplash.com/400x500/?mountains,mystical",
    description: "An epic fantasy tale of adventure and discovery in magical realms.",
    genre: "Fantasy",
    isSaved: false,
    isLiked: false,
  },
  {
    id: 3,
    title: "Cybernetic Dreams",
    image: "https://source.unsplash.com/400x500/?cyberpunk,neon",
    description: "A thrilling ride into the heart of a cybernetic dystopia.",
    genre: "Cyberpunk",
    isSaved: false,
    isLiked: false,
  },
  {
    id: 4,
    title: "The Lost Empire",
    image: "https://source.unsplash.com/400x500/?ruins,ancient-empire",
    description: "Unearth the secrets of a forgotten empire buried beneath the sands of time.",
    genre: "Historical Fiction",
    isSaved: false,
    isLiked: false,
  },
  {
    id: 5,
    title: "Galactic Chronicles",
    image: "https://source.unsplash.com/400x500/?galaxy,space-nebula",
    description: "A space opera spanning across galaxies and centuries.",
    genre: "Science Fiction",
    isSaved: false,
    isLiked: false,
  },
  {
    id: 6,
    title: "Arcane Legends",
    image: "https://source.unsplash.com/400x500/?magic,wizard-fantasy",
    description: "A legendary tale of wizards, dragons, and forgotten magic.",
    genre: "Fantasy",
    isSaved: false,
    isLiked: false,
  },
  {
    id: 7,
    title: "Deep Sea Enigma",
    image: "https://source.unsplash.com/400x500/?deep-sea,ocean-abyss",
    description: "Uncover the mysteries hidden beneath the ocean depths.",
    genre: "Adventure",
    isSaved: false,
    isLiked: false,
  },
  {
    id: 8,
    title: "Eternal Eclipse",
    image: "https://source.unsplash.com/400x500/?dark-fantasy,eclipse",
    description: "A dark fantasy novel about forbidden powers and ancient curses.",
    genre: "Dark Fantasy",
    isSaved: false,
    isLiked: false,
  },
  {
    id: 9,
    title: "Artificial Souls",
    image: "https://source.unsplash.com/400x500/?artificial-intelligence,robot",
    description: "A futuristic tale of AI and the quest for humanity.",
    genre: "Science Fiction",
    isSaved: false,
    isLiked: false,
  },
  {
    id: 10,
    title: "The Phantom Forest",
    image: "https://source.unsplash.com/400x500/?misty-forest,dark-woods",
    description: "A chilling mystery set in the heart of a haunted forest.",
    genre: "Mystery",
    isSaved: false,
    isLiked: false,
  },
  {
    id: 11,
    title: "Celestial Voyage",
    image: "https://source.unsplash.com/400x500/?stars",
    description: "A journey through the stars to find the origins of life.",
    genre: "Space Adventure",
    isSaved: false,
    isLiked: false,
  },
  {
    id: 12,
    title: "Legends of the North",
    image: "https://source.unsplash.com/400x500/?viking",
    description: "A tale of bravery and conquest in the age of Vikings.",
    genre: "Historical Fiction",
    isSaved: false,
    isLiked: false,
  },
  {
    id: 13,
    title: "Parallel Dimensions",
    image: "https://source.unsplash.com/400x500/?abstract",
    description: "Explore the unknown realms of parallel dimensions.",
    genre: "Science Fiction",
    isSaved: false,
    isLiked: false,
  },
  {
    id: 14,
    title: "Empire of Ash",
    image: "https://source.unsplash.com/400x500/?volcano",
    description: "A kingdom’s rise and fall under the shadow of a volcano.",
    genre: "Epic Fantasy",
    isSaved: false,
    isLiked: false,
  },
  {
    id: 15,
    title: "Desert Mirage",
    image: "https://source.unsplash.com/400x500/?desert",
    description: "A nomad's quest for an ancient treasure lost in the desert.",
    genre: "Adventure",
    isSaved: false,
    isLiked: false,
  },
  {
    id: 16,
    title: "The Frozen Realm",
    image: "https://source.unsplash.com/400x500/?ice",
    description: "Survive the harsh winters of a frozen kingdom.",
    genre: "Fantasy",
    isSaved: false,
    isLiked: false,
  },
  {
    id: 17,
    title: "Hidden Fortress",
    image: "https://source.unsplash.com/400x500/?castle",
    description: "A warrior's journey to protect a hidden fortress.",
    genre: "Fantasy",
    isSaved: false,
    isLiked: false,
  },
  {
    id: 18,
    title: "Clockwork City",
    image: "https://source.unsplash.com/400x500/?steampunk",
    description: "A thrilling story of innovation and rebellion in a steampunk city.",
    genre: "Steampunk",
    isSaved: false,
    isLiked: false,
  },
  {
    id: 19,
    title: "Noir Nights",
    image: "https://source.unsplash.com/400x500/?detective",
    description: "A classic noir detective story full of twists and danger.",
    genre: "Mystery",
    isSaved: false,
    isLiked: false,
  },
  {
    id: 20,
    title: "Solar Uprising",
    image: "https://source.unsplash.com/400x500/?sun",
    description: "A rebellion sparked by the power of the sun.",
    genre: "Science Fiction",
    isSaved: false,
    isLiked: false,
  },
];


function Books() {
  const [books, setBooks] = useState(booksData);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [showSaved, setShowSaved] = useState(false);

  const genres = ['All', 'Science Fiction', 'Fantasy', 'Mystery', 'Romance'];

  const handleLike = (id) => {
    setBooks(books.map(book => 
      book.id === id ? { ...book, isLiked: !book.isLiked } : book
    ));
  };

  const handleSave = (id) => {
    setBooks(books.map(book => 
      book.id === id ? { ...book, isSaved: !book.isSaved } : book
    ));
  };

  const filteredBooks = books.filter(book => {
    if (showSaved) return book.isSaved;
    if (selectedGenre === 'All') return true;
    return book.genre === selectedGenre;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Filter and Save Section */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <FaFilter className="text-white" />
          <select 
            className="bg-gray-800 text-white rounded-md px-4 py-2"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            {genres.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </div>
        <button 
          className={`px-4 py-2 rounded-md ${showSaved ? 'bg-purple-600' : 'bg-gray-800'} text-white`}
          onClick={() => setShowSaved(!showSaved)}
        >
          Saved Books
        </button>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {filteredBooks.map(book => (
          <div key={book.id} className="backdrop-blur-sm bg-white/10 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img 
              src={book.image} 
              alt={book.title} 
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">{book.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{book.description}</p>
              <div className="flex justify-between items-center">
                <button 
                  onClick={() => handleLike(book.id)}
                  className={`p-2 rounded-full ${book.isLiked ? 'text-red-500' : 'text-gray-400'}`}
                >
                  <FaHeart />
                </button>
                <button 
                  onClick={() => handleSave(book.id)}
                  className={`p-2 rounded-full ${book.isSaved ? 'text-yellow-500' : 'text-gray-400'}`}
                >
                  <FaBookmark />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
