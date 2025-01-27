import React from 'react'
import Serviceimg from "../Serviceimg/Serviceimg"

const Services = () => {
  return (
    <div className='bg-white p-4 mt-6 '>
      <h1 className='text-purple-800 text-2xl font-semibold mb-4 slide-up'>SERVICES</h1>
      <h1 className='text-black text-3xl slide-up'>Agility. Resilience. Growth</h1>
       {/* Image Scrolling Section */}
       <Serviceimg></Serviceimg>
    </div>
  )
}

export default Services
