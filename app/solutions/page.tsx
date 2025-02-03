"use client"
import React from 'react'
import Solutionspageimg from "../components/Solutionspageimg/Solutionspageimg.jsx"
import Solutionspagecontent from "../components/Solutionspagecontent/Solutionspagecontent.jsx"
import Solutionstrending from "../components/Solutionstrending/Solutionstrending.jsx"
import Solutionsperspectives from "../components/Solutionsperspectives/Solutionsperspectives.jsx"
import Navbar from "../components/Navbar/Navbar.jsx"
import Footer from "../components/Footer/Footer.jsx"
import Inbox from "../components/Inbox/Inbox.jsx"
import Contactus from "../components/Contactus/Contactus.jsx";

const solutions = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Solutionspageimg></Solutionspageimg>
      <Solutionspagecontent></Solutionspagecontent>
      <Solutionstrending></Solutionstrending>
      <Solutionsperspectives></Solutionsperspectives>
      <Contactus></Contactus>
      <Inbox></Inbox>
      <Footer></Footer>

    </div>
  )
}

export default solutions
