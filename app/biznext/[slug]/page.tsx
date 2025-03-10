"use client";

import { useParams } from "next/navigation";
import React from "react";
import Link from "next/link";
import Biznextpageimg from "@/app/components/Biznextpageimg/Biznextpageimg";
import Biznextpageoffering from "@/app/components/Biznextpageoffering/Biznextpageoffering";
import Biznextpagespotlight from "@/app/components/Biznextpagespotlight/Biznextpagespotlight";

// Define the content mapping for different slugs
const bizNextData: Record<string, { title: string; content: string; link: string }> = {
  "digital-strategy": {
    title: "Digital Strategy",
    content:
      "Digital is a way of business and the essence of Digital Strategy is to leverage technology as a value driver / value creator / value enabler...",
    link: "/biznext/digital-strategy",
  },
  "people-advisory": {
    title: "People Advisory",
    content:
      "As socio-economic factors continue to influence organizations, it is becoming essential for organizations to focus on setting a clear direction...",
    link: "/biznext/people-advisory",
  },
  "technology-advisory": {
    title: "Technology Advisory",
    content:
      "Value Visibility is an exclusive offering of BizNeXT that enables our customers to maximize business value by enhancing visibility...",
    link: "/biznext/technology-advisory",
  },
  "digital-health": {
    title: "Digital in Health",
    content:
      "Digital in Health solutions & offerings help the healthcare & life sciences industry navigate through complex decisions...",
    link: "/biznext/digital-health",
  },
  "supply-chain": {
    title: "Supply Chain",
    content:
      "Optimizing your Supply Chain operations while fulfilling evolving demands, managing disruptions, and meeting regulatory requirements...",
    link: "/biznext/supply-chain",
  },
  "it-ot-convergence": {
    title: "IT-OT Convergence",
    content:
      "IT and operational technology (OT) teams in Manufacturing companies have traditionally run their functions in parallel...",
    link: "/biznext/it-ot-convergence",
  },
};

// Default message for unknown slugs
const defaultContent = {
  title: "Page Not Found",
  content: "Sorry, the requested page does not exist.",
  link: "/", // Redirect to home page if not found
};

const BizNextSlugPage = () => {
  const params = useParams();
  const slug = params?.slug as string;

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

          {/* Link to Learn More */}
         
        </div>
      </div>
      
      

      <Biznextpageoffering />
      <Biznextpagespotlight />
    </div>
  );
};

export default BizNextSlugPage;
