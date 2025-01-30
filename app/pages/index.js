// pages/index.js
"use client"
import Imgcontent from "../components/imagecontent/Imgcontent";
import Video from "../components/video/Video";
import Partner from "../components/Partner/Partner";
import Services from "../components/Services/Services";
import CoEs from "../components/CoEs/CoEs";
import Solutions from "../components/Solutions/Solutions";
import Befuture from "../components/Befuture/Befuture";
import Careers from "../components/Careers/Careers";
import Address from "../components/Address/Address";
import Inbox from "../components/Inbox/Inbox";


const Homepage = () => {
  return (
    <div>
      
      <Imgcontent />
      <Video />
      <Partner />
      <Services />
      <CoEs />
      <Solutions />
      <Befuture />
      <Careers />
      <Address />
      <Inbox />
      
    </div>
  );
};

export default Homepage;
