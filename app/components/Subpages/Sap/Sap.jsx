"use client"
import { ArrowRight } from "lucide-react"; // Using lucide-react for the arrow icon
export default function ServiceOfferings() {
    const services = [
      {
        title: "S/4HANA",
        description:
          "Revamp Your ERP Strategy with SAP S/4HANA",
       
      },
      {
        title: "Rise With SAP",
        description:
          "Accelerate enterprise-wide digital transformation and transition to the Cloud",
        
      },
      {
        title: "Human Capital Management",
        description:
          "Achieve organizational growth with Human Capital Management.",
        
      },
      {
        title: "Supply Chain Excellence",
        description:
          "Deriving value through Supply Chain Excellence",
        
      },
      {
        title: "SAP Technologies",
        description:
          "Adapt and reinvent while developing new business models at speed.",
        
      },
      {
        title: "SAP Digital Platforms",
        description:
          "Agile SAP services empowering enterprises to realize business outcomes and value faster.",
        
      },
      {
        title: "Sustainability",
        description:
          "Create positive economic, social, and environmental impact.",
        
      },
      {
        title: "Finance Transformation",
        description:
          "Enable Business Transformation with Finance Transformation Services",
        
      },
      {
        title: "Customer Experience Management",
        description:
          "Create memorable customer journeys with Customer Experience Management",
        
      },
      {
        title: "SAP Business Technology Platform",
        description:
          "Reinforce transformation DNA into business operations with SAP BTP",
        
      },
      {
        title: "SAP Testing Services",
        description:
          "Driving Quality & Agility in SAP Testing",
        
      },

     
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
                className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Title */}
                <h3 className="text-xl font-bold text-purple-700 mb-4">{service.title}</h3>
  
                {/* Description */}
                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* know more button */}
                <div  className={`pt-7 text-lg `}>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  