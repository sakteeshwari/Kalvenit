"use client";

import { useParams } from "next/navigation";
import React from "react";
import Biznextpageimg from "@/app/components/Biznextpageimg/Biznextpageimg";
import Biznextpageoffering from "@/app/components/Biznextpageoffering/Biznextpageoffering";
import Biznextpagespotlight from "@/app/components/Biznextpagespotlight/Biznextpagespotlight";

// Define the content mapping for different slugs
const bizNextData: Record<string, { title: string; content: string }> = {
  "digital-strategy": {
    title: "Digital Strategy",
    content:
      "Digital is a way of business and the essence of Digital Strategy is to leverage technology as a value driver / value creator / value enabler. To help organizations become “Enterprises of the future” we take an immersive approach that imbibes co-creation with clients to develop strategy roadmaps at Organization level, at Function level and at Product level.",
  },
  "people-advisory": {
    title: "People Advisory",
    content:
      "As the socio-economic factors continue to influence the organizations, it is becoming essential for organizations to focus on – setting a clear direction for the ‘Enterprise of Future’, keeping employees motivated, and creating an environment/culture that adapts to change.",
  },
  "technology-advisory": {
    title: "Technology Advisory",
    content:
      "Value Visibility is an exclusive offering of BizNeXT that enables our customers to maximize business value by enhancing the visibility of immediate concerns and available solution options (people, processes, and technology).",
  },
  "digital-health": {
    title: "Digital in Health",
    content:
      "Digital in Health solutions & offerings helps the healthcare & life sciences industry navigate through complex decisions. We help you leverage digitalization and data capabilities to strengthen your operations, optimize your clinical and patient care processes, connect care teams, and support diagnostic and therapeutic decision-making. Our domain-specific digital strategies and solutions, carefully curated from our expertise and experience, have helped us serve leading healthcare & life science players worldwide.",
  },
  "supply-chain": {
    title: "Supply Chain",
    content:
      "Optimizing your Supply Chain operations while fulfilling the evolving demands of consumers, managing business disruptions, and meeting regulatory requirements could be challenging. Discover how our expertise and in-depth business knowledge can help you address these challenges and take advantage of emerging opportunities in these times that are filled with uncertainties.",
  },
  "it-ot-convergence": {
    title: "IT-OT Convergence",
    content:
      "IT and operational technology (OT) teams in Manufacturing companies have traditionally run their functions in parallel without much connectivity or cross leverage. Siloed IT-OT systems can become a significant bottleneck in driving competitive advantage. Businesses must integrate business and operation systems in real-time to create a common operational picture (COP) of their business.",
  },
};

// Default message for unknown slugs
const defaultContent = {
  title: "Page Not Found",
  content: "Sorry, the requested page does not exist.",
};

const BizNextSlugPage = () => {
  const params = useParams();
  const slug = params?.slug as string; // Ensure we are treating the slug as a string

  const solution = bizNextData[slug] || defaultContent;

  return (
    <div className="p-6">
      <Biznextpageimg />

      <div
        className="mt-10 min-h-screen rounded-lg flex items-center justify-center p-6 lg:mx-32"
        style={{
          backgroundImage: "url('/assets/moon.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-2xl bg-white p-8 rounded-lg shadow-lg bg-opacity-90">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{solution.title}</h1>
          <p className="text-gray-600 mb-4">{solution.content}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Learn More
          </button>
        </div>
      </div>

      <Biznextpageoffering />
      <Biznextpagespotlight />
    </div>
  );
};

export default BizNextSlugPage;
