"use client";

import { useState } from "react";
import Link from "next/link";
import "./Navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({}); // Track expanded menu items
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered item index
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleMenu = (index) => {
    setExpandedItems((prev) => {
      const newState = {};
      menuItems.forEach((_, idx) => {
        newState[idx] = idx === index ? !prev[idx] : false;
      });
      return newState;
    });
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setShowSubMenu(true); // Keep submenu visible
  };

  const handleMouseLeave = () => {
    setShowSubMenu(false);
    setHoveredIndex(null); // Reset hovered index
  };

  const toggleItem = (index) => {
    setHoveredIndex((prevIndex) => (prevIndex === index ? null : index));

    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the state of the specific item
    }));
  };

  const menuItems = [
    {
      href: "/", label: "Home",
      subItems: [
        { href: "/", label: "Home" },

      ],
    },
    {
      href: "/services",
      label: "Services",
      subItems: [ 
        { href: "/services/digitalization/digitalization", label: "Digitalization",  className: "font-bold text-black" },
            { href: "/services/digitalization/ai-automation", label: "AI & Automation"},
            { href: "/services/digitalization/ar-vr-mr", label: "AR/VR/MR" },
            { href: "/services/digitalization/blockchain", label: "Blockchain" },
            { href: "/services/digitalization/cloud", label: "Cloud" },
            { href: "/services/digitalization/data-analytics", label: "Data Analytics" },
            { href: "/services/digitalization/iot", label: "IoT" },
            { href: "/services/digitalization/mobility", label: "Mobility" },
            { href: "/services/digitalization/social-media-marketing", label: "Social Media Marketing" },
            { href: "/services/digitalization/embedded-factory-automation", label: "Embedded & Factory Automation" },
            { href: "/services/digitalization/modernization", label: "Modernization",className: "font-bold text-black"  },
            { href: "/services/digitalization/application-migration", label: "Application Migration and Modernization Services" },
            { href: "/services/digitalization/cloud-transformation", label: "Cloud Transformation Services" },
            { href: "/services/digitalization/enterprise-mobile-transformation", label: "Enterprise Mobile Transformation" },
            { href: "/services/digitalization/co-innovation-lab", label: "Co-Innovation Lab Services" ,className: "font-bold text-black" },
            { href: "/services/digitalization/consulting", label: "Consulting Services" },
            { href: "/services/digitalization/ideation", label: "Ideation Services" },
            { href: "/services/digitalization/implementation", label: "Implementation Services" },
            { href: "/services/digitalization/gccs", label: "Global Capability Centers (GCCs)" ,className: "font-bold text-black" },
            { href: "/services/digitalization/application-services", label: "Application Services",className: "font-bold text-black"  },
            { href: "/services/digitalization/application-management", label: "Application Management Services" },
            { href: "/services/digitalization/packaged-application", label: "Packaged Application Services" },
            { href: "/services/digitalization/nextgen-ams", label: "NextGen AMS",className: "font-bold text-black"  },
            { href: "/services/digitalization/shared-ams", label: "Shared AMS for MSMEs",className: "font-bold text-black"  },
            { href: "/services/digitalization/cloud-infrastructure", label: "Cloud & Infrastructure Management Services",className: "font-bold text-black"  },
            { href: "/services/digitalization/cloud-infrastructure-services", label: "Cloud Infrastructure Services" },
            { href: "/services/digitalization/core-infrastructure", label: "Core Infrastructure Support Services" },
            { href: "/services/digitalization/devxops", label: "DevXOps" },
            { href: "/services/digitalization/digital-workplace", label: "Digital Workplace Services" },
            { href: "/services/digitalization/intelligent-business-services", label: "Intelligent Business Services Monitoring" },
            { href: "/services/digitalization/unified-it-experience", label: "Unified IT Experience Desk" },
            { href: "/services/digitalization/finops", label: "FinOps Services" },
            { href: "/services/digitalization/Kalven Software Solutions-amuraa", label: "Kalven Software Solutions AMURAA® Digital Platform" },
            { href: "/services/digitalization/well-architected", label: "Well-Architected Framework Assessment" },
            { href: "/services/digitalization/intelligence", label: "Intelligence Services",className: "font-bold text-black"  },
            { href: "/services/digitalization/ai-services", label: "Artificial Intelligence Services" },
            { href: "/services/digitalization/business-intelligence", label: "Business Intelligence Solutions" },
            { href: "/services/digitalization/cognitive-3d", label: "Cognitive 3D Services" },
            { href: "/services/digitalization/conversational-ai", label: "Conversational AI" },
            { href: "/services/digitalization/data-visualization", label: "Data Visualization" },
            { href: "/services/digitalization/rpa", label: "Robotic Process Automation Services" },
            { href: "/services/digitalization/connected-convergence", label: "Connected Convergence Platform",className: "font-bold text-black"  },
            { href: "/services/digitalization/api-integration", label: "API Enablement and Integration Services" },
            { href: "/services/digitalization/data-lifecycle", label: "Data Lifecycle Management Services" },
            { href: "/services/digitalization/customer-ecosystem", label: "Customer Centric Ecosystem",className: "font-bold text-black"  },
            { href: "/services/digitalization/crm", label: "CRM" },
            { href: "/services/digitalization/customer-experience", label: "Customer Experience" },
            { href: "/services/digitalization/digital-marketing", label: "Digital Marketing" },
            { href: "/services/digitalization/digital-experience", label: "Digital Experience" },
            { href: "/services/digitalization/social-listening", label: "Social Listening" },
            { href: "/services/digitalization/cyber-security", label: "Cyber Security Services",className: "font-bold text-black"  },
            { href: "/services/digitalization/nexgen-soc", label: "NexGen SOC" },
            { href: "/services/digitalization/mdr", label: "Managed Detection and Response (MDR)" },
            { href: "/services/digitalization/vms", label: "Vulnerability Mgmt Services (VMS)" },
            { href: "/services/digitalization/penetration-testing", label: "Penetration Testing" },
            { href: "/services/digitalization/cyber-posture", label: "3600 Cyber Posture Management" },
            { href: "/services/digitalization/breach-simulation", label: "Breach & Attack Simulation (BAS) Service" },
            { href: "/services/digitalization/third-party-risk", label: "Third Party Risk Management" },
            { href: "/services/digitalization/vciso", label: "Ondemand vCISO Services" },
            { href: "/services/digitalization/attack-surface", label: "Know Your Attack Surface (KYAS)" },
            { href: "/services/digitalization/sustainability", label: "Sustainability",className: "font-bold text-black"  },
            { href: "/services/digitalization/regulatory", label: "Regulatory (SDS) Documentation" },
            { href: "/services/digitalization/safetyone", label: "SafetyOne" },
            { href: "/services/digitalization/sap-ehs", label: "SAP Environment, Health & Safety Management" },
            { href: "/services/digitalization/sap-product-safety", label: "SAP Product Safety & Stewardship" },
            { href: "/services/digitalization/cres-it", label: "Corporate Real Estate IT (CRES-IT)",className: "font-bold text-black"  },
          ],
        },
        
    
    {
      href: "/coes", label: "CoEs",
      subItems: [
        { href: "/coes/sap", label: "SAP",className: "font-bold text-black" },
        { href: "/coes/sap-s4hana", label: "SAP S/4HANA" },
        { href: "/coes/rise-with-sap", label: "Rise with SAP" },
        { href: "/coes/sap-on-cloud", label: "SAP on Cloud" },
        { href: "/coes/sap-technical", label: "SAP Technical" },
        { href: "/coes/sap-infrastructure", label: "SAP Infrastructure" },
        { href: "/coes/solution-manager", label: "Solution Manager" },
        { href: "/coes/sap-solutions", label: "SAP Solutions" },
        { href: "/coes/sap-ibp", label: "SAP IBP" },
        { href: "/coes/sap-dm", label: "SAP DM" },
        { href: "/coes/sap-dam", label: "SAP DAM" },
        { href: "/coes/aws", label: "AWS",className: "font-bold text-black" },
        { href: "/coes/aws-migration", label: "AWS Migration Services" },
        { href: "/coes/Kalven Software Solutions-ascent", label: "Kalven Software Solutions Ascent Framework" },
        { href: "/coes/aws-managed", label: "AWS Managed Services" },
        { href: "/coes/aws-transformation", label: "AWS Transformation Services" },
        { href: "/coes/aws-kinesis", label: "AWS Kinesis" },
        { href: "/coes/aws-glue", label: "AWS Glue" },
        { href: "/coes/data-analytics-aws", label: "Data Analytics on AWS Services" },
        { href: "/coes/aws-control-tower", label: "AWS Control Tower" },
        { href: "/coes/amazon-quicksight", label: "Amazon QuickSight" },
        { href: "/coes/devops", label: "DevOps Services" },
        { href: "/coes/amazon-dynamodb", label: "Amazon DynamoDB" },
        { href: "/coes/amazon-rds", label: "Amazon Relational Database Service" },
        { href: "/coes/digital-customer-experience", label: "Digital Customer Experience Competency" },
        { href: "/coes/ec2-windows", label: "EC2 for Windows" },
        { href: "/coes/aws-lambda", label: "AWS Lambda" },
        { href: "/coes/windows-on-aws", label: "Microsoft Windows Workloads on AWS" },
        { href: "/coes/aws-api-gateway", label: "Amazon API Gateway" },
        { href: "/coes/aws-ecs", label: "Amazon Elastic Container Service" },
        { href: "/coes/microsoft", label: "Microsoft",className: "font-bold text-black" },
        { href: "/coes/azure-infrastructure", label: "Azure Infrastructure Services" },
        { href: "/coes/microsoft-teams", label: "Collaboration - Microsoft Teams and SharePoint" },
        { href: "/coes/modern-workplace", label: "Modern Workplace – M365" },
        { href: "/coes/enterprise-modernization", label: "Enterprise Modernization - Azure" },
        { href: "/coes/rapid-app-dev", label: "Rapid Application Development" },
        { href: "/coes/zero-code", label: "Zero Code Applications" },
        { href: "/coes/microsoft-dynamics", label: "Microsoft Dynamics 365" },
        { href: "/coes/data-ai", label: "Data and AI" },
        { href: "/coes/iot-embedded", label: "IoT & Embedded Systems", className: "font-bold text-black" },
        { href: "/coes/embedded-systems", label: "Embedded Systems" },
        { href: "/coes/factory-automation", label: "Factory Automation" },
        { href: "/coes/smart-iot", label: "Smart IoT" },
        { href: "/coes/servicenow", label: "Service Now" ,className: "font-bold text-black"},
        { href: "/coes/irm", label: "Integrated Risk Management (IRM)" },
        { href: "/coes/hr-service-delivery", label: "HR Service Delivery" },
        { href: "/coes/intelligent-app-dev", label: "Intelligent Application Development" },
        { href: "/coes/strategic-portfolio", label: "Strategic Portfolio Management" },
        { href: "/coes/it-operations", label: "IT Operations Management" },
        { href: "/coes/it-service", label: "IT Service Management" },
        { href: "/coes/security-operations", label: "Security Operations" },
        { href: "/coes/financial-institute", label: "Financial Services Institute" },
        { href: "/coes/servicenow-managed", label: "ServiceNow Managed Services" },
        { href: "/coes/field-service", label: "Field Service Management" },
        { href: "/coes/vendor-risk", label: "Vendor Risk Management" },
        { href: "/coes/legal-service", label: "Legal Service Delivery" },
        { href: "/coes/salesforce", label: "Salesforce",className: "font-bold text-black" },
        { href: "/coes/salesforce-advisory", label: "Advisory & Consulting Services" },
        { href: "/coes/salesforce-implementation", label: "Implementation Services" },
        { href: "/coes/salesforce-support", label: "Application Support" },
        { href: "/coes/mulesoft", label: "MuleSoft Services" },
        { href: "/coes/accelerators-tools", label: "Accelerators & Tools" },
        { href: "/coes/rpa", label: "RPA",className: "font-bold text-black" },
        { href: "/coes/rpa-advisory", label: "Advisory Services" },
        { href: "/coes/rpa-alliance", label: "Alliance" },
        { href: "/coes/rpa-support", label: "Implementation and Support" },
        { href: "/coes/iExtractor", label: "Solutioning - iExtractor" },
        { href: "/coes/gcp", label: "GCP",className: "font-bold text-black" },
        { href: "/coes/data-analytics-gcp", label: "Data and Analytics on GCP" },
        { href: "/coes/sap-gcp", label: "SAP on GCP" },
        { href: "/coes/oracle", label: "Oracle",className: "font-bold text-black" },
        { href: "/coes/cloud-transformation", label: "Cloud Transformation" },
        { href: "/coes/managed-services", label: "Managed Services" },
        { href: "/coes/oracle-app-services", label: "Oracle Application Services" },
        { href: "/coes/digital-transformation", label: "Enterprise Digital Transformation" },
        { href: "/coes/integration-services", label: "Integration Services" },
        { href: "/coes/oracle-advisory", label: "Oracle Advisory & Consulting" },
        { href: "/coes/oracle-e-business", label: "Oracle E-Business Suite Services" },
        { href: "/coes/blockchain", label: "Blockchain",className: "font-bold text-black" },
        { href: "/coes/qad", label: "QAD",className: "font-bold text-black" },
        { href: "/coes/qad-consulting", label: "Consulting Services" },
        { href: "/coes/qad-cloud", label: "Cloud Services" },
        { href: "/coes/qad-data-ai", label: "QAD Data and AI Services" },
        { href: "/coes/qad-consulting", label: "Business Consulting" },
        { href: "/coes/qad-support", label: "Support Services" },
        { href: "/coes/mobility", label: "Mobility",className: "font-bold text-black" },
        { href: "/coes/app-dev", label: "Application Development Services" },
        { href: "/coes/codiant", label: "Codiant" },
        { href: "/coes/implementation-support", label: "Implementation and Support Services" },
        { href: "/coes/intelligent-mobility", label: "Intelligent Mobility" },
        { href: "/coes/pega", label: "Pega",className: "font-bold text-black" },
        { href: "/coes/pega-integration", label: "Integration Services",className: "font-bold text-black" },
        { href: "/coes/pega-advisory", label: "Advisory Services" },
        { href: "/coes/pega-support", label: "Implementation and Support Services" },
        { href: "/coes/workday", label: "Workday",className: "font-bold text-black" },
        { href: "/coes/tricentis", label: "Tricentis",className: "font-bold text-black" },
        { href: "/coes/enterprise-testing", label: "Transform Your Enterprise Testing with Kalven Software Solutions Technologies" },
      ],
    },
    {
      href: "/solutions", label: "Solutions",className: "font-bold text-black",
      subItems: [
        { href: "/solutions/digital-shop-floor", label: "Digital Shop Floor" },
        { href: "/solutions/e-commerce", label: "E-Commerce" },
        { href: "/solutions/factory-process-automation", label: "Factory Process Automation" },
        { href: "/solutions/e-learning", label: "E-Learning" },
        { href: "/solutions/healthcare-tele-medicine", label: "Healthcare & Tele-medicine" },
        { href: "/solutions/mobile-inventory-manager", label: "Mobile Inventory Manager" },
        { href: "/solutions/safe-at-work", label: "Safe@Work" },
        { href: "/solutions/data-analytics-platform", label: "Data and Analytics Platform" },
        { href: "/solutions/Kalven Software Solutions4hana", label: "Kalven Software Solutions4HANA" },
        { href: "/solutions/Kalven Software Solutions4hana-manufacturing", label: "Kalven Software Solutions4HANA for Manufacturing" },
        { href: "/solutions/iextractor", label: "iExtractor" },
        { href: "/solutions/taxi-app", label: "TaxiApp" },
        { href: "/solutions/chemone", label: "ChemOne" },
        { href: "/solutions/servicesone", label: "ServicesOne" },
        { href: "/solutions/manufacturingone", label: "ManufacturingOne" },
        { href: "/solutions/wholesaleone", label: "WholesaleOne" },
        { href: "/solutions/techone", label: "TechOne" },
        { href: "/solutions/financeone", label: "FinanceOne" },
        { href: "/solutions/cpgone", label: "CPGOne" },
        { href: "/solutions/sfone", label: "SFOne" },
        { href: "/solutions/peopleone", label: "PeopleOne" },
        { href: "/solutions/logistics-transportation-one", label: "Logistics & TransportationOne" },
        { href: "/solutions/digital-onboarding", label: "Digital Onboarding Solution" }
      ],
    },
    {
      href: "/biznext", label: "BizNeXT",
      subItems: [
        { href: "/biznext/digital-strategy", label: "Digital Strategy" },
        { href: "/biznext/people-advisory", label: "People Advisory" },
        { href: "/biznext/technology-advisory", label: "Technology Advisory" },
        { href: "/biznext/digital-health", label: "Digital in Health" },
        { href: "/biznext/supply-chain", label: "Supply Chain" },
        { href: "/biznext/it-ot-convergence", label: "IT-OT Convergence" }
      ],
    },
    {
      href: "/Kalven Software Solutionstai", label: "Kalven Software SolutionsTech.AI",
     
    },
    {
      href: "/industries", label: "Industries",
      subItems: [
        { href: "/Kalven-Software-Solutions-ai/manufacturing", label: "Manufacturing" },
        { href: "/Kalven-Software-Solutions-ai/lifesciences", label: "Lifesciences" },
        { href: "/Kalven-Software-Solutions-ai/bfsi", label: "BFSI" },
        { href: "/Kalven-Software-Solutions-ai/mining", label: "Mining" },
        { href: "/Kalven-Software-Solutions-ai/agribusiness", label: "Agribusiness" },
        { href: "/Kalven-Software-Solutions-ai/healthcare", label: "Healthcare" },
        { href: "/Kalven-Software-Solutions-ai/government", label: "Government" },
        { href: "/Kalven-Software-Solutions-ai/utilities", label: "Utilities" },
        { href: "/Kalven-Software-Solutions-ai/logistics", label: "Logistics" },
        { href: "/Kalven-Software-Solutions-ai/dairy-farming", label: "Dairy Farming" },
        { href: "/Kalven-Software-Solutions-ai/aviation", label: "Aviation" },
        { href: "/Kalven-Software-Solutions-ai/education", label: "Education" },
        { href: "/Kalven-Software-Solutions-ai/retail", label: "Retail" },
        { href: "/Kalven-Software-Solutions-ai/telecom", label: "Telecom" },
        { href: "/Kalven-Software-Solutions-ai/media-entertainment", label: "Media & Entertainment" }
      ],
    },
    {
      href: "/aboutus", label: "About Us",
      subItems: [
        { href: "/alliances", label: "Alliances" },
        { href: "/blogs", label: "Blogs" },
        { href: "/case-studies", label: "Case Studies" },
        { href: "/events", label: "Events" },
        { href: "/press-releases", label: "Press Releases" },
        { href: "/webinars", label: "Webinars" },
        { href: "/podcasts", label: "Podcasts" }
      ],
    },
    {
      href: "/careers", label: "Careers",
     
    },
  ];

  return (
    <nav className="flex px-2 lg:px-4 2xl:px-6 bg-white shadow-lg ">
      <div className="container  mx-auto flex items-center justify-between ">
        {/* Logo */}
        <div className="text-xl font-bold py-3">
          <Link href="/">
            <img src="/assets/Kalven-logo.png" className="h-12" alt="Logo" />
          </Link>
        </div>

      {/* Desktop Menu */}
<div className="hidden  lg:flex   text-sm">
  {menuItems.map((item, index) => (
    <div
      key={index}
      className=" group"
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Parent Menu Item */}
      <Link href={item.href} className="hover:text-purple-700 px-4 py-7">
        {item.label}
      </Link>
      <p>
      
      </p>

      {/* Submenu */}
      {item.subItems && showSubMenu && hoveredIndex === index && (
        <div
          className="absolute top-full left-0 bg-gray-100 shadow-lg z-10"
          style={{
            width: '100vw', // Make the submenu span the full width of the viewport
            left: '0', // Align the submenu with the left of the viewport
            right: '0', // Make sure the submenu stretches across the full width
          }}
        >
          <div className="p-4 grid grid-cols-4 gap-4">
            {item.subItems.map((subItem, subIndex) => (
              <Link
                key={subIndex}
                href={subItem.href}
                className= {`block px-4 py-2 text-sm text-gray-700 hover:underline  ${subItem.className || ""}`}
              >
                {subItem.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  ))}
</div>



        {/* Search and Contact */}
        <div className="search-container flex gap-4">
          <img
            src="./assets/searchbox.png"
            className="w-7 h-7 mt-2"
            alt="Search"
          />
          <div className="p-2 border bg-purple-500 rounded-full hover:shadow-lg hover:bg-white hover:text-purple-500 transition duration-300">
            <Link
              href="/contact"
              className="block px-4 text-sm text-white hover:text-gray-600"
            >
              Contact Us
            </Link>
          </div>
          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex items-center focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6  text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`bg-black text-white text-sm fixed flex flex-col divide-y divide-gray-700 z-20 lg:hidden top-20 right-0 transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        {menuItems.map((item, index) => (
          <div
            key={index}  onClick={() => toggleItem(index)}
            className="relative flex justify-between items-center py-4 px-6"
            // onMouseEnter={() => setHoveredIndex(index)}
            // onMouseLeave={() => setHoveredIndex(null)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Main Menu Item */}
            <Link href={item.href} className="hover:text-gray-300">
              {item.label}
            </Link>

            {/* Submenu Toggle Button */}
            {item.subItems && (
              <button
                
                className="focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transform transition-transform duration-300 ${expandedItems[index] ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}

            {/* Submenu */}
            {item.subItems && expandedItems[index] && (
              <div
                className="absolute top-full left-0 w-full  bg-gray-100 shadow-lg  z-10 overflow-y-auto"
                style={{ maxHeight: '537px', scrollbarWidth: 'none', }} // Set a maximum height for the submenu
                onMouseEnter={() => setHoveredIndex(index)} // Keep hover state when cursor enters submenu
                onMouseLeave={() => setHoveredIndex(null)} // Remove hover state when cursor leaves submenu
              >
                <div className="grid grid-cols-1 gap-1 p-3">
                  {item.subItems.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className={`block px-4 py-2 text-sm text-gray-800 hover:underline rounded ${subItem.className || ""}`}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
