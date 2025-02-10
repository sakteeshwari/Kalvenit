import { useState } from "react";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="search-container flex gap-4">
      {/* Search Icon */}
      <img
  src="/assets/searchbox.png"
  className="w-7 h-7 mt-2 cursor-pointer"
  alt="Search"
  onClick={() => {
    console.log("Search Icon Clicked!"); // Debugging
    setIsSearchOpen(true);
  }}
/>

     

      {/* Search Popup */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setIsSearchOpen(false)} // Close popup on click
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full"
          >
            <span className="text-gray-600 text-xl">&times;</span>
          </button>

          {/* Search Bar */}
          <div className="w-full max-w-3xl px-4">
            <div className="flex items-center border border-gray-300 rounded-full p-2 shadow-sm">
              <input
                type="text"
                placeholder="To search, type and hit enter."
                className="flex-1 outline-none px-4 py-2 text-lg"
              />
              <button className="bg-purple-500 text-white px-4 py-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.607 0 7.5 7.5 0 0010.607 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="mt-8 text-center">
            <h2 className="text-lg font-bold text-gray-700 mb-4">
              Popular Searches
            </h2>
            <div className="grid grid-cols-3 gap-4 text-purple-500">
              <a href="#">S/4HANA</a>
              <a href="#">SAP Services</a>
              <a href="#">IoT & Embedded Systems</a>
              <a href="#">Cloud</a>
              <a href="#">Digitalization</a>
              <a href="#">Application Management Services</a>
              <a href="#">Artificial Intelligence</a>
              <a href="#">Data Analytics</a>
              <a href="#">Cyber Security Services</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
