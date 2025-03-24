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
        <p className="mt-2 text-gray-300">{description}</p>
        <h5  className="mt-2 cursor cursor-pointer text-blue-300">Technologies :</h5>
        <div className="flex flex-wrap gap-2 mt-4">{technologies.map((tech, i) => (
                  <span
                    key={i}
                    className=" text-xs rounded-full px-3 py-1 bg-blue-500 text-white"
                  >
                    {tech}
                  </span>
                ))}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
