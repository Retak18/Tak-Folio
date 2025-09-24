"use client";
import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="rotate-180 absolute top-[-42%] md:top-[-40%] lg:top-[-38%]  h-full w-full  z-[-2] object-cover lg:object-fill left-1/2 transform -translate-x-1/2"
        key="blackhole-video"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
