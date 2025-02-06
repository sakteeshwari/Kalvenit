import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/assets/biznextpageimg2.jpg",
    title: "Innovate & Grow",
    description: "Empowering businesses with cutting-edge technology solutions.",
  },
  {
    src: "/assets/biznextpageimg1.png",
    title: "Strategic Solutions",
    description: "Tailored strategies to drive business success and efficiency.",
  },
  {
    src: "/assets/biznextpageimg3.png",
    title: "Future-Ready Business",
    description: "Harness AI & automation for a smarter, scalable enterprise.",
  },
  {
    src: "/assets/biznextpageimg4.jpg",
    title: "Global Expansion",
    description: "Expand your reach and scale new heights in the digital economy.",
  },
];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [index]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
    sliderRef.current.scrollTo({
      left: sliderRef.current.clientWidth * ((index + 1) % slides.length),
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    sliderRef.current.scrollTo({
      left: sliderRef.current.clientWidth * ((index - 1 + slides.length) % slides.length),
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full max-w-screen-2xl mx-auto">
      <div ref={sliderRef} className="flex overflow-hidden w-full relative">
        {slides.map((slide, i) => (
          <div key={i} className="relative w-full flex-shrink-0">
            <img
              src={slide.src}
              className="w-full h-[300px] md:h-[400px] lg:h-[600px] object-cover"
              alt={`Slide ${i + 1}`}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-6">
              <h2 className="text-xl md:text-3xl lg:text-7xl font-bold">{slide.title}</h2>
              <p className="text-sm w-[70%] lg:mt-6 leading-relaxed  lg:w-[100%] md:text-lg lg:text-xl mt-2 max-w-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white"
        onClick={handlePrev}
      >
        <ChevronLeft size={30} />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full text-white"
        onClick={handleNext}
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
}
