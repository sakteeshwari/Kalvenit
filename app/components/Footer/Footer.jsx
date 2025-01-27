import React from 'react';
import './Footer.css';
import { FaTwitter, FaLinkedin, FaYoutube, FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-black  text-white p-6 lg:p-32">
      {/* Quick Links Section */}
      <div className="flex flex-col  lg:flex-row lg:items-start lg:gap-7">
        <h1 className="text-yellow-400   lg:text-xl mb-4 lg:mb-0">Quick Links :</h1>
        <div className="grid grid-cols-1 text-sm sm:grid-cols-2 lg:flex lg:gap-10 gap-4">
          <p>SAP</p>
          <p>Digitalization</p>
          <p>Modernization</p>
          <p>Cloud & Infrastructure Management Services</p>
          <p>Cyber Security Services</p>
          <p>IoT</p>
        </div>
      </div>

      <hr style={{ borderColor: 'white' }} className="my-6" />

      {/* Subsidiaries Section */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-7">
        <h1 className="text-yellow-400 text-sm  lg:text-xl mb-4 lg:mb-0">Subsidiaries :</h1>
        <div className="grid grid-cols-1 text-sm sm:grid-cols-2 lg:flex lg:gap-10 gap-4">
          <p>Aaseya IT Services</p>
          <p>Codiant Technologies</p>
          <p>Intellents</p>
        </div>
      </div>

      <hr style={{ borderColor: 'white' }} className="my-6" />

    {/* footer logo */}
      <div className='lg:flex items-center gap-5'>
      <img src="/assets/kalven-logo.png" className='lg:w-60 w-52' alt="" />
      <img src="/assets/footerimg1.png" className='mt-2' alt="" />
      </div>

      <hr style={{ borderColor: 'white' }} className="my-6" />

      <div className='text-sm text-center '>
        <p className='leading-loose'>CSR/ Site Map/ Legal/ Privacy policy/ Payment policy/ Modern Slavery Act Policy</p>
        <p className='pt-3 text-gray-400'>Copyright &copy; 2024. YASH Technologies. All Rights Reserved.</p>
         {/* Social Media Section */}
      <div className="text-center mt-6">
        <h1 className="text-yellow-400 text-lg mb-4">Follow Us:</h1>
        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="hover:text-yellow-400 transition-colors" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="hover:text-yellow-400 transition-colors" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="hover:text-yellow-400 transition-colors" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="hover:text-yellow-400 transition-colors" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="hover:text-yellow-400 transition-colors" />
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
            <FaPinterest className="hover:text-yellow-400 transition-colors" />
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
