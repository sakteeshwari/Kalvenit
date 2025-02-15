"use client";
import React from "react";
import Microsoftlayout from "../../../components/LayoutSubpages/Microsoftlayout/Microsoftlayout";

const CloudPage = () => {
    return (
        <Microsoftlayout imgSrc="/assets/micro.png">
            <div className="m-4 bg-white text-black lg:flex justify-between items-center mt-10 lg:px-32 lg:gap-32 lg:text-xl">
            <p className="tracking-wide leading-loose">KALVEN is a trusted Microsoft Gold Partner, who can help effectively leverage the transformative power of Microsoft technologies for a holistic data-driven evolution. Not only can we enable you to crunch, slice, and dice your data in the way that benefits you most, but we also help you manage it, secure it, and govern it with a comprehensive view of your enterprise. Leveraging Microsoft’s AI & Machine Learning platform, Azure-based Big Data technologies, and the SQL server-based Advanced Analytics platform, our deep domain expertise allows us to build tailored solutions encompassing AI and Automation, Deep Learning, Machine Learning, Digital Reality, Data Visualization, and more. </p>
                <img src="/assets/microsoft3.png" className="mt-6  rounded" alt="" />
            </div>
        </Microsoftlayout>
    );
};

export default CloudPage;
