import { useState } from "react";
import { useRouter } from "next/navigation"; // For navigation in Next.js
import { useEffect } from "react";
export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter(); // Next.js router

  useEffect(() => {
    console.log(router.pathname); // Ensure it's running inside useEffect
  }, [router]);
  // Function to handle search
  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <div className="search-container flex gap-4">
      {/* Search Icon */}
      <img
        src="/assets/searchbox.png"
        className="w-7 h-7 mt-2 cursor-pointer"
        alt="Search"
        onClick={() => setIsSearchOpen(true)}
      />

      {/* Search Popup */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setIsSearchOpen(false)}
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <button
                className="bg-purple-500 text-white px-4 py-2 rounded-full"
                onClick={handleSearch}
              >
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
              {[
                "S/4HANA",
                "SAP Services",
                "IoT & Embedded Systems",
                "Cloud",
                "Digitalization",
                "Application Management Services",
                "Artificial Intelligence",
                "Data Analytics",
                "Cyber Security Services",
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => router.push(`/search?query=${encodeURIComponent(item)}`)}
                  className="cursor-pointer text-purple-500 hover:underline"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
