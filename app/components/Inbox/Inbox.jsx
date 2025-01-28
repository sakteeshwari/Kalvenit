import React from 'react'
import "./Inbox.css"
import { ArrowLeft, ArrowRight } from "lucide-react";

const Inbox = () => {
    return (
        <div className='bg-gray-500 p-5 py-5 flex items-center justify-center gap-14 lg:flex lg:justify-evenly'>
            <div>
                <img src="/assets/inbox.png" className=' w-24' alt="" />
            </div>
            <div className='flex flex-col'>
                <h1 className='text-white'>Stay connected to get the best of Kalven Software Solutions in your inbox</h1>
                <div className=" py-3 text-lg slide-up">
                    <button className="relative flex items-center space-x-2 text-yellow-300 font-medium group hover:rounded-3xl hover:px-3 hover:py-1 transition-all duration-300 overflow-hidden">
                        {/* Border animation */}
                        <div className="absolute inset-0 w-0 overflow-hidden group-hover:w-full h-full bg-transparent border border-yellow-300 rounded-3xl transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>


                        {/* Content */}
                        <div className="flex justify-center items-center w-8 h-8 border border-yellow-300 rounded-full group-hover:hidden z-10">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                        <div className="hidden group-hover:block z-10">
                            <span>&rarr;</span>
                        </div>
                        <span className="z-10">Know more</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Inbox
