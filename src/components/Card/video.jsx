import React from "react";
import book2 from "../../assets/img/book2.png";

function Video() {
  return (
    <div className="flex items-center justify-center h-[50vh] mt-20 px-4 mb-20">
      <div className="backdrop-blur-sm bg-white/10 py-20 px-20 rounded-xl">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl  xl:max-w-xl">
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

export default Video;
