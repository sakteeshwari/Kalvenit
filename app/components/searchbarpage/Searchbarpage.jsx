import { useState } from "react";
import { useRouter } from "next/navigation"; // Next.js router

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const router = useRouter();

  // Popular search items
  const popularSearches = [
    "S/4HANA",
    "SAP Services",
    "IoT & Embedded Systems",
    "Cloud",
    "Digitalization",
    "Application Management Services",
    "Artificial Intelligence",
    "Data Analytics",
    "Cyber Security Services",
  ];

  // Function to handle search query change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter results dynamically
    if (query.trim()) {
      const filtered = popularSearches.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(filtered);
    } else {
      setFilteredResults([]);
    }
  };

  // Function to handle search navigation
  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <div className="search-container flex gap-4 relative">
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
          <div className="w-full max-w-3xl px-4 relative">
            <div className="flex items-center border border-gray-300 rounded-full p-2 shadow-sm relative">
              <input
                type="text"
                placeholder="To search, type and hit enter."
                className="flex-1 outline-none px-4 py-2 text-lg"
                value={searchQuery}
                onChange={handleSearchChange}
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

            {/* Dropdown for filtered search results */}
            {filteredResults.length > 0 && (
              <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                {filteredResults.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSearchQuery(item);
                      handleSearch();
                    }}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Popular Searches (if no filtering is applied) */}
          {!searchQuery && (
            <div className="mt-8 text-center">
              <h2 className="text-lg font-bold text-gray-700 mb-4">
                Popular Searches
              </h2>
              <div className="grid grid-cols-3 gap-4 text-purple-500">
                {popularSearches.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSearchQuery(item);
                      handleSearch();
                    }}
                    className="cursor-pointer text-purple-500 hover:underline"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
