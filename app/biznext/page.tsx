"use client"
import React from 'react'

import Biznextpageimg from "../components/Biznextpageimg/Biznextpageimg.jsx"
import Biznextpageicon from "../components/Biznextpageicon/Biznextpageicon.jsx"
import Biznextpageachieve from "../components/Biznextpageachieve/Biznextpageachieve.jsx"
import Biznextpageoffering from "../components/Biznextpageoffering/Biznextpageoffering.jsx"
import Biznextpagespotlight from "../components/Biznextpagespotlight/Biznextpagespotlight.jsx"

const page = () => {
    return (
        <div>
         
            <Biznextpageimg></Biznextpageimg>
            <Biznextpageicon></Biznextpageicon>
            <Biznextpageachieve></Biznextpageachieve>
            <Biznextpageoffering></Biznextpageoffering>
            <Biznextpagespotlight></Biznextpagespotlight>
            
        </div>
    )
}

export default page
