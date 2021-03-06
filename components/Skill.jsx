import { useContext } from "react";
import { SkillsContext } from "../contexts/SkillsContext";

export const Skill = ({ name }) => {
  const { addFilteredSkill, filteredSkills, removeFilteredSkill } =
    useContext(SkillsContext);

  const selectedSkill = filteredSkills.includes(name)
    ? "border bg-yellow-100"
    : "bg-yellow-500 border border-yellow-50 text-yellow-50";

  return (
    <button
      className={`rounded-lg text-sm max-w-xs p-2 flex justify-center items-center h-8 hover:opacity-70 transition duration-150 ${selectedSkill}`}
      onClick={() => {
        if (filteredSkills.includes(name)) removeFilteredSkill(name);
        else addFilteredSkill(name);
      }}
    >
      {name}
    </button>
  );
};
