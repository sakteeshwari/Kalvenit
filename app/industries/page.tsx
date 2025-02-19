"use client"
import React from 'react'

import Industriespageimg from "../components/Industriespageimg/Industriespageimg"
import Industriespagecontent from "../components/Industriespagecontent/Industriespagecontent.jsx"
import Industriestrending from "../components/Industriestrending/Industriestrending.jsx"
import Industriesperspectives from "../components/Industriesperspectives/Industriesperspectives.jsx"

const page = () => {
  return (
    <div>
      
      <Industriespageimg imgSrc="/assets/industriespageimg.png"></Industriespageimg>
      <Industriespagecontent></Industriespagecontent>
      <Industriestrending></Industriestrending>
      <Industriesperspectives></Industriesperspectives>
     
    </div>
  )
}

export default page
