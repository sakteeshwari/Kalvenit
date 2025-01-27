
"use client"
import React from 'react'
import "./Careers.css"
import { ArrowLeft, ArrowRight } from "lucide-react";

const Careers = () => {
    return (
        <div>
            {/* <!--Image Section--> */}
            <div className="img_sale">
                <img src="/assets/happy.png" alt="section_image" />
                <div  className="imgsale_box  text-white border-4 hover:shadow-[0px_10px_30px_rgba(0,0,0,0.5)] hover:border-yellow-500 hover:shadow-yellow-600 border-yellow-400 shadow-lg rounded-lg  transition-all duration-500">
                   <div className='py-6 px-4'>
                   <h2 className='slide-up lg:text-2xl'>CAREERS</h2>
                   <p className='slide-up mt-6 text-4xl lg:text-7xl lg:leading-relaxed'>Shape Your Future Join YASH Today!</p>
                   </div>
                    <div className="px-4 py-3 text-lg slide-up">
                        <button className="flex items-center space-x-2   font-medium">
                            <div className="flex justify-center items-center w-8 h-8 border border-white  rounded-full hover:border ">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                            <span>Explore More</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Careers
