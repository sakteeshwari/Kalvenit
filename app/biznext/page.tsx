"use client"
import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import Footer from "../components/Footer/Footer.jsx"
import Inbox from "../components/Inbox/Inbox.jsx"
import Contactus from "../components/Contactus/Contactus.jsx";
import Biznextpageimg from "../components/Biznextpageimg/Biznextpageimg.jsx"
import Biznextpageicon from "../components/Biznextpageicon/Biznextpageicon.jsx"
import Biznextpageachieve from "../components/Biznextpageachieve/Biznextpageachieve.jsx"
import Biznextpageoffering from "../components/Biznextpageoffering/Biznextpageoffering.jsx"
import Biznextpagespotlight from "../components/Biznextpagespotlight/Biznextpagespotlight.jsx"

const page = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Biznextpageimg></Biznextpageimg>
            <Biznextpageicon></Biznextpageicon>
            <Biznextpageachieve></Biznextpageachieve>
            <Biznextpageoffering></Biznextpageoffering>
            <Biznextpagespotlight></Biznextpagespotlight>
            <Contactus></Contactus>
            <Inbox></Inbox>
            <Footer></Footer>
        </div>
    )
}

export default page
