import Image from "next/image";

const businessOutcomes = [
  {
    image: "/assets/nextgen1.png", // Replace with actual image path
    text: "Committed YoY cost reductions",
  },
  {
    image: "/assets/nextgen2.png", 
    text: "Realize enhanced value beyond cost savings",
  },
  {
    image: "/assets/nextgen3.png", 
    text: "Tools and accelerators for digitization and automation",
  },
  {
    image: "/assets/nextgen4.png", 
    text: "Improve end user satisfaction",
  },
  {
    image: "/assets/nextgen5.png", 
    text: "Single point of accountability from sales to delivery",
  },
];

export default function BusinessOutcomes() {
  return (
    <section className="px-10 py-16 bg-white">
      <h2 className="text-4xl font-bold text-center">
        Business Outcomes We Deliver<span className="text-red-500">.</span>
      </h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {businessOutcomes.map((item, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg">
            <Image
              src={item.image}
              alt="Outcome"
              width={400}
              height={500}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-50 flex items-end p-4">
              <p className="text-white text-sm">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-3xl lg:text-5xl lg:mt-14 mt-6 ">Comprehensive service catalog <span className="text-red-500 font-bold">.</span></h1>
        <img className="mt-6 lg:mt-14" src="/assets/sharedams.png" alt="" />
      </div>
     
    </section>
  );
}
