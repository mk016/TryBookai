import React from 'react';
import { IoBookOutline, IoSettingsOutline, IoRocketOutline, IoDownloadOutline } from 'react-icons/io5';

function Work() {
  return (
    <div className=" bg-transparent container mx-auto px-4 text-center rounded-lg p-8 text-white">
      <h1 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">How It Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col items-center justify-center mt-6">
          <IoBookOutline className="w-16 h-16" />
          <h3 className="text-lg font-semibold ">Choose Your Genre</h3>
          <p className="text-center">Select from a wide range of genres or create a custom blend.</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <IoSettingsOutline className="w-16 h-16" />
          <h3 className="text-lg font-semibold mt-2">Provide Key Details</h3>
          <p className="text-center">Input main characters, plot points, or themes to guide the AI.</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <IoRocketOutline className="w-16 h-16" />
          <h3 className="text-lg font-semibold mt-2">AI Generation</h3>
          <p className="text-center">Our advanced AI creates your book based on your inputs.</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <IoDownloadOutline className="w-16 h-16" />
          <h3 className="text-lg font-semibold mt-2">Review and Download</h3>
          <p className="text-center">Review your generated book and download in your preferred format.</p>
        </div>
      </div>
    </div>
  );
}

export default Work;
