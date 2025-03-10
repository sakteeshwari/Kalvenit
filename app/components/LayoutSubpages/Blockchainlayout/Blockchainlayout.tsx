
import React from "react";
import Servicespageimg from "../../Servicespageimg/Servicespageimg";

import Servicesperspective from "../../Servicesperspective/Servicesperspective";
import Biznextpagespotlight from "../../Biznextpagespotlight/Biznextpagespotlight";
import Kalvendifferent from "../../Kalvendifferent/Kalvendifferent";
import { ArrowRight } from "lucide-react"; // Using lucide-react for the arrow icon

const services = [
    {
        title: "Blockchain Advisory",
        description:
            "Our global advisory team works closely with clients to evaluate the applicability and achieve their goals concerning blockchain innovation and ideation. We enable clients to catalyze the transformation journey using case discovery, proof of concepts, prototyping, and thorough market analysis to help find the business value with a defined blockchain vision.",

    },
    {
        title: "Implementation and Support",
        description:
            "KALVEN provides complete implementation and support for blockchain technology enablement in your organizations. By creating the ledger framework, configuring software, and mapping the security components access certificates while handling third-party integrations and custom coding, KALVEN ensures complete front-end design and build to meet future demands.",

    },
    {
        title: "Alliances",
        description:
            "For enabling tailor-made value-driven Blockchain and crypto solutions, KALVEN works closely with a well-diversified partner ecosystem, including Hyperledger, the Enterprise Ethereum Alliance, as well as IBM, SAP, Microsoft, and Amazon Web Services. Through our expertise in working across a broad range of industries, consortia in the blockchain network, we have earned the leverage of the best frameworks and tools for developing niche blockchain applications.",

    },
];


const Mordernizationlayout = ({ children, imgSrc }: { children: React.ReactNode; imgSrc: string }) => {
    return (
        <div>
            <Servicespageimg imgSrc={imgSrc} text="Disrupting market dynamics with blockchain-powered networks" />
            {children}
            <section className="py-16 bg-gray-50 lg:px-20">
                <div className="container mx-auto px-6">
                    {/* Section Title */}
                    <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
                        Service Offerings<span className="text-red-500">.</span>
                    </h2>

                    {/* Cards Container */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                {/* Title */}
                                <h3 className="text-xl font-bold text-purple-700 mb-4">{service.title}</h3>

                                {/* Description */}
                                <p className="text-gray-600 mb-6">{service.description}</p>

                              
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Biznextpagespotlight />
            <Kalvendifferent />
            <Servicesperspective />


        </div>
    );
};

export default Mordernizationlayout;
