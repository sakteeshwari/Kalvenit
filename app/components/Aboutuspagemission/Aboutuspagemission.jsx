"use client"
import React from 'react'

const Aboutuspagemission = () => {
    return (
        <div>
            <div className='lg:flex justify-between items-center gap-10  py-10 lg:px-32'>
                <div className='flex justify-center'>
                    <img src="/assets/aboutusmission.png" className='w-72 lg:w-[800px]' alt="" />
                </div>
                <div className='m-4 mt-10'>
                    <h1 className='text-3xl lg:text-5xl'>Our Mission, Vision & Core Values.</h1>
                    <p className='mt-5 leading-loose tracking-wide'>KALVEN Software Solutions is focused on building long term relationship and working with clients as an extended team. Our customer-centricity and value system has helped us gain trust of our clients globally</p>
                    <button className=' mt-6 border bg-purple-700 text-white p-[8px] px-6 rounded-full hover:ring-2  hover:ring-purple-500'>READ MORE</button>
                </div>

            </div>
            <div className='flex justify-center'>
                <img src="/assets/aboutpagegreat.png" className='w-96 md:w-full md:px-32 p-2' alt="" />
            </div>
        </div>
    )
}

export default Aboutuspagemission
