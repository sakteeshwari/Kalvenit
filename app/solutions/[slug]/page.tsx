import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Solutionspageimg from "@/app/components/Solutionspageimg/Solutionspageimg";
import Solutionservices from "@/app/components/Subpages/Solutionservices/Solutionservices";
import Solutionstrending from "@/app/components/Solutionstrending/Solutionstrending";
import Solutionsperspectives from "@/app/components/Solutionsperspectives/Solutionsperspectives";


// Define content and images for each solution dynamically
const solutionsData: Record<string, { content: string; image: string }> = {
  "digital-shop": {
    content: "Factory Scheduling is one of the vital activities performed in manufacturing to ensure that the entire production process performs flawlessly. Manual planning methods with spreadsheets can neither keep up with volatile risks and eliminate plant inefficiencies nor shorten lead cycles. Only by tracking availability, accuracy, priority, performance, quality of operations in real-time will you be able to know if your business goals are met – and if not – why was it missed. Using artificial intelligence and machine learning to model ‘what-if’ scenarios, KALVEN’s Factory Scheduling Solution harmonizes data visibility across plants, machines, supply chain, and people within the shortest time possible so that your operations always stay productive and profitable.",
    image: "/assets/solutionsdigital1.png",
  },
  "e-commerce": {
    content: "Time, experience, cost, and accessibility are some of the critical priorities for the ever-evolving tastes of the mobile-era customer. This is where personalized shopping with data management, sales insights, and triggered omni-communications within singular channels have proven to boost revenue and spend-efficiency.Discover how Digital technologies have transformed the core of the e-commerce and has employed its astounding capabilities to allow sellers to connect with their customers through the web, mobile and intelligent platforms.",
    image: "/assets/solutionsdigital2.png",
  },
  "factory-automation": {
    content: "Solve business problems with strategic digital tools and accelerators from the Microsoft stack. Choose from a broad range of industry-specific app scenarios and enable positive balance sheet impact.",
    image: "/assets/solutionsdigital3.png",
  },
  "e-learning": {
    content: "Do you have a fantastic app idea that will revolutionize learning for the next generation of students and talent? Discover how you can give add a digital edge to your education style, with smart mobility solutions for simplified learning.No student or teacher or industry has the same approach to learning, which means that the method of imparting education also cannot be the same. With an extensive portfolio of simple, on-demand education apps from KALVEN Technologies, discover how you can facilitate the fast and widespread dissemination of skills and knowledge.",
    image: "/assets/solutionsdigital4.png",
  },
  "healthcare-telemedicine": {
    content: "Are you looking to expand the capabilities of your existing mHealth app with telemedicine or want to create a new healthcare delivery solution from scratch? Discover how custom telemedicine development, design, and testing services from KALVEN helps doctors and hospitals deliver on-demand advanced field-clinics – all under their unique brand.Advanced telemedicine, healthcare, and life sciences solutions are today crucial to competitively assess trending challenges, engage deeply with the patient, and reduce workforce burnouts. With custom on-demand virtual healthcare technologies and solutions, our solutions allow you to optimize clinical workflows, reduce operating costs, and improve patient care – from anywhere and anytime. Further, Electronic records of patients can be utilized for disease forecasting and analytics.",
    image: "/assets/solutionsdigital5.png",
  },

  "mobile-inventory": {
    content: "Warehouses daily conduct Stock Monitoring activities for Raw Materials, Finished Materials, etc. with items stored in different plants and different storage locations. Materials are picked up from different storage locations for production purposes, and finished goods are placed in different storage locations. Sometimes the warehouse clerks have to transfer stock from one plant to another plant location if the stock does not exist at the plant premises. Due to higher volumes of stock movements in the warehouse, clear visibility to inventory and Stock transfer status may not be available at all times. Discover how the KALVEN Mobile Inventory Manager app packs the power of the best of SAP for your workforce by ensuring real-time data available on the palm of their hands.  ",
    image: "/assets/solutionsdigital1.png",
  },
  "safe-at-work": {
    content: "The enterprises, on a global scale, are reeling under the impact of the Ongoing Pandemic. The businesses are trying to cope up with the current scenario and planning to establish safer comeback to workplace for continued business practices. KALVEN in collaboration with SAP as a Gold Partner, working with the leading EHS managers, industry experts, Hands-on functional and technical consultants built an innovative, out of the box, pre-packaged business EHS Solution – ‘Safe@Work’.Safe@Work solution is SAP qualified and is available across all geographies.",
    image: "/assets/solutionsdigital2.png",
  },
  "data-analytics": {
    content: "Data is often compared to oil due to its precious nature, yet its value for the enterprise is far greater than the importance it receives. Due to its sheer abundance from a wide variety of disparate sources and the magic it creates for your bottom-line, the value of data has propelled it to become the very lifeblood of an enterprise. By identifying, extracting, harmonizing, making it usable, and acting on it promptly, the scalability of your business and profitability would reach new heights. KALVEN’s Data and Analytics Platform serves as the centralized data hub of an enterprise, tapping into every hidden siloed, unstructured-structured data, and delivers business value by making it actionable. Discover how you can unearth a “real” balance-sheet impact, build accurate prediction models, improve operational responsiveness in real-time and move from ‘what happened and why?’ to ‘here’s what we do’ all in a matter of seconds.",
    image: "/assets/solutionsdigital3.png",
  },
  "Kalven-4hana": {
    content: "Operating in real-time is no more a choice or aspiration but a necessity. Businesses are frequently under the consumer‘s microscope to produce innovative products and services at competitive prices. SAP S/4HANA helps organizations harness and leverage expeditiously game-changing opportunities and innovations with simplified business processes and cutting-edge technology. Discover how you can fast-track your journey to establishing a digital core for your Intelligent Enterprise with our SAP pre-qualified and pre-packaged solution. While providing precise inputs on the scope, costs, and timelines to build a compelling business case, we assist in deploying the solution quickly and lower TCO",
    image: "/assets/solutionsdigital4.png",
  },
  "Kalven-manufacturing": {
    content: "A Qualified SAP partner packaged solution In today’s fast-paced digital world, manufacturing companies are dealing with disruptive changes with pressure to deliver products quickly, drive outstanding customer experiences, and foster exponential growth while differentiating themselves from the competition. As a result, enterprise systems that run their business needs to be faster, simpler, flexible, and scalable. KALVEN4HANA for manufacturing – an SAP qualified package solution, is specially designed for manufacturing companies to accelerate their digital journey and become intelligent enterprises.",
    image: "/assets/solutionsdigital5.png",
  },

  "iextractor": {
    content: "Do you find extracting valuable insights from thousands of business documents every day? Or struggle to structure those insights without errors or tedious hours of effort? Discover how you can obtain and analyze rich intelligence from unstructured data quickly, effortlessly, and accurately – to address business challenges and embrace opportunities – in real-time. Business documents without standardized templates pose severe challenges to the efficacy of any enterprise operations. Intelligent iExtractor – an innovative, custom-built solution from KALVEN – leverages AI-led models and industry-tailored strategies, to automate entry-extraction from your business documents – regardless of its type.",
    image: "/assets/solutionsdigital1.png",
  },

  "taxi-app": {
    content: "Do you have a fantastic app idea that will revolutionize the taxi industry? Discover how you can give your taxis a digital edge with the most advanced technology and enhanced sustainable features for a competitive advantage. Operating a fleet of taxis has undergone seismic transitions in the past decade, changing how people commute from point A to point B. On-demand vehicle hailing apps have conquered almost every nook and corner of global streets – from cabs, movers to delivery services. Forging your advanced digital platform with a smarter, long-term strategy can turn out to be a hallmark to stay ahead of the competition.",
    image: "/assets/solutionsdigital2.png",
  },
  "chemone": {
    content: "Chemical companies are witnessing transformational shifts in their business landscape with margin pressures, changes in how their customers want to use and pay for their products, and the need for strategic agility to shrink cycle/lead times in response to market dynamics. The ability to address these trends will determine the winners of tomorrow – companies who can move beyond offering products and services and provide outcomes that benefit the community as a whole. Discover how our industry-focused SAP-qualified ChemOne solution helps you manage end-to-end enterprise business processes, from manufacturing planning-execution to logistics management to statutory compliance.",
    image: "/assets/solutionsdigital3.png",
  },
  "servicesone": {
    content: "At the heart of disruptions and revolutionizing customer experience are talented people at a professional services organization and the expertise they carry. The need is to systematically integrate people, processes, and technology and continually reinvent the entire services lifecycle to evolve in line with changing business dynamics. Future-facing services firms embrace automation, self-service/knowledge platforms, and freeing up their workforce to focus more on strategic innovation and deliver superior value to customers. Regardless of where assets operate, discover how leading professional services companies can manage their end-to-end business processes, drive higher productivity, and set new benchmarks for delivery excellence with SAP pre-configured KALVEN ServicesOne solution.",
    image: "/assets/solutionsdigital4.png",
  },
  "manufacturingone": {
    content: "The manufacturing industry confronts a diverse set of challenges, from creating robust growth models that ensure differentiated products and services for consumers, shortening lead times to maintaining margins. High-performance manufacturers are differentiated – and can track their ROI – by how they respond to these challenges and taking a holistic approach to their business. Evolving hyper-competitive pressures also require manufacturers to perform extensive broad enterprise integration and conduct alignment of business processes with evolving market dynamics. Discover how KALVEN ManufacturingOne reduces risks and helps drive competitive advantage through innovative digital strategies while cutting implementation times by less than half. ",
    image: "/assets/solutionsdigital5.png",
  },
  "wholesaleone": {
    content: "Global supply chain challenges force wholesale & distribution companies to transparently track, trace, and monitor every product, resource, and asset in their inventory. The intensity of competition drives them to hunt for new revenue sources and widen their product range and ensure shorter delivery times and convenience as options. The circular economy’s importance is also adding pressure to wholesale companies to take up higher levels of responsibility and integrity along the reverse supply chain. Responding to these global mega themes, regardless of other specific challenges that they face, will determine how successfully wholesalers can retain and satisfy customers. KALVEN WholesaleOne is explicitly designed for Industry players to respond to dynamic operational risks proactively. It maximizes supply chain visibility and helps in driving efficiencies with optimized product mix and inventory planning. Most importantly, it helps boost collaboration between customers and suppliers. ",
    image: "/assets/solutionsdigital1.png",
  },
  "techone": {
    content: "The impact of the high-tech industry on the global economy is profound and diverse. The sector faces consumption and demand variations, and the need to accelerate innovation is ever on the rise. The blurring lines between software and hardware is also transforming the industry in multiple ways.   Analyzing oceans of data, rationalizing processes, and responding to these mega themes on the fly is not a minor feat. With the need to scale digital innovation on the one hand and disruption on the other, high-tech companies are having to reimagine their business models. Discover how our pre-configured SAP TechOne solution connects, aligns, and standardizes all cross-departmental processes, data, and people through a common intelligent platform allowing organizations to deliver outstanding business outcomes.",
    image: "/assets/solutionsdigital2.png",
  },

  "financeone": {
    content: "Chief Finance Officers (CFOs) are burdened with managing their F&A responsibilities while simultaneously tracking oceans of enterprise data to understand evolving compliance and privacy norms profoundly, manage balance-sheet risks, and outmaneuver market volatilities. They need to account for all key figures and processes in real-time for forecasts to be reliable during decision-making. Discover how FinanceOne helps maintain a single source of truth for financial decision making streamline reporting for multiple standards while adopting the latest SAP innovations.  ",
    image: "/assets/solutionsdigital3.png",
  },
  "cpgone": {
    content: "The digital revolution has impacted consumer behavior in multiple ways. It has compelled organizations in the sector to adopt increasingly sophisticated approaches to understand what, how, where, and when customers buy their products and are coming up with smart options on pricing and promotions. CP companies also face margin pressures, fluctuating material costs, and high logistics expenditures. KALVEN’s SAP S/4HANA preconfigured CPGOne business solution helps you successfully address the demands of brand proliferation, improve product quality, and react predictively to demand and capacity changes while providing you with a single, eagle-eyed view of your business  ",
    image: "/assets/solutionsdigital4.png",
  },
  "sfone": {
    content: "While Human Resource leaders recognize the need for advanced digital capabilities for improved agility, productivity, and governance, technology, in itself, is never the most significant challenge. The paradox is to remain human and ensure that interactions are personalized in a distinctly digital-native world, with the most significant barrier being seamlessly integrating people, processes, and technologies. To ease Core HR and Talent Management tasks, KALVEN pre-configured packaged solution  SFOne harnesses the power of pre-defined best practices, templates, tools, and training accelerators to deliver an elegant solution. By the significantly slicing time, effort, and costs by half, this mobile-friendly solution creates a single source of truth for HR leaders. It allows them to drive excellence,  efficiencies, and productivity – while creating rich, personalized experiences for their workforce that drive engagement and bonding.  ",
    image: "/assets/solutionsdigital5.png",
  },
  "peopleone": {
    content: "Human resources are the critical assets for enabling the sustained growth and expansion of enterprises globally. HR leaders have a massive task of tracking the entire workforce’s lifecycle and ensuring their well–being, satisfaction, and career growth. Changing job roles, pressures of upskilling or reskilling, and differentiated organizational leadership require a speedy yet structured approach to HCM operating models today. Discover how our SAP-qualified PeopleOne solution fast-forwards not only the implementation time and maturity for HCM technologies but also maximizes time to value, performance, and overall visibility of your entire workforce through a single platform.  ",
    image: "/assets/solutionsdigital1.png",
  },
  "logistics-transport": {
    content: "We know the logistics, transportation, and last-mile connectivity industry’s paper-thin margins, and the key stressors for management decisions. Our experts carefully analyze your operations and business objectives to uncover tailored opportunities via productivity and resilience, even through turbulence. The global economy relies on effective last-mile connections today, with fluid channels to move people and goods across seas, land, skies, and waves of technological and market disruptions. We know how thickets of growing sophistication and complexities with high standards of fulfillment can break a customer relationship.",
    image: "/assets/solutionsdigital2.png",
  },
  "digital-onboarding": {
    content: "Our solution components are plug n play in nature and helps Customers design an efficient and compliant Digital Customer on-boarding solution. KALVEN Digital Onboarding Solution is a mobile-first user journey for hassle-free customer on-boarding process covering",
    image: "/assets/solutionsdigital3.png",
  },
};

// Default message and image for unknown solutions
const defaultContent = {
    content: "Solution not found. Please check the URL.",
    image: "/images/default.jpg",
  };
  
  // Define a type for the page props to handle params
  interface SolutionPageProps {
    params: {
      slug: string;
    };
  }
  
  const SolutionPage = ({ params }: SolutionPageProps) => {
    const { slug } = params;
    const solution = solutionsData[slug] || defaultContent;
  
    return (
      <div>
        {/* Pass the image dynamically based on the slug */}
        <Solutionspageimg imgSrc={solution.image} />
        <div className="bg-gray-200 p-4 leading-relaxed tracking-wider">
          <p className="mt-6">{solution.content}</p>
        </div>
        <Solutionservices />
        <Solutionstrending />
        <Solutionsperspectives />
      </div>
    );
  };
  
  export default SolutionPage;