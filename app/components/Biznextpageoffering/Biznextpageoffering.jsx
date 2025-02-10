import React from 'react';
import { ArrowRight } from "lucide-react";



const data = [
    {
        id: 1,
        image: "/assets/biznextoffering1.png",
        title: "Strategy and Industry Transformation Advisory",
        description: "Deep industry experience and business knowledge to help customers develop strategy roadmaps to succeed.",
    },
    {
        id: 2,
        image: "/assets/biznextoffering2.png",
        title: "Technology Advisory",
        description: "Assists customers to achieve their goals and objectives while generating maximum value for their business.",
    },
    {
        id: 3,
        image: "/assets/biznextoffering3.png",
        title: "Innovate with Us",
        description: "Drive engagement, productivity, and ability to bring together people, process, and technology and maximize business value while transforming themselves digitally.",
    },
];

const Biznextpageoffering = () => {
    

    return (
    
        <div className='mt-14 bg-white'>
            <h1 className='text-4xl mx-2  lg:text-6xl'>Service Offering <span className='text-red-500'>.</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
          
          {data.map((item) => (
              <div key={item.id} className=" -mt-4 relative group overflow-hidden rounded-lg shadow-lg">
                  {/* Image */}
                  <img src={item.image} alt={item.title} className="w-full h-full rounded-lg object-cover" />

                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-left p-4 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                      <h1 className="text-xl lg:text-2xl font-semibold ">{item.title}</h1>
                      <p className="text-sm mt-2">{item.description}</p>

                      {/* Know More Button - Fixed Hover Effect */}
                      <div  className={`py-3 text-lg `}>
                          <button className="relative flex items-center space-x-2 text-yellow-400 font-medium transition-all duration-300 hover:bg-yellow-500 hover:text-black px-4 py-1 rounded-3xl overflow-hidden border border-yellow-400">
                              {/* Arrow (Hidden by default, shows on hover) */}
                              <div className="transform transition-transform duration-500 ease-in-out group-hover:translate-x-1">
                                  <ArrowRight className="w-4 h-4" />
                              </div>

                              {/* Button Text */}
                              <span className="transition-all duration-500 ease-in-out">Know More</span>
                          </button>
                      </div>
                  </div>
              </div>
          ))}
      </div>
        </div>
    );
};

export default Biznextpageoffering;
