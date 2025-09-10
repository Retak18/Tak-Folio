import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          {/* <Image
            src="/Tak_peluche.jpg"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-spin rounded-full"
          /> */}

          <span className="font-bold m-3 hidden md:block text-gray-300 flex-col ">
            Tak
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Dev</p>
          </span>
        
        </a>
          <a href="mailto:tarek_lamarti@live.fr" className="font-bold ml-[10px] cursor-pointer flex flex-col justify-center items-center  text-gray-300">
            <span>
              ✉️ 
            </span>
            <p className="hidden md:block ">
            tarek_lamarti@live.fr
            </p>
          </a>

        <div className=" flex md:w-[400px] lg:w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200 ">
            <a href="#about-me" className="cursor-pointer hover:animate-pulse">
              <p className=" hidden sm:block mr-1"> About me </p> 
              <p className=" block sm:hidden mr-1"> Me </p>
            </a>
            <a href="#skills" className="cursor-pointer hover:animate-ping mr-1">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:animate-bounce">
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
              width={40}
              height={40}
              className=" cursor-pointer {/*active:animate-spin */} hover:animate-pulse "
            /></a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
