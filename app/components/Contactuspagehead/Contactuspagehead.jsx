"use client";

export default function GlobalHeadquarters() {
  return (
    <div className="bg-white my-10  shadow-md border border-blue-300 rounded-lg p-8 max-w-4xl mx-4 lg:mx-auto flex flex-col md:flex-row md:items-center md:space-x-8">
      {/* Left Section */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-800">
          Global Headquarters<span className="text-red-500">.</span>
        </h2>
        <p className="text-gray-500 mt-2">Corporate Office</p>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-blue-50 p-6 rounded-lg text-gray-700">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
              alt="US Flag"
              className="w-full h-full rounded-full"
            />
          </div>
          <h3 className="text-lg font-semibold">United States</h3>
        </div>
        <p>7220 McCallum Blvd,</p>
        <p>Unit 1109</p>
        <p>Dallas 75252</p>

        <div className="mt-4">
          <h4 className="font-semibold">WhatsApp all employment verification requests to:</h4>
          <p className="text-purple-600">+1 3322012159</p>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold">Sales & Marketing phone:</h4>
          <p className="text-purple-600">+1 309-755-0433</p>
        </div>
      </div>
    </div>
  );
}
