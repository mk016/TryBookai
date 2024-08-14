import React from 'react';
 // You can use a skip icon from react-icons

function NewsCard() {
  return (
    <div className="md:flex md:justify-center md:items-center container mx-auto px-4 mt-9 mb-9">
      <div className=" backdrop-blur-sm bg-white/10 rounded-3xl p-6 md:p-8 max-w-sm md:max-w-md shadow-lg relative text-white">
        {/* Fire Emoji Icon */}
        <span className="absolute top-4 left-4 text-2xl"></span>

    

        {/* Card Content */}
        <h2 className="text-xl md:text-2xl font-bold mt-6 mb-5 text-center">
        Stay Updated

        </h2>
        <p className="text-sm text-gray-400 mt-2">
        Subscribe to our newsletter for the latest AI writing tips and BookAI updates.
        </p>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Your email goes here"
          className="mt-4 p-3 w-full rounded-lg bg-white text-gray-200 placeholder-gray-400"
        />

        {/* Submit Button */}
        <button className="mt-4 w-full bg-light-blue text-white py-3 rounded-lg font-semibold transform transition-transform duration-300 ease-in-out hover:scale-105">
          Submit
        </button>
      </div>
    </div>
  );
}

export default NewsCard;
