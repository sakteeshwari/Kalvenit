// pages/page.tsx
import React from 'react';

import Imgcontent from "./components/imagecontent/Imgcontent";
import Video from "./components/video/Video";
import Partner from "./components/Partner/Partner";
import Services from "./components/Servicescomp/Servicescomp";
import CoEs from "./components/Coescomp/Coescomp";
import Solutions from "./components/Solutionscomp/Solutionscomp";
import Befuture from "./components/Befuture/Befuture";
import Careers from "./components/Careers/Careers";
import Address from "./components/Address/Address";



// import Servicepage from "./pages/services.js"
// import Link from 'next/link';
// import { useRouter } from 'next/navigation'


const Page = () => {
  // const router = useRouter()
  return (
    <div>
      {/* Content of your page */}
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

export default Page;
