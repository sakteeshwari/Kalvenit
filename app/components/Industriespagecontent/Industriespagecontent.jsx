"use client"
import React from 'react';

import { motion } from 'framer-motion';

const Industriespagecontent = () => {
  const content = [
    {
      label: 'Manufacturing',
      desc: "Re-imagine and re-invent the business models and value chains in the era of 'everything connected.'",
    },
    {
      label: 'Life-sciences',
      desc: "Delivering Life to the Science of pharma and medicine with innovation and technology transformation",
    },
    {
      label: "BFSI",
      desc:
        "Customer-centric and digital-driven services focused on the future of banking",
      
    },
    {
      label: "Mining",
      desc:
        "Advanced services to drive efficiency improvements across the mining value chain",
     
    },
    {
      label: "Healthcare",
      desc:
        "Enhance your patient experience at optimized costs with technologies of the future",
      
    },
    {
      label: "Government",
      desc:
        "Embrace innovation to transform fast and adapt to the speed of change",
      
    },
    {
      label: "Utilities",
      desc:
        "Leverage Digital to positively impact the value cycle - from generation to transmission to consumer-interaction",
    },
    {
      label: "Agribusiness",
      desc:
        "Connecting farms to machines - seed the technology to reap the transformation",
      link: "https://example.com/agribusiness", // Replace with the actual link
    },
    {
      label: "Logistics",
      desc:
        "Highly flexible logistics value chain to ensure smoother operations - anytime and anywhere",
      
    },
    {
      label: "Dairy Farming",
      desc:
        "Streamline business processes with emerging technologies to cater to the changing customer preferences",
     
    },
    {
      label: "Education",
      desc:
        "Streamline the ways education reaches to the students with 360-degree tech-transformation of the education ecosystem",
      
    },
    {
      label: "Aviation",
      desc:
        "Address the rapid technological advancements as well as fluctuating customer preferences",
     
    },
    {
      label: "Retail",
      desc:
        "Addressing the challenges of physical as well as digital retail",
      
    },
    {
      label: "Telecom",
      desc:
        "From legacy to latest - helping Telecom organizations to cater to the new world of communications",
     
    },
    {
      label: "Media/Entertainment",
      desc:
        "Re-imagine business models and take advantage of disruptive technologies to serve your customer better",
     
    },
  ];

  return (
    <div>
      <div className="p-4 mt-10 leading-loose tracking-wider lg:px-32">
       
        <p className="mt-6 text-gray-800">
        KALVEN Software Solutions has a rich and distinguished history of working consultatively with clients across Industries and assist them in their transformation journey.  Our services and solutions portfolio is comprehensive. We have built a strong team of advisory consulting professionals who engage with business and IT leaders across companies and suggest customized solutions that address the organization’s most pressing and complex problems. Our best-in-class SME‘s combine their Industry domain knowledge ( most of them have experience working in the industries they specialize in) with exceptional technology skills. What separates us from the rest is our business approach, which is exceptionally customer-centric, ensuring that we are flexible, agile, and passionate in delivering these solutions and helping clients realize tangible value. In the Industries that we specialize in, our SME‘s run focused CoE‘s and Knowledge Universities that help us keep up with the market trends and keep our consulting professionals trained and enabled. 
        </p>
      </div>

      {/* Adding the contents below using map */}
      <div className="services-list mt-20 px-4 lg:px-32 ">
  {content.map((item, index) => (
    <div key={index}>
      {/* Wrapper div for hover effect */}
      <div className="service-item mt-10  flex items-center justify-start my-4 group hover:bg-gray-200 p-4 transition-all duration-300">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: index * 0.2 }}
          className="service-content md:flex lg:flex justify-between  w-full items-center"
        >
          <h2 className="text-2xl text-purple-800">{item.label}</h2>
          <div className="flex  lg:gap-44 items-center">
            <p className="text-gray-600 mt-4 w-96">{item.desc}</p>
            {/* Arrow moves forward on hover */}
           
          
          <span className="text-red-700 text-3xl group-hover:translate-x-3 transition-transform duration-600">
              &rarr;
            </span>
            </div>
        </motion.div>
      </div>
      {index < content.length - 1 && <hr className="border-t border-gray-300 my-4" />}
    </div>
           
            
            
                        
          
        ))}
      </div>
    </div>
  );
};

export default Industriespagecontent;
