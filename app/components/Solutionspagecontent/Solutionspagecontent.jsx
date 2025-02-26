"use client"
import React from 'react';
import Link from 'next/link';
import "./Solutionspagecontent.css";
import { motion } from 'framer-motion';

const Solutionspagecontent = () => {
  const content = [
    { label: 'Digital Shop Floor', link: '/solutions/digital-shop', desc: 'Get a single source of truth for all manufacturing metrics across departments, transactions, assets, and people and with KALVEN factory Scheduling Solution' },
    { label: 'Marketplace and E-Commerce', link: '/solutions/e-commerce', desc: 'Discover how digital technologies have transformed the core of e-commerce to allow sellers to connect with their customers through the web, mobile, and intelligent platforms' },
    { label: 'Factory Process Automation', link: '/solutions/factory-automation', desc: 'Solve business problems with strategic digital tools and accelerators' },
    { label: 'E-Learning Solution', link: '/solutions/e-learning', desc: 'With an extensive portfolio of elegant on-demand education apps from KALVEN Software Solutions, discover how you can facilitate the fast and widespread dissemination of skills and knowledge.' },
    { label: 'Health Care and Tele-medicine Solution', link: '/solutions/healthcare-telemedicine', desc: 'With custom on-demand virtual healthcare technologies and solutions, our solutions allow you to optimize clinical workflows, reduce operating costs, and improve patient care - from anywhere and anytime.' },
    { label: 'iExtractor', link: '/solutions/iextractor', desc: 'Discover how you can obtain and analyze rich intelligence from unstructured data quickly, effortlessly, and accurately - to address business challenges and embrace opportunities - in real-time.' },
    { label: 'Logical & Transport Solution', link: '/solutions/logistics-transport', desc: 'With several versatile, out-of-the-box, and open-to-customization solutions, we help you tackle the daily challenges in on-demand logistics for positive balance-sheet gains.' },
    { label: 'Taxi App', link: '/solutions/taxi-app', desc: 'Discover outstanding business outcomes with KALVEN expertise. Optimize costs and minimize deployment timelines by leveraging proven methodologies, assets, repositories, and conversion capabilities.' },
    { label: 'KALVEN4HANA', link: '/solutions/Kalven-4hana', desc: 'Discover outstanding business outcomes with KALVEN expertise. Optimize costs and minimize deployment timelines by leveraging proven methodologies, assets, repositories, and conversion capabilities.' },
    { label: 'Mobile Inventory Manager', link: '/solutions/mobile-inventory', desc: 'Get real-time control and visibility of your inventory and warehousing operations.' },
  ];

  return (
    <div>
      <div className="p-4 mt-10 leading-loose tracking-wider lg:px-32">
        <p className="text-black">
          Organizations globally are witnessing some of the most turbulent, volatile, and disruptive times in recent history...
        </p>
      </div>
      
      <div className="cursor-pointer services-list mt-20 px-4 lg:px-32">
        {content.map((item, index) => (
          <div key={index}>
            <Link href={item.link}>
              <div className="service-item mt-10 flex items-center justify-start my-4 group hover:bg-gray-200 p-4 transition-all duration-300">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="service-content md:flex lg:flex justify-between w-full items-center"
                >
                  <h2 className="text-2xl text-purple-800">{item.label}</h2>
                  <div className="flex lg:gap-44 items-center">
                    <p className="text-gray-600 mt-4 w-96">{item.desc}</p>
                    <span className="text-red-700 text-3xl group-hover:translate-x-3 transition-transform duration-600">&rarr;</span>
                  </div>
                </motion.div>
              </div>
            </Link>
            {index < content.length - 1 && <hr className="border-t border-gray-300 my-4" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutionspagecontent;
