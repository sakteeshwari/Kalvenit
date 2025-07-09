"use client"
import React from 'react'

import Aboutuspageimg from "../components/Aboutuspageimg/Aboutuspageimg.jsx"
import Aboutuspagecontent from "../components/Aboutuspagecontent/Aboutuspagecontent.jsx"
import Aboutuspagecmmi from "../components/Aboutuspagecmmi/Aboutuspagecmmi.jsx"
import Aboutuspageawards from "../components/Aboutuspageawards/Aboutuspageawards.jsx"
import Aboutuspagedeli from "../components/Aboutuspagedeli/Aboutuspagedeli.jsx"
import Aboutuspagestory from "../components/Aboutuspagestory/Aboutuspagestory.jsx"
import Aboutuspagemission from "../components/Aboutuspagemission/Aboutuspagemission.jsx"

const page = () => {
  return (
    <div>
     
      <Aboutuspageimg></Aboutuspageimg>
      <Aboutuspagecontent></Aboutuspagecontent>
      <Aboutuspagecmmi></Aboutuspagecmmi>
      <Aboutuspageawards></Aboutuspageawards>
      <Aboutuspagedeli></Aboutuspagedeli>
      <Aboutuspagestory></Aboutuspagestory>
      <Aboutuspagemission></Aboutuspagemission>
     
    </div>
  )
}

export default page
