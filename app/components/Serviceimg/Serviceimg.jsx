"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ServiceCards = () => {
  const services = [
    {
      title: 'Digitalization',
      description: 'Drive Innovation, Efficiency, Productivity & Teamwork',
      imageSrc: '/assets/digitalization.png',
      link: '/services/digitalization',
    },
    {
      title: 'Modernization',
      description: 'Transform your IT landscape - Create an agile enterprise',
      imageSrc: '/assets/mordernization.png',
      link: '/services/modernization',
    },
    {
      title: 'Intelligence Services',
      description: 'Become a data-driven business - Reinvent your organization',
      imageSrc: '/assets/intelligence.png',
      link: '/services/intelligence',
    },
    {
      title: 'Cloud & Infrastructure Management Services',
      description: 'Optimized and smart infrastructure - The foundation for your digital business',
      imageSrc: '/assets/nextgen.png',
      link: '/services/cloud-infrastructure',
    }
  ];

  return (
    <div className="max-w-9xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-lg group transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ height: '400px' }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 pointer-events-none"
              style={{ backgroundImage: `url(${service.imageSrc})` }}
            ></div>

            {/* Optional glowing overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Clickable Content Area */}
            <Link
              href={service.link}
              className="absolute inset-0 z-10 px-4 py-6 flex flex-col justify-end no-underline"
            >
              <h3 className="text-2xl font-bold mb-2 drop-shadow-md text-white group-hover:text-white visited:text-white hover:text-white">
                {service.title}
              </h3>
              <p className="text-sm mb-4 drop-shadow-md text-white group-hover:text-white visited:text-white hover:text-white">
                {service.description}
              </p>


              {/* Icon on hover */}
              <div className="absolute bottom-4 right-4 text-white group-hover:text-white transition-all transform group-hover:scale-110 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:rotate-45">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 19l14-14M5 5h14v14" />
                </svg>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
