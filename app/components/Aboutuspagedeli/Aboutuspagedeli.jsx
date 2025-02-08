"use client"
import React from 'react'

const Aboutuspagedeli = () => {
    return (
        <div className='p-1 py-10 bg-purple-700 text-white'>
            <h1 className='text-3xl  text-center leading-relaxed font-semibold lg:font-normal  m-2 lg:m-4 flex-1 lg:text-6xl lg:leading-normal'>
                Delivering value & innovation to our customers globally<span className='text-red-500 font-semibold'>.</span>
            </h1>
            <div className=' mt-10 mx-5 lg:mx-32 m-5  flex justify-between items-center flex-wrap gap-10'>
            <div>
                <h2 className="text-5xl font-bold text-center lg:text-6xl">+10</h2>
                <p className=" mt-2 lg:text-xl">AMERICAS Delivery Centers</p>
            </div>
            <div>
                <h2 className="text-5xl font-bold text-center lg:text-6xl">+10</h2>
                <p className=" mt-2 lg:text-xl">EMEA Delivery Centers</p>
            </div>
            <div>
                <h2 className="text-5xl text-center font-bold lg:text-6xl">+15</h2>
                <p className=" mt-2 lg:text-xl">APAC Delivery Centers</p>
            </div>
            </div>
        </div>
    )
}

export default Aboutuspagedeli
