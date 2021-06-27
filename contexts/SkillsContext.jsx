import { createContext, useState } from "react";

export const SkillsContext = createContext({});

export const SkillsContextProvider = (props) => {
  const [filteredSkills, setFilteredSkills] = useState([]);

  const addFilteredSkill = (newFilter) => {
    setFilteredSkills([...filteredSkills, newFilter]);
  };

  const removeFilteredSkill = (skillToRemove) => {
    setFilteredSkills(
      filteredSkills.filter((skill) => {
        return skill !== skillToRemove;
      })
    );
  };

  return (
    <SkillsContext.Provider value={{ filteredSkills, addFilteredSkill, removeFilteredSkill }}>
      {props.children}
    </SkillsContext.Provider>
  );
};
