import React, { useState } from "react";

const Careerspagehover = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const content = [
    {
      title: "Learn",
      subtitle: "Push the boundaries of your horizon everyday",
      description1:
        "<strong>Purposeful career learning curve:</strong> Capitalize on your opportunities with a slew of upskilling and niche technical programs, and apply them at your work.",
      description2:
        "<strong>Empowered intrapreneurship:</strong> Feel empowered to make a difference in any industry and have a clear voice in the organization.",
      description3:
        "<strong>The power of collaboration:</strong> We celebrate weaknesses at KALVEN as they are superpowers waiting to manifest themselves.",
    },
    {
      title: "Lead",
      subtitle: "Be the outlier out to change the world",
      description1:
        "<strong>Inclusive diversity:</strong> Regardless of who you were, you will thrive among outliers who come with a diverse set of skills and ideas.",
      description2:
        "<strong>Equal opportunity leadership programs:</strong> Women are actively empowered as leaders, regardless of being a fresher, mother, or a veteran returning to work.",
      description3:
        "<strong>Collective and strategic social change:</strong> The spirit of doing good in meaningful ways is woven into our culture through the KALVEN Social Welfare Foundation.",
    },
    {
      title: "Live/Leap",
      subtitle: "Live and breathe technology with its impact spanning generations",
      description1:
        "<strong>Question everything:</strong> You are constantly challenged to think outside the box so that you can have the freedom to succeed.",
      description2:
        "<strong>Real-world problem-solving:</strong> You will always find inspiration to build something new, as we see every little piece of technology that can solve the biggest problems in the real world.",
      description3:
        "<strong>True-gen impact:</strong> From keeping the planet green, ensuring medicines reach the furthest corners of the world, to assisting others in reaching the pinnacle of success, you will leave an indelible mark in the world.",
    },
  ];

  return (
    <div className="flex flex-col text-center text-white bg-sky-500 lg:flex-row lg:gap-5 space-y-8 lg:space-y-0 p-8">
      {content.map((item, index) => (
        <div
          key={index}
          className="relative group lg:flex-1 p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Title and Subtitle */}
          <div className="text-4xl font-bold transition-all duration-300">
            {item.title}
          </div>
          <div className="text-2xl mt-2">{item.subtitle}</div>

          {/* Show descriptions on hover */}
          {hoveredIndex === index && (
            <div className="mt-4 transition-all duration-300 text-lg">
              <div dangerouslySetInnerHTML={{ __html: item.description1 }} />
              <div className="w-8 h-1 bg-yellow-300 mx-auto my-3"></div> {/* Small Yellow Line */}
              
              <div dangerouslySetInnerHTML={{ __html: item.description2 }} />
              <div className="w-8 h-1 bg-yellow-300 mx-auto my-3"></div> {/* Small Yellow Line */}
              
              <div dangerouslySetInnerHTML={{ __html: item.description3 }} />
              <div className="w-8 h-1 bg-yellow-300 mx-auto my-3"></div> {/* Small Yellow Line */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Careerspagehover;
