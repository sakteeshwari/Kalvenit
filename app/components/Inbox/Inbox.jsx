"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import "./Inbox.css";

const Inbox = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 } // Trigger when 30% of the component is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className="bg-gray-500 p-5 py-5 flex items-center justify-center gap-14 lg:flex lg:justify-evenly">
            <div>
                <img src="/assets/inbox.png" className="w-24" alt="Inbox Icon" />
            </div>
            <div className="flex flex-col">
                <h1 className={`text-white transition-all duration-1000 ease-out transform ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}>
                    Stay connected to get the best of Kalven Software Solutions in your inbox
                </h1>
                <div className={`py-3 text-lg transition-all duration-1000 ease-out transform delay-200 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}>
                    <Link href="/contact" passHref>
                        <button className="relative flex items-center space-x-2 text-yellow-300 font-medium group hover:rounded-3xl hover:px-3 hover:py-1 transition-all duration-300 overflow-hidden">
                            <div className="absolute inset-0 w-0 overflow-hidden group-hover:w-full h-full bg-transparent border border-yellow-300 rounded-3xl transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>

                            <div className="flex justify-center items-center w-8 h-8 border border-yellow-300 rounded-full group-hover:hidden z-10">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                            <div className="hidden group-hover:block z-10">
                                <span>&rarr;</span>
                            </div>
                            <span className="z-10">Catch Up</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Inbox;
