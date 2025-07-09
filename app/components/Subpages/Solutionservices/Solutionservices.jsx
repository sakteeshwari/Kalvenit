import React from "react";

const services = [
  {
    title: "Automate production scheduling",
    description:
      "Move on from manual spreadsheets with its attendant data inaccuracies into the exciting world of automated production process and planning.",
  },
  {
    title: "Maximize plant efficiencies",
    description:
      "Reduce idle times by eliminating inefficiencies, risks, and bottlenecks due to improper line balancing.",
  },
  {
    title: "Simplify/Unburden operator’s job",
    description:
      "Provide a precise sequence of tasks to the operator and eliminate manual, error-prone judgments from the plant-floor team.",
  },
  {
    title: "Productivity Cube",
    description:
      "A single dashboard to assess, analyze, and action decisions across finance, operations, quality, engineering, and more.",
  },
  {
    title: "What-if Scenario Analysis",
    description:
      "Know which risks can jeopardize factory throughput and productivity from productions with ‘what-if’ scenario modeling.",
  },
  {
    title: "Optimize order prioritization",
    description:
      "Prioritize tasks, optimize lead-times, minimize costs, and maximize resource and capacity utilization.",
  },

  {
    title: "Predictive and diagnostic analysis",
    description:
      "Tap into the power of real-time Business Intelligence reporting across finance, operational, leadership, and supply chain functions",
  },
  {
    title: "Overall Equipment Effectiveness (OEE)",
    description:
      "One metric to ensure maximum availability, performance, and effectiveness of factory operations",
  },
];

const ServiceOfferings = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
        Service Offerings<span className="text-red-600">.</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceOfferings;
