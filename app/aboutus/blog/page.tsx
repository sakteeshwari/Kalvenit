"use client";
import React from "react";
import { useState } from "react";


const blogs = [
  {
    id: 1,
    title: "Digital Transformation in Enterprises",
    description: "Explore how digital transformation is shaping businesses worldwide.",
    image: "/assets/digitalization.png",
  },
  {
    id: 2,
    title: "AI and Automation: The Future",
    description: "Understanding the impact of AI and automation in various industries.",
    image: "/assets/aiservices.png",
  },
  {
    id: 3,
    title: "Cloud Computing Trends",
    description: "Discover the latest trends in cloud computing and how they affect IT strategies.",
    image: "/assets/cloud.png",
  },
  {
    id: 4,
    title: "Cybersecurity in the Modern Age",
    description: "How companies are strengthening their cybersecurity defenses.",
    image: "/assets/cyber.png",
  },
  {
    id: 5,
    title: "The Rise of Edge Computing",
    description: "Understanding edge computing and its impact on data processing.",
    image: "/assets/embeddedsys.png",
  },
  {
    id: 6,
    title: "Big Data Analytics: Unlocking Insights",
    description: "How big data is transforming business decision-making.",
    image: "/assets/bigdataservices.png",
  },
  {
    id: 7,
    title: "The Role of Blockchain Beyond Cryptocurrency",
    description: "Exploring blockchain's use cases in supply chain, security, and more.",
    image: "/assets/blockchain.png",
  },
  {
    id: 8,
    title: "Future of Remote Work Technology",
    description: "Advancements in remote work tools and digital collaboration.",
    image: "/assets/futureservices.png",
  },
  {
    id: 9,
    title: "Machine Learning in Healthcare",
    description: "How AI-driven technologies are revolutionizing healthcare.",
    image: "/assets/intelligence.png",
  },
  {
    id: 10,
    title: "Sustainable IT Practices",
    description: "How the tech industry is working toward sustainability.",
    image: "/assets/sustain.png",
  },
];


const DigitalizationPage = () => {
  const [search, setSearch] = useState("");

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );
  return (

    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4 text-purple-600">KALVEN Blog</h1>
      <p className="text-gray-600 text-center mb-6">Latest insights from the industry</p>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" outline-none border p-2 rounded-md w-1/2"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:px-32">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600">{blog.description}</p>
              <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};


export default DigitalizationPage;
