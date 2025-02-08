import React from 'react';

const contentData = [
    {
        title: 'Become a Partner',
        description: 'KALVEN takes pride in fostering effective working relationships with our partners!',
        buttonText: 'Register Now',
        buttonColor: 'bg-blue-500',
        hoverColor: 'hover:bg-blue-600'
    },
    {
        title: 'Find your dream role',
        description: 'Join our family of open collaborators, advance your goals and rise above your designation.',
        buttonText: 'Career at KALVEN',
        buttonColor: 'bg-green-500',
        hoverColor: 'hover:bg-green-600'
    },
    {
        title: 'Perks and fun to love',
        description: 'We work hard, and reward harder – including several surprising financial and wellness perks.',
        buttonText: 'Perks at KALVEN',
        buttonColor: 'bg-yellow-500',
        hoverColor: 'hover:bg-yellow-600'
    }
];

const Careerspagepartner = () => {
    return (
        <div className="p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {contentData.map((content, index) => (
                    <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800">{content.title}</h2>
                        <p className="mt-4 text-gray-600">{content.description}</p>
                        <button 
                            className={`mt-6 px-6 py-2 ${content.buttonColor} text-white rounded-full ${content.hoverColor} transition duration-300`}
                        >
                            {content.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Careerspagepartner;
