"use client";
import { ArrowRight } from "lucide-react"; // Using lucide-react for the arrow icon
import Link from "next/link"; // Import Link from Next.js

export default function ServiceOfferings() {
    const services = [
      {
        title: "AI - Driven SOC",
        description:
          "KALVEN offers comprehensive AI-Driven Security Operation Center (SOC) services designed to safeguard your digital assets. Our services encompass a wide range of capabilities, including 24/7, 16/7, and 8/5 L1 and L2 security monitoring.",
        link: "/services/cyber-security/nexgen-soc"
      },
      {
        title: "Managed Detection and Response (MDR)",
        description:
          "KALVEN Managed Detection and Response (MDR) Services provide 24×7 security monitoring, threat intelligence, threat hunting, User and entity behaviour analysis, incident validations, incident response, and Log Management. We help your organization discover hard-to-find threats, disrupt complex and sophisticated cyber-attacks, and improve cyber resilience.",
        link: "/services/cyber-security/mdr"
      },
      {
        title: "Vulnerability Mgmt Services (VMS)",
        description:
          "Worried of high-count vulnerabilities in the system environment? Our adaptive framework can help you to reduce vulnerabilities across the enterprise. prevent breach, maximize your team’s productivity, and reduce cost.",
        link: "/services/cyber-security/vms"
      },
      {
        title: "Penetration Testing",
        description:
          "Simulate real-world attacks and maximize the returns on your security spending with holistic Penetration Testing Services.",
        link: "/services/cyber-security/penetration-testing"
      },
      {
        title: "360° Cyber Posture Management",
        description:
          "Did you ever get a visibility on the changes impacting business in the security solutions. Does your audit schedule cover changes happening on real-time basis. You can get full visibility to risks and make informed decisions.",
        link: "/services/cyber-security/cyber-posture"
      },
      {
        title: "Breach & Attack Simulation (BAS) Service",
        description:
          "We are at your side. We understand the world of bad actors causing business loss. We help you to uncover the unapproved access path which attacker might use to enter into your environment. Discover the attack path using our simulation framework improve your prevention strategies.",
        link: "/services/cyber-security/breach-simulation"
      },
      {
        title: "Third Party Risk Management",
        description:
          "We recognize that each phase of a 3rd party relationship involves potential risks, and our goal is to assist you in navigating these obstacles with ease.",
        link: "/services/cyber-security/third-partyrisk"
      },
      {
        title: "Ondemand vCISO Services",
        description:
          "Board members expect to know on what cyber risks are going to disrupt their cash flow. We have Cyber security specialists who understands identify and narrate the cyber risks towards the business.",
        link: "/services/cyber-security/vciso"
      }
    ];
  
    return (
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
                className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              >
                {/* Title */}
                <h3 className="text-xl font-bold text-purple-700 mb-4">{service.title}</h3>
  
                {/* Description and Button Container */}
                <div className="flex flex-col flex-grow justify-between">
                  {/* Description */}
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>

                  {/* Know More button with link */}
                  <div className="mt-auto">
                    <Link href={service.link}>
                      <button className="relative flex items-center space-x-2 text-red-500 font-medium group hover:rounded-3xl hover:px-3 hover:py-1 transition-all duration-300 overflow-hidden">
                        {/* Border animation */}
                        <div className="absolute inset-0 w-0 overflow-hidden group-hover:w-full h-full bg-transparent border border-red-500 rounded-3xl transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>

                        {/* Content */}
                        <div className="flex justify-center items-center w-8 h-8 border border-red-500 rounded-full group-hover:hidden z-10">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        <div className="hidden group-hover:block z-10">
                          <span>&rarr;</span>
                        </div>
                        <span className="z-10">Know More</span>
                      </button>
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
