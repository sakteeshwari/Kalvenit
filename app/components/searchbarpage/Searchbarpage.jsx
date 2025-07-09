"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar({ menuItems }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const router = useRouter();

  // Popular searches
  const popularSearches = [
    { label: "NextGen AMS", href: "/services/nextgen-ams" },
    { label: "S/4HANA", href: "/coes/sap/sap-s4hana" },
    { label: "SAP Services", href: "/coes/sap" },
    { label: "Cloud", href: "/services/cloud-infrastructure" },
    { label: "Cyber Security", href: "/services/cyber-security" },
    { label: "Artificial Intelligence", href: "/services/intelligence" },
    { label: "Data Analytics", href: "/services/digitalization/data-analytics" },
    { label: "Internet of Things (IoT)", href: "/services/digitalization/iot" },
    { label: "Blockchain Technology", href: "/coes/block-chain" },
    { label: "Pega", href: "/coes/pega" },
    { label: "Tricentis", href: "/coes/tricentis" },
    { label: "Workday", href: "/coes/workday" },

  ];

  // Flatten menu for searching and remove duplicates
  const allSearchableItems = Array.from(
    new Map(
      [...menuItems, ...popularSearches].flatMap((item) =>
        item.subItems ? [item, ...item.subItems] : item
      ).map((item) => [item.href, item])
    ).values()
  );

  // Handle input change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredResults(
      query ? allSearchableItems.filter((item) => item.label.toLowerCase().includes(query)) : []
    );
    setSelectedIndex(-1); // Reset selection
  };

  // Handle search action
  const handleSearch = (href) => {
    if (href) {
      router.push(href);
    } else if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
    setIsSearchOpen(false);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => Math.min(prev + 1, filteredResults.length - 1));
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      handleSearch(filteredResults[selectedIndex].href);
    }
  };

  return (
    <div className="relative flex gap-4">
      <img
        src="/assets/searchbox.png"
        className="w-7 h-7 mt-2 cursor-pointer"
        alt="Search"
        onClick={() => setIsSearchOpen(true)}
      />

      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full"
          >
            <span className="text-gray-600 text-xl">&times;</span>
          </button>

          {/* Search Box */}
          <div className="w-full max-w-3xl px-4 relative">
            <div className="flex items-center border border-gray-300 rounded-full p-2 shadow-sm relative">
              <input
                type="text"
                placeholder="To search, type and hit enter."
                className="flex-1 outline-none px-4 lg:py-2 text-lg"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
                autoFocus
              />
              <button className="bg-purple-500 text-white px-4 py-2 rounded-full" onClick={() => handleSearch()}>
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

            {/* Search Results */}
            {filteredResults.length > 0 && (
              <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                {filteredResults.map((item, index) => (
                  <div
                    key={`${item.href}-${index}`}
                    onClick={() => handleSearch(item.href)}
                    className={`cursor-pointer px-4 py-2 ${index === selectedIndex ? "bg-gray-200" : "hover:bg-gray-100"} text-gray-700`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Popular Searches */}
          <div className="mt-8 text-center">
            <h2 className="text-lg font-bold text-gray-700 mb-4">Popular Searches</h2>
            <div className="grid grid-cols-3 gap-4">
              {popularSearches.map((item, index) => (
                <button
                  key={`${item.href}-${index}`}
                  onClick={() => handleSearch(item.href)}
                  className="text-purple-500 hover:underline"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}