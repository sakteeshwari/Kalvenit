import React from "react";

const Careerspagefamily = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-6 py-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black">
          The KALVEN Family <span className="text-red-500">.</span>
        </h1>
        <p className="text-xl text-green-600 mt-4">Make Your Mark!</p>
      </header>

      {/* Image Section */}
      <div className="flex justify-center mb-12">
        <img
          src="/assets/careerpagefamily.png"
          alt="KALVEN Family"
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Values Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {[
          { title: "Valuable", text: "We expand opportunities that drive individual, team and organizational value." },
          { title: "Frugal", text: "We do more with less by constantly obsessing over consistency, quality and productivity." },
          { title: "Agile", text: "We build strategic capability that helps drive Next-Gen impact continuously." },
          { title: "Purposeful", text: "Our purpose drives us beyond technological disruptions of the future." },
        ].map((item, index) => (
          <div
            key={index}
            className="border-2 border-blue-400 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-bold text-blue-600 mb-4">{item.title}</h2>
            <p className="text-gray-700">{item.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Careerspagefamily;
