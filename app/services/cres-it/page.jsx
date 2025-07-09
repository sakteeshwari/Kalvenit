"use client";
import React from "react";
import Cresitlayout from "../../components/LayoutSubpages/Cresitlayout/Cresitlayout"

const services = [
    "Conceptual designs",
    "Project and program management, including cost management",
    "Procurement management, including the entire RFP lifecycle",
    "Testing and commissioning",
    "Development of standard operating procedures",
    "User handover and training",
];

const DigitalizationPage = () => {

    return (
        <Cresitlayout imgSrc="/assets/corporate.png">
            <div className="bg-gray-200 p-4 leading-relaxed tracking-wider">
                <div>
                    <h1 className="mt-6 font-bold"> Leverage KALVEN’s unrivaled competency in CRES-IT to focus more on core objectives</h1>
                    <p className="mt-6">KALVEN’s Global Corporate Real Estate IT (CRES) practice provides consultancy and project management services to our clients in office design, fit-out, and migration. Our team of experts has completed over 3,500,000 sq ft of fit-outs and helped our clients migrate 100,000 users. We are well-known for our ability to adhere to exact specifications while ensuring quick delivery turnaround. We can execute large and small projects to specifications and demanding timescales.</p>
                    <p className="mt-6">As a consulting partner, our CRES IT team is adept at drawing together all IT and Facilities Management streams to ensure seamless deliverables to the client. We bring clear objectivity that is critical to the success of the project. Our capabilities include:</p>
                    <div className="max-w-3xl mx-auto mt-10">
                        <ul className="border border-gray-300 divide-y divide-gray-300 rounded-lg">
                            {services.map((service, index) => (
                                <li key={index} className="p-4 text-gray-700">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="mt-6">
                        We have also developed several proven tools and processes, ensuring guaranteed deliverables. These processes are available for use with any client assignment, regardless of size or location.
                    </p>

                </div>


            </div>
        </Cresitlayout>
    );
};

export default DigitalizationPage;
