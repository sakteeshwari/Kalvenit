// pages/page.tsx
import React from 'react';
import Navbar from "./components/Navbar/Navbar.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Homepage from "./pages/index.js"
// import Servicepage from "./pages/services.js"
// import Link from 'next/link';
// import { useRouter } from 'next/navigation'


const Page = () => {
  // const router = useRouter()
  return (
    <div>
      {/* Content of your page */}
      <Navbar></Navbar>
      <Homepage></Homepage>
      <Footer></Footer>
    </div>
  );
};

export default Page;
