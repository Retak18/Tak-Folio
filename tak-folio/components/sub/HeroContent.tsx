"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best project{" "}
            </span>
            experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Welcome i&apos;m
          <span className="inline-flex items-baseline">
            <Image
              src="/Tak_Image.webp"
              alt="Tarek image"
              width={100}
              height={100}
              className="mx-1 size-5 self-center rounded-full"
            />
            <span> Tarek </span>
          </span>
          <span>{' '}a Full Stack Software developer with experience in Website and
          Mobile. I did that Portfolio myself, check out my projects and skills.</span>
        </motion.p>
        
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-auto h-full flex justify-center items-center"
      >
        <Image
          priority={true}
          src="/mainIconsdark.webp"
          alt="work icons"
          height={500}
          width={500}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
