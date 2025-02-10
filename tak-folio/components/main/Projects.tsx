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
          description= "Project made with friends, an application with log-in/ log-up made to log and see yours own cryptocurrencies."
          link="https://github.com/Retak18/CryptoDashboard-frontend.git"
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link="https://github.com/Retak18/CryptoDashboard-frontend.git"
          />
        <ProjectCard
          src="/MorningNews.webp"
          title="Morning News"
          description="A news application where you can read the news and you can see the category of the news, also you can search for which one you want, make favorite and the contrary."
          link="https://github.com/Retak18/CryptoDashboard-frontend.git"
          />
        <ProjectCard
          src="/Kasa.webp"
          title="Kasa-Rent"
          description="Application of rental where to see differents properties, and differents picture of the rent by a carousel. "
          link="https://github.com/Retak18/CryptoDashboard-frontend.git"
          />
      </div>
    </div>
  );
};

export default Projects;
