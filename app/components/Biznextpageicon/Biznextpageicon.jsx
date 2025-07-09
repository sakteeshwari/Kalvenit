import React from 'react'
import "./Biznextpageicon.css"

const Biznextpageicon = () => {
  return (
    <div className='m-4 flex flex-col lg:px-32 text-black bg-white lg:gap-20 lg:flex-row justify-center items-center gap-5'>
      
      <img src="/assets/biznexticonkalven.png" className='w-48' alt="" />
      <h2 className='lg:hidden text-emerald-600'>BizNeXt Beyond Digital by KALVEN</h2>
      
      <video
          width=""  
          muted
          autoPlay
          loop
          playsInline
          className="lg:w-2/5 lg:rounded-lg"
        >
          <source src="/assets/Kalvenit.mp4" type="video/mp4" />
          Your browser does not support the video tag.
          </video>
         <p className='leading-loose tracking-wide'><b>BizNeXT… Beyond Digital by KALVEN</b> helps business leaders develop the right strategy, decide right product and solution and also improve the existing business processes through internal and external benchmarking. Being a technology agnostic framework, we advise business leaders the right solution fit for solving their issues</p> 
    </div>
  )
}

export default Biznextpageicon
