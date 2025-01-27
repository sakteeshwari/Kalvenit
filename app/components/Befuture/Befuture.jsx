import React from "react";
import "./Befuture.css";
import { ArrowRight } from "lucide-react";

const Befuture = () => {
  const Solutions = [
    {
      images: "/assets/microdynamics.png", // Replace with actual image path
      title: "Microsoft Dynamics 365",
      description:
        "Experience better customer retention capacity with Microsoft Dynamics 365",
    },
    {
      images: "/assets/embeddedsys.png", // Replace with actual image path
      title: "Embedded Systems",
      description:
        "Top seven tips so you can create a reliable embedded system",
    },
    {
      images: "/assets/qad.png", // Replace with actual image path
      title: "QAD",
      description:
        "The Perfect Pairing: QAD and the Food and Beverage industry",
    },
    {
      images: "/assets/ams.jpg", // Replace with actual image path
      title: "AMS",
      description: "The positive side-effects of COVID-19 for businesses",
    },
  ];

  return (
    <div className="p-6 pt-12 bg-gray-100">
      <h1 className="text-purple-800 text-2xl font-semibold mb-4 slide-up">
        BE FUTURE READY
      </h1>
      <h1 className="text-black text-3xl slide-up">
        YASH Perspectives <span className="text-red-700">.</span>
      </h1>
      <p className="text-blue-600 pt-4 text-right font-medium cursor-pointer mb-6">
        View ALL Blogs &nbsp; &rarr;
      </p>

      {/* Solutions List */}
      <div className="grid grid-cols-1 mx-8 lg:mx-12 lg:mt-8 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={solution.images}
              alt={solution.title}
              className=" h-64 w-96   rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{solution.title}</h2>
            <p className="text-gray-700 mb-4 hover:underline cursor-pointer">{solution.description}</p>
            <div className="py-3 text-lg slide-up">
              <button className="flex items-center space-x-2 text-red-500 hover:text-red-700 font-medium">
                <div className="flex justify-center items-center w-8 h-8 border border-red-500 rounded-full hover:bg-red-100">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <span>Know more</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Befuture;
