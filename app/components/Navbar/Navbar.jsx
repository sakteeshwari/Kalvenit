"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import "./Navbar.css"
import { motion } from 'framer-motion';
import Searchbarpage from "../searchbarpage/Searchbarpage.jsx"
import { usePathname } from "next/navigation"; // Import usePathname to track route changes

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({}); // Track expanded menu items
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered item index
  const [showSubMenu, setShowSubMenu] = useState(false);
  const pathname = usePathname(); // Detect route changes
 

 
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    setActivePage(pathname); // Update activePage based on current route
  }, [pathname]);

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
    setExpandedItems((prev) => {
      // If clicking the already open submenu, close it
      if (prev[index]) {
        return {}; // Close all submenus
      } else {
        return { [index]: true }; // Open only the clicked submenu
      }
    });
  };
  

  // Close the submenu when navigating to a different page
  useEffect(() => {
    setHoveredIndex(null);
    setShowSubMenu(false);
  }, [pathname]); // Runs whenever the URL path changes



  // Automatically close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false); // Close the menu when navigating to another page
    setExpandedItems({}); // Close all submenus
  }, [pathname]); // Runs whenever the URL path changes


  


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
        { href: "/services/digitalization", label: "Digitalization", className: "font-bold text-black" },
        { href: "/services/digitalization/ai-automation", label: "AI & Automation" },
        { href: "/services/digitalization/ar-vr-mr", label: "AR/VR/MR" },
        { href: "/services/digitalization/blockchain", label: "Blockchain" },
        { href: "/services/digitalization/cloud", label: "Cloud" },
        { href: "/services/digitalization/data-analytics", label: "Data Analytics" },
        { href: "/services/digitalization/iot", label: "IoT" },
        { href: "/services/digitalization/mobility", label: "Mobility" },
        { href: "/services/digitalization/social-media-marketing", label: "Social Media Marketing" },
        { href: "/services/digitalization/embedded-factory", label: "Embedded & Factory Automation" },
        { href: "/services/modernization", label: "Modernization", className: "font-bold text-black" },
        { href: "/services/modernization/application-migration", label: "Application Migration and Modernization Services" },
        { href: "/services/modernization/cloud-transformation", label: "Cloud Transformation Services" },
        { href: "/services/modernization/enterprise-mobile", label: "Enterprise Mobile Transformation" },
        { href: "/services/co-innovation-lab", label: "Co-Innovation Lab Services", className: "font-bold text-black" },
        { href: "/services/co-innovation-lab/consulting", label: "Consulting Services" },
        { href: "/services/co-innovation-lab/ideation", label: "Ideation Services" },
        { href: "/services/co-innovation-lab/implementation", label: "Implementation Services" },
        { href: "/services/gccs", label: "Global Capability Centers (GCCs)", className: "font-bold text-black" },
        { href: "/services/gccs/application-services", label: "Application Services", className: "font-bold text-black" },
        { href: "/services/gccs/application-management", label: "Application Management Services" },
        { href: "/services/gccs/packaged-application", label: "Packaged Application Services" },
        { href: "/services/nextgen-ams", label: "NextGen AMS", className: "font-bold text-black" },
        { href: "/services/shared-ams", label: "Shared AMS for MSMEs", className: "font-bold text-black" },
        { href: "/services/cloud-infrastructure", label: "Cloud & Infrastructure Management Services", className: "font-bold text-black" },
        { href: "/services/cloud-infrastructure/cloud-infrastructure", label: "Cloud Infrastructure Services" },
        { href: "/services/cloud-infrastructure/core-infrastructure", label: "Core Infrastructure Support Services" },
        { href: "/services/cloud-infrastructure/devxops", label: "DevXOps" },
        { href: "/services/cloud-infrastructure/digital-workplace", label: "Digital Workplace Services" },
        { href: "/services/cloud-infrastructure/intelligent-business", label: "Intelligent Business Services Monitoring" },
        { href: "/services/cloud-infrastructure/unified-it-experience", label: "Unified IT Experience Desk" },
        { href: "/services/cloud-infrastructure/finops", label: "FinOps Services" },
        { href: "/services/cloud-infrastructure/Kalven-amuraa", label: "Kalven Software Solutions AMURAA® Digital Platform" },
        { href: "/services/cloud-infrastructure/well-architected", label: "Well-Architected Framework Assessment" },
        { href: "/services/intelligence", label: "Intelligence Services", className: "font-bold text-black" },
        { href: "/services/intelligence/ai-services", label: "Artificial Intelligence Services" },
        { href: "/services/intelligence/business-intelligence", label: "Business Intelligence Solutions" },
        { href: "/services/intelligence/cognitive-3d", label: "Cognitive 3D Services" },
        { href: "/services/intelligence/conversational-ai", label: "Conversational AI" },
        { href: "/services/intelligence/data-visualization", label: "Data Visualization" },
        { href: "/services/intelligence/rpa", label: "Robotic Process Automation Services" },
        { href: "/services/intelligence/connected-convergence", label: "Connected Convergence Platform", className: "font-bold text-black" },
        { href: "/services/intelligence/api-integration", label: "API Enablement and Integration Services" },
        { href: "/services/intelligence/data-lifecycle", label: "Data Lifecycle Management Services" },
        { href: "/services/customer-ecosystem", label: "Customer Centric Ecosystem", className: "font-bold text-black" },
        { href: "/services/customer-ecosystem/crm", label: "CRM" },
        { href: "/services/customer-ecosystem/customer-experience", label: "Customer Experience" },
        { href: "/services/customer-ecosystem/digital-marketing", label: "Digital Marketing" },
        { href: "/services/customer-ecosystem/digital-experience", label: "Digital Experience" },
        { href: "/services/customer-ecosystem/social-listening", label: "Social Listening" },
        { href: "/services/cyber-security", label: "Cyber Security Services", className: "font-bold text-black" },
        { href: "/services/cyber-security/nexgen-soc", label: "NexGen SOC" },
        { href: "/services/cyber-security/mdr", label: "Managed Detection and Response (MDR)" },
        { href: "/services/cyber-security/vms", label: "Vulnerability Mgmt Services (VMS)" },
        { href: "/services/cyber-security/penetration-testing", label: "Penetration Testing" },
        { href: "/services/cyber-security/cyber-posture", label: "3600 Cyber Posture Management" },
        { href: "/services/cyber-security/breach-simulation", label: "Breach & Attack Simulation (BAS) Service" },
        { href: "/services/cyber-security/third-partyrisk", label: "Third Party Risk Management" },
        { href: "/services/cyber-security/vciso", label: "Ondemand vCISO Services" },
        { href: "/services/cyber-security/attack-surface", label: "Know Your Attack Surface (KYAS)" },
        { href: "/services/sustainability", label: "Sustainability", className: "font-bold text-black" },
        { href: "/services/sustainability/regulatory", label: "Regulatory (SDS) Documentation" },
        { href: "/services/sustainability/safetyone", label: "SafetyOne" },
        { href: "/services/sustainability/sap-ehs", label: "SAP Environment, Health & Safety Management" },
        { href: "/services/sustainability/sap-product-safety", label: "SAP Product Safety & Stewardship" },
        { href: "/services/cres-it", label: "Corporate Real Estate IT (CRES-IT)", className: "font-bold text-black" },
      ],
    },


    {
      href: "/coes", label: "CoEs",
      subItems: [
        { href: "/coes/sap", label: "SAP", className: "font-bold text-black" },
        { href: "/coes/sap/sap-s4hana", label: "SAP S/4HANA" },
        { href: "/coes/sap/rise-with-sap", label: "Rise with SAP" },
        { href: "/coes/sap/sap-on-cloud", label: "SAP on Cloud" },
        { href: "/coes/sap/sap-technical", label: "SAP Technical" },
        { href: "/coes/sap/sap-infrastructure", label: "SAP Infrastructure" },
        { href: "/coes/sap/solution-manager", label: "Solution Manager" },
        { href: "/coes/sap/sap-solutions", label: "SAP Solutions" },
        { href: "/coes/sap/sap-ibp", label: "SAP IBP" },
        { href: "/coes/sap/sap-dm", label: "SAP DM" },
        { href: "/coes/sap/sap-dam", label: "SAP DAM" },
        
        { href: "/coes/aws", label: "AWS", className: "font-bold text-black" },
        { href: "/coes/aws/aws-migration", label: "AWS Migration Services" },
        { href: "/coes/aws/kalven-ascent", label: "Kalven Software Solutions Ascent Framework" },
        { href: "/coes/aws/aws-managed", label: "AWS Managed Services" },
        { href: "/coes/aws/aws-transformation", label: "AWS Transformation Services" },
        { href: "/coes/aws/aws-kinesis", label: "AWS Kinesis" },
        { href: "/coes/aws/aws-glue", label: "AWS Glue" },
        { href: "/coes/aws/data-analytics-aws", label: "Data Analytics on AWS Services" },
        { href: "/coes/aws/aws-control-tower", label: "AWS Control Tower" },
        { href: "/coes/aws/amazon-quicksight", label: "Amazon QuickSight" },
        { href: "/coes/aws/devops", label: "DevOps Services" },
        { href: "/coes/aws/amazon-dynamodb", label: "Amazon DynamoDB" },
        { href: "/coes/aws/amazon-rds", label: "Amazon Relational Database Service" },
        { href: "/coes/aws/digital-customer", label: "Digital Customer Experience Competency" },
        { href: "/coes/aws/ec2-windows", label: "EC2 for Windows" },
        { href: "/coes/aws/aws-lambda", label: "AWS Lambda" },
        { href: "/coes/aws/windows-on-aws", label: "Microsoft Windows Workloads on AWS" },
        { href: "/coes/aws/aws-api-gateway", label: "Amazon API Gateway" },
        { href: "/coes/aws/aws-ecs", label: "Amazon Elastic Container Service" },
        
        { href: "/coes/microsoft", label: "Microsoft", className: "font-bold text-black" },
        { href: "/coes/microsoft/azure-infra", label: "Azure Infrastructure Services" },
        { href: "/coes/microsoft/microsoft-teams", label: "Collaboration - Microsoft Teams and SharePoint" },
        { href: "/coes/microsoft/modern-workplace", label: "Modern Workplace – M365" },
        { href: "/coes/microsoft/enterprise-modern", label: "Enterprise Modernization - Azure" },
        { href: "/coes/microsoft/rapid-app-dev", label: "Rapid Application Development" },
        { href: "/coes/microsoft/zero-code", label: "Zero Code Applications" },
        { href: "/coes/microsoft/microsoft-dynamics", label: "Microsoft Dynamics 365" },
        { href: "/coes/microsoft/data-ai", label: "Data and AI" },

        { href: "/coes/iot-embedded", label: "IoT & Embedded Systems", className: "font-bold text-black" },
        { href: "/coes/iot-embedded/embedded-systems", label: "Embedded Systems" },
        { href: "/coes/iot-embedded/factory-automation", label: "Factory Automation" },
        { href: "/coes/iot-embedded/smart-iot", label: "Smart IoT" },
        
        { href: "/coes/servicenow", label: "Service Now", className: "font-bold text-black" },
        { href: "/coes/servicenow/irm", label: "Integrated Risk Management (IRM)" },
        { href: "/coes/servicenow/hr-service-delivery", label: "HR Service Delivery" },
        { href: "/coes/servicenow/intelligent-app-dev", label: "Intelligent Application Development" },
        { href: "/coes/servicenow/strategic-portfolio", label: "Strategic Portfolio Management" },
        { href: "/coes/servicenow/it-operations", label: "IT Operations Management" },
        { href: "/coes/servicenow/it-service", label: "IT Service Management" },
        { href: "/coes/servicenow/security-operations", label: "Security Operations" },
        { href: "/coes/servicenow/financial-institute", label: "Financial Services Institute" },
        { href: "/coes/servicenow/servicenow-managed", label: "ServiceNow Managed Services" },
        { href: "/coes/servicenow/field-service", label: "Field Service Management" },
        { href: "/coes/servicenow/vendor-risk", label: "Vendor Risk Management" },
        { href: "/coes/servicenow/legal-service", label: "Legal Service Delivery" },

        { href: "/coes/salesforce", label: "Salesforce", className: "font-bold text-black" },
        { href: "/coes/salesforce/salesforce-advisory", label: "Advisory & Consulting Services" },
        { href: "/coes/salesforce/salesforce-implement", label: "Implementation Services" },
        { href: "/coes/salesforce/salesforce-support", label: "Application Support" },
        { href: "/coes/salesforce/mulesoft", label: "MuleSoft Services" },
        { href: "/coes/salesforce/accelerators-tools", label: "Accelerators & Tools" },

        { href: "/coes/rpa", label: "RPA", className: "font-bold text-black" },
        { href: "/coes/rpa/rpa-advisory", label: "Advisory Services" },
        { href: "/coes/rpa/rpa-alliance", label: "Alliance" },
        { href: "/coes/rpa/rpa-support", label: "Implementation and Support" },
        { href: "/coes/rpa/iExtractor", label: "Solutioning - iExtractor" },

        { href: "/coes/gcp", label: "GCP", className: "font-bold text-black" },
        { href: "/coes/gcp/data-analytics", label: "Data and Analytics on GCP" },
        { href: "/coes/gcp/sap-gcp", label: "SAP on GCP" },
        

        { href: "/coes/oracle", label: "Oracle", className: "font-bold text-black" },
        { href: "/coes/oracle/cloud-transform", label: "Cloud Transformation" },
        { href: "/coes/oracle/managed-services", label: "Managed Services" },
        { href: "/coes/oracle/oracle-app-services", label: "Oracle Application Services" },
        { href: "/coes/oracle/digital-transform", label: "Enterprise Digital Transformation" },
        { href: "/coes/oracle/integration-services", label: "Integration Services" },
        { href: "/coes/oracle/oracle-advisory", label: "Oracle Advisory & Consulting" },
        { href: "/coes/oracle/oracle-e-business", label: "Oracle E-Business Suite Services" },

        { href: "/coes/blockchain", label: "Blockchain", className: "font-bold text-black" },

        { href: "/coes/qad", label: "QAD", className: "font-bold text-black" },
        { href: "/coes/qad/consult-services", label: "Consulting Services" },
        { href: "/coes/qad/qad-cloud", label: "Cloud Services" },
        { href: "/coes/qad/qad-dataai", label: "QAD Data and AI Services" },
        { href: "/coes/qad/business-consult", label: "Business Consulting" },
        { href: "/coes/qad-support", label: "Support Services" },

        { href: "/coes/mobility", label: "Mobility", className: "font-bold text-black" },
        { href: "/coes/app-dev", label: "Application Development Services" },
        { href: "/coes/codiant", label: "Codiant" },
        { href: "/coes/implementation", label: "Implementation and Support Services" },
        { href: "/coes/intelligent", label: "Intelligent Mobility" },

        { href: "/coes/pega", label: "Pega", className: "font-bold text-black" },

       
        { href: "/coes/pega/pega-advisory", label: "Advisory Services" },
        { href: "/coes/pega/pega-support", label: "Implementation and Support Services" },

        { href: "/coes/workday", label: "Workday", className: "font-bold text-black" },
        { href: "/coes/tricentis", label: "Tricentis", className: "font-bold text-black" },
        
        { href: "/coes/enterprise-testing", label: "Transform Your Enterprise Testing with Kalven Software Solutions Technologies" },
      ],
    },
    {
      href: "/solutions", label: "Solutions", className: "font-bold text-black",
      subItems: [
        { href: "/solutions/digital-shop", label: "Digital Shop Floor" },
        { href: "/solutions/e-commerce", label: "E-Commerce" },
        { href: "/solutions/factory-automation", label: "Factory Process Automation" },
        { href: "/solutions/e-learning", label: "E-Learning" },
        { href: "/solutions/healthcare-telemedicine", label: "Healthcare & Tele-medicine" },
        { href: "/solutions/mobile-inventory", label: "Mobile Inventory Manager" },
        { href: "/solutions/safe-at-work", label: "Safe@Work" },
        { href: "/solutions/data-analytics", label: "Data and Analytics Platform" },
        { href: "/solutions/Kalven-4hana", label: "Kalven Software Solutions4HANA" },
        { href: "/solutions/Kalven-manufacturing", label: "Kalven Software Solutions4HANA for Manufacturing" },
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
        { href: "/solutions/logistics-transport", label: "Logistics & TransportationOne" },
        { href: "/solutions/digital-onboarding", label: "Digital Onboarding Solution" }
      ],
    },
    {
      href: "/biznext", label: "BizNeXT",
      subItems: [
        { href: "/biznext/digital-strategy", label: "Digital Strategy", className:"pl-28" },
        { href: "/biznext/people-advisory", label: "People Advisory", className:"pl-28" },
        { href: "/biznext/technology-advisory", label: "Technology Advisory", className:"pl-24" },
        { href: "/biznext/digital-health", label: "Digital in Health", className:"pl-24" },
        { href: "/biznext/supply-chain", label: "Supply Chain", className:"pl-24" },
        { href: "/biznext/it-ot-convergence", label: "IT-OT Convergence", className:"pl-24" }
      ],
    },

    {
      href: "/industries", label: "Industries",
      subItems: [
        { href: "/industries/manufacturing", label: "Manufacturing" },
        { href: "/industries/lifesciences", label: "Lifesciences" },
        { href: "/industries/bfsi", label: "BFSI" },
        { href: "/industries/mining", label: "Mining" },
        { href: "/industries/agribusiness", label: "Agribusiness" },
        { href: "/industries/healthcare", label: "Healthcare" },
        { href: "/industries/government", label: "Government" },
        { href: "/industries/utilities", label: "Utilities" },
        { href: "/industries/logistics", label: "Logistics" },
        { href: "/industries/dairy-farming", label: "Dairy Farming" },
        { href: "/industries/aviation", label: "Aviation" },
        { href: "/industries/education", label: "Education" },
        { href: "/industries/retail", label: "Retail" },
        { href: "/industries/telecom", label: "Telecom" },
        { href: "/industries/media-entertainment", label: "Media & Entertainment" }
      ],
    },
    {
      
      href: "/aboutus", label: "About Us",
      subItems: [
      {href: "/aboutus/blog", label: "Blog", className:"pl-40" },
      {href: "/aboutus/csr", label: "CSR", className:"pl-40"  },
      {href: "/aboutus/legal", label: "Legal", className:"pl-40"  },
      {href: "/aboutus/privacy-policy", label: "Privacy Policy", className:"pl-40"  },
      {href: "/aboutus/payment-policy", label: "Payment Policy", className:"pl-40"  },
      
      ]
    },
    {
      href: "/careers", label: "Careers",

    },
  ];

  return (
    <nav className="flex px-2 sticky top-0 z-30 lg:px-4 2xl:px-6 bg-white shadow-lg ">
      <div className="container  mx-auto flex items-center justify-between ">
        {/* Logo */}
        <div className="text-xl font-bold py-3">
          <Link href="/">
            <motion.img src="/assets/Kalven-logo.png"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.9 }}
              className="h-12" alt="Logo" />
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
              <Link href={item.href} className={`px-4 py-7 ${
                activePage === item.href
                  ? "text-gray-400 cursor-not-allowed"
                  : "hover:text-purple-700"
              }`}
              onClick={(e) => activePage === item.href && e.preventDefault()} >
                {item.label}
              </Link>


              {/* Submenu */}
              {item.subItems && showSubMenu && hoveredIndex === index && (
                <div
                  className="absolute top-full left-0 bg-gray-100 shadow-lg z-10 overflow-y-auto"
                  style={{
                    width: "98.5vw", // Stretching submenu across viewport

                    left: "0",
                    right: "0",
                    maxHeight: "80vh", // Limit height to 90% of viewport
                  }}
                >
                  <div className="columns-4 gap-4 p-4 px-40 space-y-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className={`block px-4 py-2 text-sm text-gray-700 hover:underline break-inside-avoid ${subItem.className || ""}`}
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
          <Searchbarpage></Searchbarpage>
          <div className="p-2 border bg-purple-500 rounded-full hover:shadow-lg hover:bg-white hover:text-purple-500 transition duration-300">
            <Link
              href="/contact"
              className=" text-xs px-2  block md:px-4 md:text-sm text-white hover:text-gray-600"
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
        className={`bg-black text-white text-sm fixed  flex flex-col divide-y divide-gray-700 z-20 lg:hidden top-[72px] right-0 transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        {menuItems.map((item, index) => (
          <div
            key={index} onClick={() => toggleItem(index)}
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
