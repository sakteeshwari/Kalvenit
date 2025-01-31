// pages/services.js
"use client"
import Servicespageimg from "../components/Servicespageimg/Servicespageimg";
import Servicespagecontent from "../components/Servicespagecontent/Servicespagecontent";
import Navbar from "../components/Navbar/Navbar.jsx"
import Footer from "../components/Footer/Footer.jsx"
import Inbox from "../components/Inbox/Inbox.jsx"
import Servicestrending from "../components/Servicestrending/Servicestrending.jsx";


 const services = () => {
 return(
  <>
  <Navbar></Navbar>
  <Servicespageimg></Servicespageimg>
  <Servicespagecontent></Servicespagecontent>
  <Servicestrending></Servicestrending>
  <Inbox></Inbox>
  <Footer></Footer>
  </>
  );
};

export default services;
