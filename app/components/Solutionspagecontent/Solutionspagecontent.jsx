"use client"
import React from 'react';
import "./Solutionspagecontent.css"
import { motion } from 'framer-motion';

const Solutionspagecontent = () => {
  const content = [
    {
      label: 'Digital Shop Floor',
      desc: 'Get a single source of truth for all manufacturing metrics across departments, transactions, assets, and people and with KALVEN factory Scheduling Solution',
    },
    {
      label: 'Marketplace and E=Commerce',
      desc: 'Discover how digital technologies have transformed the core of e-commerce to allow sellers to connect with thier customers through the web,mobile, and intelligent platforms',
    },
    {
      label: 'Factory Process Automation',
      desc: 'Solve business problems with strategic digital tools and accelarators',
    },
    {
      label: 'E-Learning Solution',
      desc: 'With an extensive portfolio of elegant on-demand education apps from KALVEN Software Solutions,discover how you can facilitate the fast and widespread dissemination of skills and knowledge.',
    },
    {
      label: 'Health Care and Tele-medicine Solution',
      desc: 'With custom on-demand virtual healthcare technologies and solutions, our solutions allow you to optimize clinical workflows, reduce operating costs, and improve patient care - from anywhere and anytime.',
    },
    {
      label: 'iExtractor',
      desc: 'Discover how you can obtain and analyse rich intelligence from unstructured data quickly, effortlessly, and accurately - to address business challenges and embrace oppurtunities - in real - time.',
    },
    {
      label: 'Logical & Transport Solution',
      desc: 'With several versatile, out-of-the-box, and open-to-customization solutions, we help you tackle the daily challenges in on-demand logistics for positive balance-sheet gains.',
    },
    {
      label: 'Taxi App',
      desc: "Discover outstanding busniess outcomes with KALVEN expertise, Optimize, costs and minimize deployment timelines by leveraging proven methodologies, assets, repositories and conversion capabilities.",
    },
    {
      label: 'KALVEN4HANA',
      desc: 'Discover outstanding business outcomes with KALVEN expertise, Optimize costs and minimize deployment timelines by leveraging proven methodologies, assets, repositories, and conversion capabilities.',
    },
    {
      label: 'Mobile Inventory Manager',
      desc: 'Get real-time control and visibilty of your inventory and wasrehousing operations',
    },
    {
      label: 'Safe @Work',
      desc: 'Enable organizations to manage workplace safety and employee well-being in a systematic and best-practices driven manner with quick turn around times ',
    },
    {
      label: 'ChemOne',
      desc: 'Construct a robust digital care for chemical enteprises and achieve sustainable cost leadership at optimal costs.',
    },
    {
      label: 'ManufacturingOne',
      desc: 'Strengthen end-to-end manufacturing performances with a single digital platform.',
    },
    {
      label: 'WholesaleOne',
      desc: 'Navigate your wholesale enterprise and address business challenges with ease.',
    },
    {
      label: 'TechOne',
      desc: 'Implement business innovations in your technology business challenges wih ease.',
    },
    {
      label: 'ServicesOne',
      desc: 'Embrace automation and free up the workforce to focus more on strategic innovation.',
    },
    {
      label: 'PeopleOne',
      desc: 'Maximize time to value, performance, and visibility of your valuable resources with robust business platform.',
    },
    {
      label: 'FinanceOne',
      desc: 'Streamline financial operations in line with global standards and enable an enhanced level of decision making',
    },
    {
      label: 'CPGOne',
      desc: 'Give your organization the SAP digital advantage by reimagining end-to-end business processes in your CP enterprise',
    },
    {
      label: 'SFOne',
      desc: 'Harness the power of pre-defined best practices, templates, tools, and training accelerators and drive outstanding empolyee experiences',
    },
    {
      label: 'Data and Analytics',
      desc: 'Share actionable information from across the enterprise with a value-led Data & Analytics Platform and generate value',
    },
  ];

  return (
    <div>
      <div className="p-4 mt-10 leading-loose tracking-wider lg:px-32">
        <p className="text-black">
        Organizations globally are witnessing some of the most turbulent, volatile, and disruptive times in recent history. As organizations seek to understand the evolving challenges and adapt themselves to the new normal, we observe a variety of approaches that they are taking. Most forward-looking organizations are trying to reimagine their business, build resilience to withstand market pressures, and safeguard themselves from any future disruptions. Digital Transformation and strengthening/accelerating the digital journey is turning out to be vital. Organizations need a right business partner who can understand organization needs – challenges and empower them with advisory, services, platforms, and solutions to facilitate these initiatives.
        </p>
        <p className="mt-6 text-gray-800">
        YASH Technologies has built an array of Digital solutions customized to address global organizations’ unique business challenges. Our Digital leaders have architected these easy-to-deploy, easier-to-adapt, and cost-efficient solutions that combine disruptive technologies like Analytics, Cloud, IoT, and Automation, with vertical-functional domain expertise and industry’ best-and-next practices. These change agents are empowering clients across all geographies to differentiate themselves in the market and grow revenues.
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

export default Solutionspagecontent;
