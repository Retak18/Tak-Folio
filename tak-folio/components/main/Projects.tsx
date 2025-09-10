import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center  py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-100% max-w-3xs grid grid-cols-1 md:grid-cols-3 col-span-2 md:flex-row gap-10 px-10">
        <ProjectCard
          src="/CryptoDashboard.webp"
          title="Crypto Dashboard"
          description="Project made with friends, an application with log-in/ log-up made to log and see yours own cryptocurrencies. Update of your portfolio at each connection, graphic and a visual of the evolution in the time"
          technologies={[ "Next Js", "Express", "Node Js", "React Js", "Redux"]}
        />
        <ProjectCard
          src="/MorningNews.webp"
          title="Morning News"
          description="A news application where you can read the news and you can see the category of the news also, you can search for which one you want, make favorite and block what you dislike."
          technologies={[ "React Js", "Next Js", "Express", "Node Js", "Nest Js", "Redux"]}
          />
        <ProjectCard
          src="/Miniamaker.webp"
          title="Miniamaker"
          description="An application with restriction if you are not subscribed for offer your services,or find somebody for make a service, or if your are an agent looking for a freelancer."
          technologies={[ "PHP", "Symfony", "Composer", "Yaml", "Stripe"]}
          />
        <ProjectCard
          src="/Kasa.webp"
          title="Kasa-Rent"
          description="Application of rental where to see different properties, and different pictures of the rent by a carousel. "
          technologies= {["Next Js", "Express", "Node Js", "React Js", "Vite Js", "Router"]}          
          />
          <ProjectCard
          src="/Libra.webp"
          title="LibraNova"
          description="It's a team work project, we had in one week to make an application for a library, where you can subscribe for read books, and we had to protect the read of the books, make a follow of rent, and users."
          technologies={[ "PHP", "Symfony", "Composer", "Yaml"]}
          />
        <ProjectCard
          src="/Tak-Expo.webp"
          title="Tak-Expo"
          description="My first folio with an accordion for show the projects"
          technologies= {[ "Tailwind Css","Typescript", "Express", "React Js","Next Js"]}          
          />
        <ProjectCard
          src="/TakCook.webp"
          title="Tak-Cook"
          description="Where do you go for see how to cook like a chief?! On Tak Cook! you can see different recipes of different countries, make favorites and add recipes yourself. It was an application we had to make only with CSS no framework or other tools to help"
          technologies= {["Mongo DB", "Express", "Node Js", "React Js", "Router","Next Js"]}          
          />
      </div>
    </div>
  );
};

export default Projects;
