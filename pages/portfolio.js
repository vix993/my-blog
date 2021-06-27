import { useState, useContext, useEffect } from "react";

import Head from "next/head";

import { SiteView } from "../components/SiteView";
import { Skill } from "../components/Skill";
import { SkillsContext } from "../contexts/SkillsContext";

const skills = [
  "React",
  "Node",
  "Typescript",
  "Javascript",
  "Python",
  "Django",
  "Rust",
  "Frontend",
  "Backend",
  "TailwindCSS",
  "CSS",
  "HTML",
  "Algorithms",
];

export const websites = [
  {
    url: "https://proffys.vercel.app/",
    name: "Proffy",
    description: "A skill sharing platform. React, Node, TypeORM.",
    github: "https://github.com/vix993/FrontendForProffy",
    img: "/img/proffy.png",
    techs: [
      "React",
      "Node",
      "TypeORM",
      "Typescript",
      "Backend",
      "Frontend",
      "TailwindCSS",
      "CSS",
      "HTML",
    ],
  },
  {
    url: "https://letmeask-it.vercel.app/",
    name: "Let Me Ask",
    description:
      "A platform in which users can post their questions, for other users to answer or interact with user Q&A's",
    github: "https://github.com/vix993/letmeask",
    img: "/img/letmeask.png",
    techs: [
      "React",
      "Firebase",
      "Typescript",
      "Frontend",
      "Backend",
      "TailwindCSS",
      "CSS",
      "HTML",
    ],
  },
  {
    url: "https://consume-it.vercel.app/",
    name: "ConsumeIt",
    description: "An ecommerce interface.",
    github: "https://github.com/vix993/consume-it",
    img: "/img/consume-it.png",
    techs: [
      "React",
      "Next",
      "Frontend",
      "Typescript",
      "TailwindCSS",
      "CSS",
      "HTML",
    ],
  },
  {
    url: "https://h-appy.vercel.app/app",
    name: "hAppy",
    description: "A user updated map of Children Homes in London.",
    github: "https://github.com/vix993/hAppy",
    img: "/img/happy.png",
    techs: [
      "React",
      "Node",
      "TypeORM",
      "Typescript",
      "CSS",
      "HTML",
      "Frontend",
      "Backend",
    ],
  },
  {
    url: "https://cub3d.vercel.app/",
    name: "Cub3D",
    description:
      "A javascript implementation of the Raycasting algorithm as coined in Wolfenstein 3D. Arrow keys to move.",
    github: "https://github.com/vix993/cub3d",
    img: "/img/raycasting.png",
    techs: ["Javascript", "Algorithms"],
  },
  {
    url: "https://move-it-xp.vercel.app/",
    name: "Move It",
    description:
      "A platform in which users can segment their workflow and be provided with health based challenges.",
    github: "https://github.com/vix993/move-it",
    img: "/img/move-it.png",
    techs: ["React", "Typescript", "TailwindCSS", "CSS", "HTML", "Frontend"],
  },
  {
    url: "https://victorgamedev.netlify.app/",
    name: "Life Death's First Mission",
    description: "A Javascript endless scroller.",
    github: "https://github.com/vix993/Life-Death-s-First-Mission",
    img: "/img/life-death.png",
    techs: ["Javascript", "P5.js", "Game Development"],
  },
  {
    url: "http://rand-music-dev.herokuapp.com/",
    name: "RandMusic",
    description: "A platform to find random, unfiltered music.",
    github: "https://github.com/vix993/RandMusic",
    img: "/img/rand.png",
    techs: [
      "React",
      "Node",
      "TypeORM",
      "Typescript",
      "CSS",
      "HTML",
      "Frontend",
      "Backend",
    ],
  },
  {
    url: "https://project-lifeline.herokuapp.com/",
    name: "Project Lifeline",
    description:
      "An API for a Zombie Apocalypse survival and communications tool.",
    github: "https://github.com/vix993/project-lifeline",
    img: "/img/api.jpg",
    techs: ["Django", "REST", "Python", "Backend"],
  },
  // {
  //   url: "https://desvious-order.vercel.app/",
  //   name: "Desvious-Order",
  //   description: "My bands website.",
  //   github: "https://github.com/vix993/DesviousOrderSite",
  // },
  {
    url: "https://life-sort.vercel.app/",
    name: "Life-sort",
    description: "A task management app.",
    github: "https://github.com/vix993/Calendar_Scheduler_React",
    img: "/img/life-sort.png",
    techs: ["React", "Typescript", "CSS", "HTML", "Frontend"],
  },
  // {
  //   url: "https://afraidat27.netlify.app/",
  //   name: "Afraid at 21",
  //   description:
  //     "A short 2D platformer based on a single released by DesviousOrder.",
  //   github: "https://github.com/vix993/pong_with_rust",
  // },
  {
    url: "",
    name: "Pong with Rust",
    description: "A clone of Pong built using Rust and GGEZ.",
    github: "https://github.com/vix993/pong_with_rust",
    img: "/img/pong.png",
    techs: ["Rust", "GGEZ", "Game Developement"],
  },
];

export default function Portfolio() {
  const { filteredSkills } = useContext(SkillsContext);

  const [filteredProjects, setFilteredProjects] = useState(
    websites.filter((site) => {
      const isSkillRequired = site.techs.some((tech) =>
        filteredSkills.includes(tech)
      );
      return isSkillRequired;
    })
  );

  useEffect(() => {
    if (filteredSkills.length > 0) {
      setFilteredProjects(
        websites.filter((site) => {
          const isSkillRequired = site.techs.some((tech) =>
            filteredSkills.includes(tech)
          );
          return isSkillRequired;
        })
      );
    } else {
      setFilteredProjects(websites);
    }
  }, [filteredSkills]);

  return (
    <main className="flex flex-col gap-8">
      <Head>
        <title>Victor Nascimento | Portfolio</title>
      </Head>
      <section>
        <div className="text-7xl font-bold rounded-2xl p-6 bg-yellow-500 flex flex-col sm:flex-row">
          <h2 className="sm:border-r-8 px-4 border-yellow-100">Skills</h2>
          <section className="flex flex-row flex-wrap gap-2 px-3 mt-4 sm:mt-0">
            {skills.map((skill, i) => {
              return <Skill key={i} name={skill} />;
            })}
          </section>
        </div>
      </section>
      <section>
        <div className="text-5xl sm:text-7xl font-bold rounded-2xl p-6 bg-yellow-500 flex flex-col gap-4 items-center justify-center">
          <h2>Projects</h2>
          <div className="w w-2/3 h-2 bg-yellow-100"></div>
          <section className="w-full flex flex-col sm:flex-row flex-wrap gap-8">
            {filteredProjects.map((site) => {
              return <SiteView key={site.name} currentSite={site} />;
            })}
          </section>
        </div>
      </section>
    </main>
  );
}
