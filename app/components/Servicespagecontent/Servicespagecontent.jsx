"use client"
import React from 'react';
import Link from 'next/link';
import "./Servicespagecontent.css";
import { motion } from 'framer-motion';

const Servicespagecontent = () => {
  const content = [
    {
      label: 'Digitalization',
      desc: 'Design and deliver engaging experiences that resonate better with customers, employees, and other stakeholders',
      link: '/services/digitalization'
    },
    {
      label: 'Connected Convergence Platform',
      desc: 'Harness the hidden power of data and technology to unlock multifold amplified outcomes for your business',
      link: '/services/intelligence/connected-convergence'
    },
    {
      label: 'Customer Centric Ecosystem',
      desc: 'Create an experience-based ecosystem for your customers to nurture and strengthen the relationship',
      link: '/services/customer-ecosystem'
    },
    {
      label: 'Infrastructure Management Services',
      desc: 'Simplify and strengthen your IT foundation to accelerate the Digital evolution',
      link: '/services/cloud-infrastructure'
    },
    {
      label: 'Sustainability Services',
      desc: 'Develop a resilient and future-fit business to build a healthy and safe environment',
      link: '/services/sustainability'
    },
    {
      label: 'Modernization',
      desc: 'Modernize your enterprise technology landscape to drive optimal performance of your IT environment',
      link: '/services/modernization'
    },
    {
      label: 'Intelligence Services',
      desc: 'Technology-driven enterprise intelligence to help you identify, decide, and innovate',
      link: '/services/intelligence'
    },
    {
      label: 'Co-Innovation Lab Services',
      desc: "Co-laborate, Co-create, and Co-Innovate - Let's #Do It Together",
      link: '/services/co-innovation-lab'
    },
    {
      label: 'Application Maintenance & Support',
      desc: 'Nimble, connected, and intelligent application services to provide a superior user experience',
      link: '/services/nextgen-ams'
    },
    {
      label: 'Corporate Real Estate IT (CRES-IT)',
      desc: 'Eliminate the operational hindrances for extracting business performance',
      link: '/services/cres-it'
    }
  ];

  return (
    <div>
      <div className="p-4 mt-10 leading-loose tracking-wider lg:px-32">
        <p className="text-black">
          The digital technologies catalyze the enterprises looking to transform-at-speed...
        </p>
        <p className="mt-6 text-gray-800">
          KALVEN Software Solutions has the right combination of experience, competencies, people...
        </p>
      </div>

      <div className="services-list mt-20 px-4 lg:px-32">
        {content.map((item, index) => (
          <div key={index}>
            <Link href={item.link} className="block">
              <div className="service-item mt-10 flex items-center justify-start my-4 group hover:bg-gray-200 p-4 transition-all duration-300 cursor-pointer">
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

export default Servicespagecontent;
