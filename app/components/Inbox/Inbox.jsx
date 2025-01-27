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
                <h1 className='text-white'>Stay connected to get the best of YASH Technologies in your inbox</h1>
                <div className=" py-3 text-lg slide-up">
                    <button className="flex items-center space-x-2 mt-3  font-medium">
                        <div className="flex justify-center items-center w-8 h-8 border border-yellow-400  rounded-full hover:border ">
                            <ArrowRight className="text-yellow-400 w-4 h-4" />
                        </div>
                        <span className='text-yellow-400'>Know more</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Inbox
