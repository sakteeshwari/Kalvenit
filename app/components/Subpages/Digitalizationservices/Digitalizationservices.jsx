export default function ServiceOfferings() {
    const services = [
      {
        title: "Cloud",
        description:
          "KALVEN gets involved in designing and re-engineering cloud architectures powered by digital accelerators and strategic frameworks to navigate the customers through their digital journey.",
        link:"/services/digitalization/cloud"
      },
      {
        title: "Mobility",
        description:
          "Our integrated suite of offerings enables customers to differentiate, engineer, implement, and sustain on-the-go mobility solutions to make a seamless transition of your autonomous mobile journey.",
        
      },
      {
        title: "Data Analytics",
        description:
          "Data Analytics services from KALVEN help categorize, contextualize, scope, and derive data insights, and add value with machine learning paradigms.",
        
      },
      {
        title: "Blockchain",
        description:
          "Blockchain services include comprehensive blockchain solutions for innovation, prototyping, re-engineering processes, and addressing issues in real-time.",
        
      },
      {
        title: "Social Media Marketing",
        description:
          "KALVEN offers social media marketing services by managing web presence on global websites and various social media platforms like Facebook, LinkedIn, Twitter, Instagram, YouTube, and a lot more.",
        
      },
      {
        title: "AR/ VR/ MR",
        description:
          "AR/VR/MR capabilities at KALVEN includes experimental designing to visualizing complex industrial projects and theoretical modeling.",  
      },
      {
        title: "AI & Automation",
        description:
          "KALVEN conducts automation need assessments, provides advisory on framing strategies, and facilitating change management using cognitive solutions from Automation Anywhere, UiPath, Pega, and more.",
        
      },
      {
        title: "IoT and Embedded Systems",
        description:
          "KALVEN offers a full range of IoT and embedded systems services and help organizations in end-to-end Development, supplementing it with power-packed Analytics and Application Development and management.",
        
      },
      {
        title: "Manufacturing Operations Management",
        description:
          "We offer a unique Manufacturing Operations Management (MOM) services portfolio and customized strategies to blend advanced manufacturing concepts with real-time visibility and intelligent industrial Automation.",
        
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
  
              
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  