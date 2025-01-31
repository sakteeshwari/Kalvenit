""
import "../styles/globals.css";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar /> {/* Navbar shown on every page */}
      <Component {...pageProps} /> {/* Current Page */}
      <Footer /> {/* Footer shown on every page */}
    </>
  );
}
