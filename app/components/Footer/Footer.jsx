"use client";
import React from "react";
import "./Footer.css";
import {
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const quickLinks = [
    "SAP",
    "Digitalization",
    "Modernization",
    "Cloud & Infrastructure Management Services",
    "Cyber Security Services",
    "IoT",
  ];

  const subsidiaries = ["Aaseya IT Services", "Codiant Technologies", "Intellents"];

  const socialLinks = [
    { icon: FaTwitter, url: "https://twitter.com", label: "Twitter" },
    { icon: FaLinkedin, url: "https://www.linkedin.com", label: "LinkedIn" },
    { icon: FaYoutube, url: "https://www.youtube.com", label: "YouTube" },
    { icon: FaInstagram, url: "https://www.instagram.com", label: "Instagram" },
    { icon: FaFacebook, url: "https://www.facebook.com", label: "Facebook" },
    { icon: FaPinterest, url: "https://www.pinterest.com", label: "Pinterest" },
  ];

  // Animation trigger for sections
  const { ref: footerRef, inView: footerVisible } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={footerRef}
      className={`bg-black text-white p-6 cursor-pointer lg:p-32 transition-all duration-700 ease-out ${
        footerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Quick Links Section */}
      <Section title="Quick Links">
        <Grid items={quickLinks} />
      </Section>

      <hr className="border-white my-6" />

      {/* Subsidiaries Section */}
      <Section title="Subsidiaries">
        <Grid items={subsidiaries} />
      </Section>

      <hr className="border-white my-6" />

      {/* Footer Logo */}
      <div className="lg:flex items-center gap-5">
        <img src="/assets/Kalven-logo.png" className="lg:w-60 w-52" alt="Kalven Logo" />
        <img src="/assets/footerimg1.png" className="mt-2" alt="Footer Image" />
      </div>

      <hr className="border-white my-6" />

      {/* Footer Policies */}
      <div className="text-sm text-center">
        <p className="leading-loose">
          CSR / Site Map / Legal / Privacy Policy / Payment Policy / Modern Slavery Act Policy
        </p>
        <p className="pt-3 text-gray-400">
          Copyright &copy; 2025. Kalven Software Solutions Technologies. All Rights Reserved.
        </p>

        {/* Social Media Section */}
        
        <div className="mt-6">
          <h1 className="text-yellow-400 text-lg mb-4">Follow Us:</h1>
          <div className="flex justify-center gap-6 text-2xl">
            {socialLinks.map(({ icon: Icon, url, label }, index) => {
              const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

              return (
                <a
                  ref={ref}
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`hover:text-yellow-400 transition-transform duration-500 ease-out ${
                    inView ? "slide-up opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  }`}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// Section Component
const Section = ({ title, children }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`flex flex-col lg:flex-row lg:items-start lg:gap-7 transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-yellow-400 lg:text-xl mb-4 lg:mb-0">{title}:</h1>
      {children}
    </div>
  );
};

// Grid Component
const Grid = ({ items }) => (
  <div className="grid grid-cols-1 text-sm sm:grid-cols-2 lg:flex lg:gap-10 gap-4">
    {items.map((item, index) => (
      <p key={index} className="hover:underline">{item}</p>
    ))}
  </div>
);

export default Footer;
