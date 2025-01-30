// pages/_app.js
"use client"
import "../styles/globals.css";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function MyApp({ Homepage, pageProps }) {
  return (
    <>
      <Navbar /> {/* Common Navbar */}
      <Homepage {...pageProps} /> {/* Current page */}
      
      <Footer /> {/* Common Footer */}
    </>
  );
}
