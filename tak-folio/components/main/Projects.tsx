import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-100% max-w-3xs grid grid-cols-3 col-span-2 md:flex-row gap-10 px-10">
        <ProjectCard
          src="/CryptoDashboard.webp"
          title="Crypto Dashboard"
          description="Project made with friends, an application with log-in/ log-up made to log and see yours own cryptocurrencies."
          technologies={[ "Next Js", "Express", "Node Js", "React Js", "Redux"]}
        />
        <ProjectCard
          src="/MorningNews.webp"
          title="Morning News"
          description="A news application where you can read the news and you can see the category of the news, also you can search for which one you want, make favorite and the contrary."
          technologies={[ "React Js", "Next Js", "Express", "Node Js", "Nest Js", "Redux"]}
          />
        <ProjectCard
          src="/Kasa.webp"
          title="Kasa-Rent"
          description="Application of rental where to see differents properties, and differents picture of the rent by a carousel. "
          technologies= {["Next Js", "Express", "Node Js", "React Js", "Vite Js", "Router"]}          
          />
      </div>
    </div>
  );
};

export default Projects;
