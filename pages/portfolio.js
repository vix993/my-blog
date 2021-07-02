import { useState, useContext, useEffect } from "react";

import Head from "next/head";

import { SiteView } from "../components/SiteView";
import { Skill } from "../components/Skill";
import { SkillsContext } from "../contexts/SkillsContext";

import { skills, websites } from "../lib/portfolioData";

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
      <section className="py-2">
        <div className="text-5xl sm:text-7xl font-bold rounded-2xl p-6 bg-yellow-500 flex flex-col sm:flex-row">
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
