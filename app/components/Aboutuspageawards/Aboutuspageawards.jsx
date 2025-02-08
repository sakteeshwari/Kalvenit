"use client"
import React from 'react'

const awards = [
  {
    text: "Multiple recognitions as a leading partner across services, solutions, industries, and geographies from leading Industry analysts like Gartner, ISG, Everest Group, Nelson Hall, Zinnov, Forrester, amongst others",
    image: "/assets/aboutusaward1.png",
    imageWidth: "w-20"
  },
  {
    text: "Great Place To Work (9x in a row – 2015 – 2023)",
    
    image: "/assets/aboutusaward3.png",
    imageWidth: "w-28"
  },
  {
    text: "Aon Hewitt Top 25 employers in 2018",
    image: "/assets/aboutusaward2.png",
    imageWidth: "w-28"
  }
];

const Aboutuspageawards = () => {
  return (
    <div className='py-10 bg-slate-950 text-white'>
      <h1 className='text-3xl text-center m-2 lg:m-4 flex-1 lg:text-5xl lg:leading-relaxed'>
        Awards and Recognitions <span className='text-red-500 font-semibold'>.</span>
      </h1>
      
      <div className='flex flex-col   lg:flex-row gap-7 mt-10 m-2 text-lg leading-loose tracking-wide'>
        {awards.map((award, index) => (
          <div key={index} className='border-2  hover:shadow-2xl border-purple-700 rounded-lg flex-1 p-5'>
            <p className='h-40'>{award.text}</p>
            {award.subText && <p>{award.subText}</p>}
            <img src={award.image} className={`${award.imageWidth} float-right`} alt="Award" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Aboutuspageawards
