"use client";
import React from "react";
import Microsoftlayout from "../../../components/LayoutSubpages/Microsoftlayout/Microsoftlayout";

const CloudPage = () => {
    return (
        <Microsoftlayout imgSrc="/assets/micro.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
            <p className="tracking-wide leading-loose">KALVEN helps enterprises achieve these objectives by leveraging Microsoft’s highly versatile programming models, frameworks, and API sets. We help you create highly customized and result-oriented functional solutions on Microsoft .NET Framework, C#, and SQL Server. We leverage industry best practices and our outstanding capabilities to cover the entire application lifecycle, including Development, Maintenance, Modernization, and Optimization. </p>
                <img src="/assets/microsoft3.png" className="mt-6  rounded" alt="" />
            </div>
        </Microsoftlayout>
    );
};

export default CloudPage;
