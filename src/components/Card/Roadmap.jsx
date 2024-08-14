import React from "react";
import { FaUserCircle, FaStore, FaUsers, FaPaintBrush } from "react-icons/fa"; // Importing icons

function Roadmap() {
  return (
    <div className="bg-transparent py-8">
      <div className="backdrop-blur-sm bg-white/10 rounded-lg  p-8 sm:p-8 max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 text-2xl sm:text-3xl font-bold">Roadmap</h1>
        </div>
        
        <div className="flex flex-col grid grid-cols-2 sm:grid sm:grid-rows-1 ">
 {/* Roadmap Item 1 */}
 <div className="flex items-center mb-6 sm:mb-8 transform transition-transform duration-300 ease-in-out hover:scale-105 ">
 <div className="text-white text-3xl sm:text-4xl mr-4 bg-gradient-to-r p-3 from-purple-400 to-blue-600 h-[4vh] w-[4vh] rounded-full flex items-center justify-center">
  <FaUserCircle />
</div>

          <div>
            <h2 className="text-white text-base sm:text-lg md:text-xl font-semibold">
              Advanced Character Development
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              AI-powered tool for creating deep, complex characters.
            </p>
          </div>
        </div>

        {/* Roadmap Item 2 */}
        <div className="flex items-center mb-6 sm:mb-8 transform transition-transform duration-300 ease-in-out hover:scale-105">
        <div className="text-white text-3xl sm:text-4xl mr-4 bg-gradient-to-r p-3 from-purple-400 to-blue-600 h-[4vh] w-[4vh] rounded-full flex items-center justify-center">
            <FaStore />
          </div>
          <div>
            <h2 className="text-white text-base sm:text-lg md:text-xl font-semibold">
              Marketplace Integration
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              A marketplace to buy and sell AI-generated content.
            </p>
          </div>
        </div>

        {/* Roadmap Item 3 */}
        <div className="flex items-center mb-6 sm:mb-8 transform transition-transform duration-300 ease-in-out hover:scale-105">
        <div className="text-white text-3xl sm:text-4xl mr-4 bg-gradient-to-r p-3 from-purple-400 to-blue-600 h-[4vh] w-[4vh] rounded-full flex items-center justify-center">
            <FaUsers />
          </div>
          <div>
            <h2 className="text-white text-base sm:text-lg md:text-xl font-semibold">
              Community Collaboration
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Tools for community-driven AI projects and collaborations.
            </p>
          </div>
        </div>

        {/* Roadmap Item 4 */}
        <div className="flex items-center mb-6 sm:mb-8 transform transition-transform duration-300 ease-in-out hover:scale-105">
        <div className="text-white text-3xl sm:text-4xl mr-4 bg-gradient-to-r p-3 from-purple-400 to-blue-600 h-[4vh] w-[4vh] rounded-full flex items-center justify-center">
            <FaPaintBrush />
          </div>
          <div>
            <h2 className="text-white text-base sm:text-lg md:text-xl font-semibold">
              Creative Tools
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              AI-powered creative tools for artists and designers.
            </p>
          </div>
        </div>
        </div>
       
      </div>
    </div>
  );
}

export default Roadmap;
