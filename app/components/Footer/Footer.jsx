"use client";
import React from "react";
import "./Footer.css";
import Link from "next/link";
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
    { name: "SAP", url: "/coes/sap" },
    { name: "Digitalization", url: "/services/digitalization" },
    { name: "Modernization", url: "/services/modernization" },
    { name: "Cloud & Infrastructure Management Services", url: "/services/cloud-infrastructure" },
    { name: "Cyber Security Services", url: "/services/cyber-security" },
    { name: "IoT", url: "/coes/iot-embedded" },
  ];

  

  const socialLinks = [
    { icon: FaTwitter, url: "https://twitter.com", label: "Twitter" },
    { icon: FaLinkedin, url: "https://www.linkedin.com", label: "LinkedIn" },
    { icon: FaYoutube, url: "https://www.youtube.com", label: "YouTube" },
    { icon: FaInstagram, url: "https://www.instagram.com", label: "Instagram" },
    { icon: FaFacebook, url: "https://www.facebook.com", label: "Facebook" },
    { icon: FaPinterest, url: "https://www.pinterest.com", label: "Pinterest" },
  ];

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
        <Grid items={quickLinks} isInternal />
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
    <Link href="/aboutus/csr" passHref className="hover:underline">CSR</Link> / 
    
    <Link href="/aboutus/legal" passHref className="hover:underline"> Legal</Link> / 
    <Link href="/aboutus/privacy-policy" passHref className="hover:underline"> Privacy Policy</Link> / 
    <Link href="/aboutus/payment-policy" passHref className="hover:underline"> Payment Policy</Link> / 
    <Link href="/aboutus/modern-slavery-act" passHref className="hover:underline"> Modern Slavery Act Policy</Link>
  </p>

<p className="text-gray-400">  &copy; {new Date().getFullYear()} KALVEN Software Solutions. All rights reserved.</p>
        {/* Social Media Section */}
        <div className="mt-6">
          <h1 className="text-yellow-400 text-lg mb-4">Follow Us:</h1>
          <div className="flex justify-center gap-6 text-2xl">
            {socialLinks.map(({ icon: Icon, url, label }) => {
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

// Grid Component with Links
const Grid = ({ items, isInternal = false }) => (
  <div className="grid grid-cols-1 text-sm sm:grid-cols-2 lg:flex lg:gap-10 gap-4">
    {items.map(({ name, url }, index) => (
      isInternal ? (
        <Link key={index} href={url} passHref className="hover:underline">
          {name}
        </Link>
      ) : (
        <a key={index} href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {name}
        </a>
      )
    ))}
  </div>
);

export default Footer;
