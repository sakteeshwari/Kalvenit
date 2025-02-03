"use client"
import Navbar from "../components/Navbar/Navbar.jsx"
import Footer from "../components/Footer/Footer.jsx"
import Inbox from "../components/Inbox/Inbox.jsx"
import Contactus from "../components/Contactus/Contactus.jsx";
import Coespageimg from "../components/Coespageimg/Coespageimg.jsx"
import Coespagecontent from "../components/Coespagecontent/Coespagecontent.jsx"
import Coespageperspectives from "../components/Coespageperspectives/Coespageperspectives.jsx"
import Coespagetrending from "../components/Coespagetrending/Coespagetrending.jsx"

 const services = () => {
 return(
  <>
  <Navbar></Navbar> 
  <Coespageimg></Coespageimg>
  <Coespagecontent></Coespagecontent>
  <Coespagetrending></Coespagetrending>
  <Coespageperspectives></Coespageperspectives>
  <Contactus></Contactus>
  <Inbox></Inbox>
  <Footer></Footer>
  </>
  );
};

export default services;
