import React from "react";
import "./Skills.css";

import skills from "../../data/skills.json";

const Skills = () => {
  return (
    <div>
      <h2>Skills</h2>
      <div>
        <div>
          {skills.map((skill, id) => {
            return<div key={id}>
                <div>
                    <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>

            </div>;
          })}
        </div>
        <ul></ul>
      </div>
    </div>
  );
};

export default Skills;
