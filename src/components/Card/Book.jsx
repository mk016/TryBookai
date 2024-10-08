import React from "react";
import book2 from "../../assets/img/book2.png";

function Book() {
  return (
    <div className="flex items-center justify-center h-100 mt-20 px-4 mb-20 transform transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="backdrop-blur-sm bg-white/10 py-9 px-9 rounded-xl">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg  xl:max-w-xl">
          <img
            src={book2}
            alt="Book Cover"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Book;
