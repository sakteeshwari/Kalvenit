"use client"
import { ArrowRight } from "lucide-react"; // Using lucide-react for the arrow icon
export default function ServiceOfferings() {
    const services = [
      {
        title: "Test Management",
        description:
          "Centralize testing workflows using advanced test management solutions that support test planning, execution, defect tracking, and reporting. KALVEN utilizes robust test management tools to ensure the entire testing lifecycle is streamlined and aligns with business objectives.",
        
      },
      {
        title: "Functional Testing",
        description:
          "Verify functional integrity across SAP landscapes with detailed end-to-end testing for SAP modules and their integration with non-SAP modules. This includes Functional, System, and System Integration testing, regression testing for mission-critical functions, and ensuring alignment with evolving business requirements.",
        
      },
      {
        title: "Test Automation",
        description:
          "Using Tricentis Tosca, KALVEN enables scriptless, model-based test automation. Automate even the most complex SAP test cases to increase accuracy and reduce manual testing effort. Tosca’s AI-powered automation capabilities allow for intelligent test case creation, minimizing test maintenance.",
        
      },
      {
        title: "Performance and Volume Testing",
        description:
          "With Tricentis NeoLoad, peak loads are simulated, and system performance is assessed under high-traffic conditions. This ensures SAP systems can handle large user volumes while optimizing performance efficiency and resource consumption.",
        
      },
      {
        title: "Test Optimization",
        description:
          "Utilize KALVEN’s expertise in test optimization to break down silos and streamline workflows, achieving consistent, high-quality outcomes. KALVEN’s frameworks reduce the total testing effort by up to 54% and enhance overall productivity.",
        
      },
      {
        title: "Continuous Testing",
        description:
          "Integrate automated testing directly into your CI/CD pipelines using Tricentis qTest or TOSCA capabilities. This approach ensures continuous validation at each development stage, providing real-time insights, enhanced collaboration, and quicker release cycles.",
        
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
  