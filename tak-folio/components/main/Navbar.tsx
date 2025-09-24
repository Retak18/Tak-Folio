import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[5px]">
        <div className="flex flex-row items-center">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >

          <span className="font-bold m-3 hidden md:block text-gray-300 flex-col ">
            Tak
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Dev</p>
          </span>
        
        </a>
          <a href="mailto:tarek_lamarti@live.fr" className="font-bold mx-3 cursor-pointer flex flex-col justify-center items-center  text-gray-300">
            <Image 
            src="https://api.iconify.design/marketeq:envelope.svg"
            alt="Email"
            width={35}
            height={35}
            className="hover:animate-pulse md:width-[20px] md:height-auto "
            />
            <p className="hidden md:block ">
            tarek_lamarti@live.fr
            </p>
          </a>
        </div>

        <div className=" flex md:w-[400px] lg:w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200 ">
            <a href="#about-me" className="cursor-pointer hover:animate-pulse active:animate-ping">
              <span className=" hidden sm:inline mr-1"> About me </span> 
              <span className=" inline sm:hidden mr-1"> Me </span>
            </a>
            <a href="#skills" className="cursor-pointer hover:animate-pulse active:animate-ping mr-1">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:animate-pulse active:animate-ping">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 ">
          {Socials.map((social) => (
          <a href={social.link} target="_blank" rel="noopener noreferrer" key={social.name} className="bg-slate-200 rounded-md ">
          <Image
              src={social.src}
              alt={social.name}
              width={35}
              height={35}
              className=" cursor-pointer {/*active:animate-spin */} hover:animate-pulse border-none"
            /></a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
