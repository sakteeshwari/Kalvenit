"use client"
import React from 'react'

import Careerspageimg from "../components/Careerspageimg/Careerspageimg.jsx"
import Careerspagesearch from "../components/Careerspagesearch/Careerspagesearch.jsx"
import Careerspagecontent from "../components/Careerspagecontent/Careerspagecontent.jsx"
import Careerspageplus from "../components/Careerspageplus/Careerspageplus.jsx"
import Careerspagefamily from "../components/Careerspagefamily/Careerspagefamily.jsx"
import Careerspagehyper from "../components/Careerspagehyper/Careerspagehyper.jsx"
import Careerspagecome from "../components/Careerspagecome/Careerspagecome.jsx";
import Careerspagecommunity from "../components/Careerspagecommunity/Careerspagecommunity.jsx"
import Careerspagepartner from "../components/Careerspagepartner/Careerspagepartner.jsx"
import Careerspagehover from "../components/Careerspagehover/Careerspagehover.jsx"

const page = () => {
  return (
    <div>
      
      <Careerspageimg></Careerspageimg>
      <Careerspagesearch></Careerspagesearch>
      <Careerspagecontent></Careerspagecontent>
      <Careerspageplus></Careerspageplus>
      <Careerspagefamily></Careerspagefamily>
      <Careerspagehyper></Careerspagehyper>
      <Careerspagecome></Careerspagecome>
      <Careerspagehover></Careerspagehover>
      <Careerspagecommunity></Careerspagecommunity>
      <Careerspagepartner></Careerspagepartner>

      

    </div>
  )
}

export default page
