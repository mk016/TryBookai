import React from 'react';
import { AiOutlineRobot, AiOutlineDownload } from 'react-icons/ai';
import { BiBookOpen } from 'react-icons/bi';
import { RiTranslate2 } from 'react-icons/ri';

const features = [
  {
    icon: <AiOutlineRobot size={40} />,
    title: 'AI-Powered Writing',
    description: 'Generate high-quality content with advanced AI technology.',
  },
  {
    icon: <BiBookOpen size={40} />,
    title: 'Custom Genres',
    description: 'Create stories in any genre or blend multiple styles.',
  },
  {
    icon: <AiOutlineDownload size={40} />,
    title: 'Instant Download',
    description: 'Get your completed book in various formats instantly.',
  },
  {
    icon: <RiTranslate2 size={40} />,
    title: 'Multilingual',
    description: 'Generate content in multiple languages effortlessly.',
  },
];

const Features = () => {
  return (
    <div className="h-full w-full text-white">
        
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg transform transition-transform hover:scale-105 hover:translate-y-[-10px] bg-transparent"
            >
              <div className="mb-4 text-purple-600">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
