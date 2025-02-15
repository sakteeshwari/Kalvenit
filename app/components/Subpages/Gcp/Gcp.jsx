export default function Services() {
    const services = [
      {
        title: "SAP on GCP",
        items: [
          "SAP S/4HANA implementation / Migration on GCP",
          "SAP workload migration on Any DB to GCP",
          "Suite on HANA migration",
          "Integration of GCP & On-premise Systems",
          "RISE with SAP",
          "Cloud assessment",
        ],
        learnMore: true,
      },
      {
        title: "Infrastructure Services",
        items: [
          "Cloud Console Mgmt.",
          "OS Management",
          "Web, Middleware & Database Management",
          "Security Management",
          "Network Management",
        ],
      },

      {
        title: "Modernization",
        items: [
          "Re Platform /ReHost/ReFactor",
          "Infrastructure Migration",
          "Database Migration",
          "Application Migration",
          "Containerisation & Micro services",
        ],
      },
      
      {
        title: "Data & Analytics on GCP",
        items: [
          "Data Integration and Warehousing",
          "Data Migration Services",
          "Big Data Capabilities",
          "Data Lake Setup",
          "Data Governance Framework",
          "Data Visualization & Real-Time Analytics",
          "Artificial Intelligence and Machine Learning",
        ],
      },
      {
        title: "DevOps on GCP",
        items: [
          "Focused consulting",
          "Continuous Integration & Continuous Delivery",
          "Monitoring, Logging, and Performance Management",
          "DataOps",
          "Infra Automation",
          "App Automation",
          "Security & Testing Automation",
        ],
      },
      {
        title: "IoT on GCP",
        items: [
          "IoT Advisory & Consulting",
          `"Sensor/Device to Cloud" End-to-End solutions`,
          "IoT Application Development and Management",
          "Product & System Engineering & IIoT/Industry 4.0",
          "Edge Gateway Development & IMS",
          "Data Analytics & Visualization Services",
          "IoT Managed Services",
        ],
      },
     
     
    
    ];
  
    return (
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-300 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <h2 className="text-xl font-bold text-blue-800 mb-4">{service.title}</h2>
              <ul className="list-disc pl-4 text-gray-700">
                {service.items.map((item, i) => (
                  <li key={i} className="mb-2">{item}</li>
                ))}
              </ul>
             
            </div>
          ))}
        </div>
      </div>
    );
  }
  