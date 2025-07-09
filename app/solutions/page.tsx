"use client";
import React from "react";
import Solutionspageimg from "../components/Solutionspageimg/Solutionspageimg";
import Solutionspagecontent from "../components/Solutionspagecontent/Solutionspagecontent";
import Solutionstrending from "../components/Solutionstrending/Solutionstrending";
import Solutionsperspectives from "../components/Solutionsperspectives/Solutionsperspectives";

const Solutions = () => {
  return (
    <div>
      {/* Ensure Solutionspageimg accepts an imgSrc prop */}
      <Solutionspageimg imgSrc="/assets/solutionspageimg.png" />
      <Solutionspagecontent />
      <Solutionstrending />
      <Solutionsperspectives />
    </div>
  );
};

export default Solutions;
