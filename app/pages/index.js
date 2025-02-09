// pages/index.js
"use client"
import Imgcontent from "../components/imagecontent/Imgcontent";
import Video from "../components/video/Video";
import Partner from "../components/Partner/Partner";
import Services from "../components/Servicescomp/Servicescomp";
import CoEs from "../components/Coescomp/Coescomp";
import Solutions from "../components/Solutionscomp/Solutionscomp";
import Befuture from "../components/Befuture/Befuture";
import Careers from "../components/Careers/Careers";
import Address from "../components/Address/Address";




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
      
      
    </div>
  );
};

export default Homepage;
