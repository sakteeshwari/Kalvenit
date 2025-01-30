// pages/page.tsx
import React from 'react';
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Homepage from "../pages/index.js"; // Ensure this is rendering correctly
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <Navbar />
      <Homepage /> {/* Renders homepage content */}
      
      {/* Link to the Service Page */}
      <Link href="/services">
        <a>Go to Services Page</a> {/* This is the link to the services page */}
      </Link>
      
      <Footer />
    </div>
  );
};

export default Page;
