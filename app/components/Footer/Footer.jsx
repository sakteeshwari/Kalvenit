"use client";
import React, { useEffect, useState, useRef } from "react";
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
 
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Animation triggers when 30% of the footer is visible
    );
 
    if (ref.current) {
      observer.observe(ref.current);
    }
 
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
 
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
 
  return (
    <div
  ref={ref}
  className={`bg-black text-white p-6 lg:p-32 cursor-pointer  transition-all duration-1000 ease-out transform ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  <div className="flex justify-center lg:-mt-20 mb-8">
    <img
      src="/assets/footerimg2.png"
      className="w-40 lg:w-60 "
      alt="Footer Image"
    />
  </div>
      <Section title="Quick Links" isVisible={isVisible}>
        <Grid items={quickLinks} isInternal />
      </Section>
 
      <hr className="border-white my-6" />
 
      {/* Footer Logo */}
      <div className="lg:flex items-center gap-5">
        <Link href={"/"}>
          <img src="/assets/Kalven-logo.png" className="lg:w-60 w-52" alt="Kalven Logo" />
        </Link>
        <img src="/assets/footerimg1.png" className="mt-2" alt="Footer Image" />
       
      </div>
 
      <hr className="border-white my-6" />
 
      {/* Footer Policies */}
      <div className="text-sm text-center">
        <p className={`leading-loose transition-all duration-1000 ease-out transform delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <Link href="/aboutus/csr" passHref className="hover:underline">CSR</Link> /
          <Link href="/aboutus/legal" passHref className="hover:underline"> Legal</Link> /
          <Link href="/aboutus/privacy-policy" passHref className="hover:underline"> Privacy Policy</Link> /
          <Link href="/aboutus/payment-policy" passHref className="hover:underline"> Payment Policy</Link> /
          <Link href="/aboutus/modern-slavery-act" passHref className="hover:underline"> Modern Slavery Act Policy</Link>
        </p>
 
        <p className="text-gray-400">© {new Date().getFullYear()} KALVEN Software Solutions. All rights reserved.</p>
 
        {/* Social Media Section */}
        <div className="mt-6">
          <h1 className="text-yellow-400 text-lg mb-4">Follow Us:</h1>
          <div className="flex justify-center gap-6 text-2xl">
            {socialLinks.map(({ icon: Icon, url, label }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`hover:text-yellow-400 transition-transform duration-1000 ease-out transform delay-${index * 100} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
 
// Section Component
const Section = ({ title, children, isVisible }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row lg:items-start lg:gap-7 transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
 