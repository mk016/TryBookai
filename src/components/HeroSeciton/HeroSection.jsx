import React from 'react';
import Features from '../Features/Features';

const HeroSection = () => {
  return (
    <section className="flex flex-col min-h-screen mt-[100px] text-white relative">
      <div className="absolute inset-0 overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0 bg-[url('/path-to-your-stars-background-image.png')] bg-cover opacity-30"></div>
      </div>

      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Explore the Possibilities of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">AI Book Writing</span><br />
          with <span className="text-blue-500">BookAI</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          Unleash the power of AI to create captivating books in minutes. <br />
          Download, Distribute wherever you want. Generate unlimited free books.
        </p>
        <div className="flex space-x-4 justify-center">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full">
            Get Started
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full">
            Get API Access
          </button>
        </div>
        <p className="text-yellow-400 text-sm mt-4">
          Attention: TryBookAI has been acquired by Indicus AI. Indicus LLM will be used for text and image generation.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
