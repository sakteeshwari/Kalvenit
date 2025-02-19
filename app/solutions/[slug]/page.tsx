"use client";
import React from "react";
import Solutionspageimg from "@/app/components/Solutionspageimg/Solutionspageimg";
import Solutionservices from "@/app/components/Subpages/Solutionservices/Solutionservices";
import Solutionstrending from "@/app/components/Solutionstrending/Solutionstrending";
import Solutionsperspectives from "@/app/components/Solutionsperspectives/Solutionsperspectives";

// Define content and images for each solution dynamically
const solutionsData: Record<string, { content: string; image: string }> = {
  "digital-shop": {
    content:
      "Factory Scheduling is one of the vital activities performed in manufacturing to ensure that the entire production process performs flawlessly. Manual planning methods with spreadsheets can neither keep up with volatile risks and eliminate plant inefficiencies nor shorten lead cycles. Only by tracking availability, accuracy, priority, performance, quality of operations in real-time will you be able to know if your business goals are met – and if not – why was it missed. Using artificial intelligence and machine learning to model ‘what-if’ scenarios, KALVEN’s Factory Scheduling Solution harmonizes data visibility across plants, machines, supply chain, and people within the shortest time possible so that your operations always stay productive and profitable.",
    image: "/assets/solutionsdigital1.png",
  },
  "e-commerce": {
    content:
      "Time, experience, cost, and accessibility are some of the critical priorities for the ever-evolving tastes of the mobile-era customer. This is where personalized shopping with data management, sales insights, and triggered omni-communications within singular channels have proven to boost revenue and spend-efficiency. Discover how Digital technologies have transformed the core of the e-commerce and have employed its astounding capabilities to allow sellers to connect with their customers through the web, mobile and intelligent platforms.",
    image: "/assets/solutionsdigital2.png",
  },
};

// Default message and image for unknown solutions
const defaultContent = {
  content: "Solution not found. Please check the URL.",
  image: "/images/default.jpg",
};

// Define TypeScript types for props
interface SolutionPageProps {
  params: { slug: string };
}

const SolutionPage: React.FC<SolutionPageProps> = ({ params }) => {
  const solution = solutionsData[params.slug] || defaultContent;

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
