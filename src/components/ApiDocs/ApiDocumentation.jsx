import React from 'react';
import { FaCode, FaBook, FaCopy, FaCheckCircle } from 'react-icons/fa';

const ApiDocumentation = () => {
    const [copiedEndpoint, setCopiedEndpoint] = React.useState(null);

    const apiEndpoints = [
        {
            id: 1,
            name: 'Generate Book Content',
            endpoint: '/api/generate/book',
            method: 'POST',
            description: 'Generate AI-powered book content based on provided parameters',
            parameters: {
                topic: 'string (required)',
                genre: 'string (required)',
                language: 'string (required)',
                wordCount: 'number',
                pages: 'number',
                tone: 'string'
            },
            example: {
                topic: "Space Adventure",
                genre: "science fiction",
                language: "english",
                wordCount: 1000,
                pages: 5,
                tone: "exciting"
            }
        },
        {
            id: 2,
            name: 'Generate Book Cover',
            endpoint: '/api/generate/cover',
            method: 'POST',
            description: 'Generate AI book cover image',
            parameters: {
                title: 'string (required)',
                description: 'string',
                style: 'string'
            }
        }
    ];

    const copyToClipboard = (text, endpointId) => {
        navigator.clipboard.writeText(text);
        setCopiedEndpoint(endpointId);
        setTimeout(() => setCopiedEndpoint(null), 2000);
    };

    return (
        <div className="min-h-screen mt-[100px]">
                  <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(125%_125%_at_50%_10%,_#000_40%,_#63e_100%)]"></div>

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                        API Documentation
                    </h1>
                    <p className="text-gray-400">
                        Integrate AI-powered book generation into your application
                    </p>
                </div>

                <div className="grid gap-8">
                    {apiEndpoints.map((endpoint) => (
                        <div key={endpoint.id} className="bg-gray-800/50 backdrop-blur-lg p-6 shadow-xl">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-2xl font-semibold text-purple-400">
                                    {endpoint.name}
                                </h2>
                                <span className="px-3 py-1 bg-blue-500 rounded-full text-sm">
                                    {endpoint.method}
                                </span>
                            </div>

                            <p className="text-gray-400 mb-4">{endpoint.description}</p>

                            <div className="flex items-center justify-between bg-gray-700 rounded p-3 mb-4">
                                <code className="text-green-400">{endpoint.endpoint}</code>
                                <button
                                    onClick={() => copyToClipboard(endpoint.endpoint, endpoint.id)}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    {copiedEndpoint === endpoint.id ? (
                                        <FaCheckCircle className="text-green-500" />
                                    ) : (
                                        <FaCopy />
                                    )}
                                </button>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-semibold mb-2">Parameters</h3>
                                <div className="bg-gray-700 rounded p-4">
                                    <pre className="text-sm text-gray-300">
                                        {JSON.stringify(endpoint.parameters, null, 2)}
                                    </pre>
                                </div>
                            </div>

                            {endpoint.example && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Example Request</h3>
                                    <div className="bg-gray-700 rounded p-4">
                                        <pre className="text-sm text-gray-300">
                                            {JSON.stringify(endpoint.example, null, 2)}
                                        </pre>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ApiDocumentation; 