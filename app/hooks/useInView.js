
"use client"

import { useState, useEffect, useRef } from "react";



const useInView = (threshold = 0.5) => {
  // Create a ref to attach to the element
  const elementRef = useRef(null);

  // State to track if the element is in view or not
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Callback function to execute when the element is in view or not
    const handleIntersection = ([entry]) => {
      // Set the state based on whether the element is in view or not
      setInView(entry.isIntersecting);
    };

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(handleIntersection, {
      threshold, // Percentage of visibility to trigger the callback (default is 50%)
    });

    // Start observing the element when it's mounted
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Clean up the observer when the component is unmounted
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]); // Re-run effect if threshold changes

  // Return the ref and inView state
  return [elementRef, inView];
};

export default useInView;
