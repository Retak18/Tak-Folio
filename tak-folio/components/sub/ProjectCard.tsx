import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  technologies:string[];
}

const ProjectCard = ({ src, title, description, technologies }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        {/* <h5  className="mt-2 text-blue-300">Technologies used :</h5> */}
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies && technologies.map((tech, i) => (
            <span
            key={i}
            className=" text-xs rounded-full px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-800 text-white"
            >
                    {tech}
                  </span>
                ))}
        </div>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
