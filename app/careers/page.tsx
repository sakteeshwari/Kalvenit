"use client"
import React from 'react'
import Navbar from "../components/Navbar/Navbar.jsx"
import Footer from "../components/Footer/Footer.jsx"
import Inbox from "../components/Inbox/Inbox.jsx"
import Contactus from "../components/Contactus/Contactus.jsx";
import Careerspageimg from "../components/Careerspageimg/Careerspageimg.jsx"
import Careerspagesearch from "../components/Careerspagesearch/Careerspagesearch.jsx"
import Careerspagecontent from "../components/Careerspagecontent/Careerspagecontent.jsx"
import Careerspageplus from "../components/Careerspageplus/Careerspageplus.jsx"
import Careerspagefamily from "../components/Careerspagefamily/Careerspagefamily.jsx"
import Careerspagehyper from "../components/Careerspagehyper/Careerspagehyper.jsx"
import Careerspagecome from "../components/Careerspagecome/Careerspagecome.jsx";
import Careerspagecommunity from "../components/Careerspagecommunity/Careerspagecommunity.jsx"
import Careerspagepartner from "../components/Careerspagepartner/Careerspagepartner.jsx"

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Careerspageimg></Careerspageimg>
      <Careerspagesearch></Careerspagesearch>
      <Careerspagecontent></Careerspagecontent>
      <Careerspageplus></Careerspageplus>
      <Careerspagefamily></Careerspagefamily>
      <Careerspagehyper></Careerspagehyper>
      <Careerspagecome></Careerspagecome>
      <Careerspagecommunity></Careerspagecommunity>
      <Careerspagepartner></Careerspagepartner>

      <Contactus></Contactus>
      <Inbox></Inbox>
      <Footer></Footer>

    </div>
  )
}

export default page
