import React from 'react'
import "./Biznextpageicon.css"

const Biznextpageicon = () => {
  return (
    <div className='bg-white xl:flex justify-center items-center flex flex-col xl:flex-row  text-center xl:text-left xl:mx-32 my-16  xl:gap-16'>
      
      <img src="/assets/biznexticonkalven.png" className=' w-32 xl:w-52  xl:mb-0 transition-transform duration-500 ease-in-out transform hover:scale-105 ' alt="" />
      <h2 className='xl:hidden font-semibold text-xl flex-grow'>BizNeXt Beyond Digital by KALVEN</h2>
      
      <video
          width="600"  
          muted
          autoPlay
          loop
          playsInline
          className="h-[] rounded-video mb-10 lg:mb-0 lg:w-80 xl:mb-0 xl:transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          <source src="/assets/Kalvenit.mp4" type="video/mp4" />
          Your browser does not support the video tag.
          </video>
         <p className='leading-relaxed text-lg mx-4 lg:text- '>BizNeXT… Beyond Digital by KALVEN helps business leaders develop the right strategy, decide right product and solution and also improve the existing business processes through internal and external benchmarking. Being a technology agnostic framework, we advise business leaders the right solution fit for solving their issues</p> 
    </div>
  )
}

export default Biznextpageicon
