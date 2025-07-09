"use client";
import React from "react";
import Saplayout from "../../../components/LayoutSubpages/Saplayout/Saplayout";

const CloudPage = () => {
    return (
        <Saplayout imgSrc="/assets/sapimg.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
           <div>
           <p className="tracking-wide leading-loose">KALVEN as Your Manufacturing Transformation Partner for Industry 4.0 Excellence.</p>
           <p className="tracking-wide leading-loose">Our “Connected Factory Solution” leveraging SAP Digital Manufacturing Suite would help the global manufacturing organizations to address the dual mandate of continuous transformation of Manufacturing operations, while providing sustainable solutions to address the challenges. In a nut-shell, our Connected Factory Solution with ‘Digital Manufacturing’ theme, would play a key role in accelerating the Industry 4.0 journey and driving Operational, Tactical and Strategic excellence. Business transformation aims at transitioning from a reactive to a pro-active agile organization, with real time visibility to information and value generating opportunities across the manufacturing life cycle.</p>
           </div>
                <img src="/assets/saplogin.png" className="mt-6 w-96 rounded" alt="" />
            </div>
        </Saplayout>
    );
};

export default CloudPage;
