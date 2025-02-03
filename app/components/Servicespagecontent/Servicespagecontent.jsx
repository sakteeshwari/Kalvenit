"use client"
import React from 'react';
import "./Servicespagecontent.css"
import { motion } from 'framer-motion';

const Servicespagecontent = () => {
  const content = [
    {
      label: 'Digitalization',
      desc: 'Design and deliver engaging experiences that resonate better with customers, employees, and other stakeholders',
    },
    {
      label: 'Connected Convergence Platform',
      desc: 'Harness the hidden power of data and technology to unlock multifold amplified outcomes for your business',
    },
    {
      label: 'Customer Centric Ecosystem',
      desc: 'Create an experience-based ecosystem for your customers to nurture and strengthen the relationship',
    },
    {
      label: 'Infrastructure Management Services',
      desc: 'Simplify and strengthen your IT foundation to accelerate the Digital evolution',
    },
    {
      label: 'Sustainability Services',
      desc: 'Develop a resilient and future-fit business to build a healthy and safe environment',
    },
    {
      label: 'Modernization',
      desc: 'Modernize your enterprise technology landscape to drive optimal performance of your IT environment',
    },
    {
      label: 'Intelligence Services',
      desc: 'Technology-driven enterprise intelligence to help you identify, decide, and innovate',
    },
    {
      label: 'Co-Innovation Lab Services',
      desc: "Co-laborate, Co-create, and Co-Innovate - Let's #Do It Together",
    },
    {
      label: 'Application Maintenance & Support',
      desc: 'Nimble, connected, and intelligent application services to provide a superior user experience',
    },
    {
      label: 'Corporate Real Estate IT (CRES-IT)',
      desc: 'Eliminate the operational hindrances for extracting business performance',
    },
  ];

  return (
    <div>
      <div className="p-4 mt-10 leading-loose tracking-wider lg:px-32">
        <p className="text-black">
          The digital technologies catalyze the enterprises looking to transform-at-speed. Although traditional
          technology services like application development and maintenance, data centers, testing, etc. continue to be
          vital, newer technologies such as Artificial Intelligence, DevOps, Robotic Automation, Blockchain, Cloud, IoT
          are pivotal to transformation initiatives. Therefore, enterprises need the ‘right technology partner’ that can
          empower them to balance between their disparate legacy technology landscapes and emerging technologies.
        </p>
        <p className="mt-6 text-gray-800">
          KALVEN Software Solutions has the right combination of experience, competencies, people, and architecting capabilities
          in providing value-centric technology services and solutions for customers across industries. As a full-service
          technology partner, we offer a comprehensive suite of services across Enterprise Systems, Next-Gen Application
          Management, Cloud Solutions, Infrastructure services, etc. We leverage cutting-edge solution frameworks to enable
          our customers to address their business challenges, drive value, optimize costs, and foster enterprise agility.
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

export default Servicespagecontent;
