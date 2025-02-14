"use client";
import React from "react";
import Awslayout from "../../../components/LayoutSubpages/Awslayout/Awslayout";

const CloudPage = () => {
    return (
        <Awslayout imgSrc="/assets/sapimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
           <div>
           <p className="tracking-wide leading-loose">In the fiercely competitive landscape of modern business, nurturing a solid customer relationship reigns supreme. Today’s customers crave personalized, meaningful interactions that demonstrate a deep understanding of their preferences and desires.</p>  
             <p className="tracking-wide leading-loose">Introducing the Digital Customer Experience Competency (DCX), explicitly designed for businesses that provide end-to-end solutions for the digital customer journey. This competency encompasses various aspects, such as dynamic content management, targeted marketing automation, secure commerce solutions, advanced data analytics, and customer retention strategies. With this competency, businesses can deliver exceptional customer experiences that foster engagement, ensure frictionless transactions, and enable informed decision-making.</p>
           </div>
                <img src="/assets/saplogin.png" className="mt-6 w-96 rounded" alt="" />
            </div>
        </Awslayout>
    );
};

export default CloudPage;
