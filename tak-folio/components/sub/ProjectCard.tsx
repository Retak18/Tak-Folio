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
        <h5  className="mt-2 cursor cursor-pointer text-blue-300">{technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-background rounded-full"
                  >
                    {tech}
                  </span>
                ))}</h5>
      </div>
    </div>
  );
};

export default ProjectCard;
