import React from 'react';
import { FaCheck, FaTimes, FaRocket, FaBuilding, FaCrown } from 'react-icons/fa';

const PricingPage = () => {
    const plans = [
        {
            name: 'Starter',
            icon: <FaRocket className="text-4xl text-blue-500 mb-4" />,
            price: '$29',
            period: 'per month',
            features: [
                '50,000 words per month',
                '10 book covers',
                'Basic API access',
                'Email support',
                'Standard response time'
            ],
            notIncluded: [
                'Custom models',
                'Priority support',
                'Advanced analytics'
            ],
            buttonText: 'Start Free Trial',
            popular: false
        },
        {
            name: 'Professional',
            icon: <FaBuilding className="text-4xl text-purple-500 mb-4" />,
            price: '$99',
            period: 'per month',
            features: [
                '200,000 words per month',
                'Unlimited book covers',
                'Full API access',
                'Priority support',
                'Custom models',
                'Analytics dashboard'
            ],
            notIncluded: [
                'White-label solution',
                'Custom integration'
            ],
            buttonText: 'Get Started',
            popular: true
        },
        {
            name: 'Enterprise',
            icon: <FaCrown className="text-4xl text-yellow-500 mb-4" />,
            price: 'Custom',
            period: 'contact us',
            features: [
                'Unlimited words',
                'Unlimited everything',
                'White-label solution',
                'Custom integration',
                'Dedicated support',
                'Custom models',
                'Advanced analytics'
            ],
            notIncluded: [],
            buttonText: 'Contact Sales',
            popular: false
        }
    ];

    return (
        <div className="mt-[100px] p-8">
                  <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(125%_125%_at_50%_10%,_#000_40%,_#63e_100%)]"></div>

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                        Pricing Plans
                    </h1>
                    <p className="text-gray-400">
                        Choose the perfect plan for your needs
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-gray-800/50 backdrop-blur-lg p-8 shadow-xl ${
                                plan.popular ? 'ring-2 ring-purple-500' : ''
                            }`}
                        >
                            {plan.popular && (
                                <span className="absolute top-0 right-0 bg-purple-500 text-white text-sm px-3 py-1 rounded-bl rounded-tr">
                                    Most Popular
                                </span>
                            )}

                            <div className="text-center mb-8">
                                {plan.icon}
                                <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                                <div className="text-3xl font-bold text-purple-400 mb-1">
                                    {plan.price}
                                </div>
                                <div className="text-gray-400">{plan.period}</div>
                            </div>

                            <div className="space-y-4">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-center text-gray-300">
                                        <FaCheck className="text-green-500 mr-2" />
                                        {feature}
                                    </div>
                                ))}
                                {plan.notIncluded.map((feature, i) => (
                                    <div key={i} className="flex items-center text-gray-500">
                                        <FaTimes className="text-red-500 mr-2" />
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <button
                                className={`w-full mt-8 px-4 py-2 rounded-lg font-semibold transition-colors ${
                                    plan.popular
                                        ? 'bg-purple-500 hover:bg-purple-600'
                                        : 'bg-gray-700 hover:bg-gray-600'
                                }`}
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingPage; 