import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Imgcontent from "./components/imagecontent/Imgcontent"
import Video from "./components/video/Video"
import Partner from "./components/Partner/Partner.jsx"
import Services from "./components/Services/Services"
import CoEs from "./components/CoEs/CoEs.jsx"
import Solutions from "./components/Solutions/Solutions.jsx"
import Befuture from "./components/Befuture/Befuture.jsx"
import Careers from "./components/Careers/Careers.jsx"
import Address from "./components/Address/Address.jsx"
import Inbox from "./components/Inbox/Inbox.jsx"
import Footer from "./components/Footer/Footer.jsx"

const Page = () => {
  return (
    <div>
     <Navbar></Navbar>
     <Imgcontent></Imgcontent>
     <Video></Video>
     <Partner></Partner>
     <Services></Services>
     <CoEs></CoEs>
     <Solutions></Solutions>
     <Befuture></Befuture>
     <Careers></Careers>
     <Address></Address>
     <Inbox></Inbox>
     <Footer></Footer>
    </div>
  )
}

export default Page
