"use client"
import React from 'react'
import Navbar from "../components/Navbar/Navbar.jsx"
import Footer from "../components/Footer/Footer.jsx"
import Inbox from "../components/Inbox/Inbox.jsx"
import Contactus from "../components/Contactus/Contactus.jsx";
import Industriespageimg from "../components/Industriespageimg/Industriespageimg.jsx"
import Industriespagecontent from "../components/Industriespagecontent/Industriespagecontent.jsx"
import Industriestrending from "../components/Industriestrending/Industriestrending.jsx"
import Industriesperspectives from "../components/Industriesperspectives/Industriesperspectives.jsx"

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Industriespageimg></Industriespageimg>
      <Industriespagecontent></Industriespagecontent>
      <Industriestrending></Industriestrending>
      <Industriesperspectives></Industriesperspectives>
      <Contactus></Contactus>
      <Inbox></Inbox>
      <Footer></Footer>
    </div>
  )
}

export default page
