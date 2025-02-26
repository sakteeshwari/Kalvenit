import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const spotlightTopics = [
  {
    id: 1,
    title: "Powering Mining Operations to the Next Level with IoT and Microsoft",
    image: "/assets/biznextspotlight1.png",
    link: "/biznext/digital-strategy",
  },
  {
    id: 2,
    title: "A MedTech Manufacturing Leader Transforms Operations with a State-of-the-Art Monitoring Solution",
    image: "/assets/biznextspotlight2.png",
    link: "/biznext/people-advisory",
  },
  {
    id: 3,
    title: "Elevating Battery Recycling to a Sustainable Future with SAP S/4HANA Cloud and RISE with SAP",
    image: "/assets/biznextspotlight3.png",
    link: "/biznext/technology-advisory",
  },
  {
    id: 4,
    title: "An Expert-Designed Digital Roadmap that Goes Beyond Automation",
    image: "/assets/biznextspotlight4.png",
    link: "/biznext/digital-health",
  },
  {
    id: 5,
    title: "Designing Unparalleled Customer Experiences for a MedTech Leader",
    image: "/assets/biznextspotlight5.png",
    link: "/biznext/supply-chain",
  },
  {
    id: 6,
    title: "Sustainability Transformation - Blueprint for Lasting Impact",
    image: "/assets/biznextspotlight6.png",
    link: "/biznext/it-ot-convergence",
  },
];

const Biznextpagespotlight = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative bg-gradient-to-b pt-20 from-gray-900 via-gray-800 to-gray-900 text-white py-8 px-4">
      <h2 className="text-4xl font-semibold text-center mb-6">Spotlight</h2>

      {/* Scrollable Container */}
      <div className="flex mt-8 items-center">
        {/* Left Arrow */}
        <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600" onClick={() => scroll("left")}>
          <ChevronLeft size={24} />
        </button>

        {/* Cards */}
        <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x mx-2 md:mx-20">
          {spotlightTopics.map((topic) => (
            <div key={topic.id} className="relative min-w-full md:min-w-[400px] bg-gray-800 rounded-lg overflow-hidden shadow-lg snap-start">
              {/* Background Image */}
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${topic.image})` }}></div>
              <Link href={topic.link}>
              {/* Content */}
              <div className="p-4">
                <h1 className="">
                  <li>CASE STUDY</li>
                </h1>
                <h3 className="text-lg font-bold mt-2 hover:underline">{topic.title}</h3>
                
                {/* Link for Read More */}
                
                  <button className="flex items-center gap-2 text-yellow-400 mt-4 hover:underline">
                    <span>Read More</span>
                    <ChevronRight size={18} />
                  </button>
               
              </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600" onClick={() => scroll("right")}>
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Custom Scrollbar */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
};

export default Biznextpagespotlight;
