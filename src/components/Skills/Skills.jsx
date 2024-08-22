import React from "react";
import "./Skills.css";
import google from "../../assets/google.png";
import mern from "../../assets/Mern.png";

import skills from "../../data/skills.json";

const Skills = () => {
  return (
    <div className="container ml-[3%] mt-24 h-screen w-screen" id="skills">
      <h2 className="title bg-[linear-gradient(270deg,#DF8908_500%,#B415FF_0%)] bg-clip-text text-3xl font-bold">
        Skills
      </h2>
      <div className="content mt-4 flex justify-evenly">
        <div className="skills flex w-[35%] flex-wrap gap-9 pl-[3%]">
          {skills.map((skill, id) => {
            return (
              <div key={id} className="skill flex flex-col items-center gap-3">
                <div className="skill-image-container">
                  <img
                    src={skill.imageSrc}
                    alt={skill.title}
                    className="w-20"
                  />
                </div>
                <p className="text-2xl font-medium">{skill.title}</p>
              </div>
            );
          })}
        </div>
        <div className="certificate-container flex w-[45%] flex-col gap-10">
          <div className="certificate">
            <img src={google} alt="google" className="h-32" />
            <div className="certi-content">
              <h2>Google Cloud Computing</h2>
              <p>
                Certified in Google Cloud Computing Foundations, with a solid
                grasp of GCP services and cloud basics. Skilled in applying
                foundational cloud tools to create efficient and secure
                solutions.
              </p>
            </div>
            <button>
              <a href="/googleCertifiate.pdf" target="_blank">
                View Certificate
              </a>
            </button>
          </div>
          <div className="certificate">
            <img src={mern} alt="google" className="h-28" />
            <div className="certi-content">
              <h2>MERN Stack</h2>
              <p>
                Certified in the MERN stack, skilled in building full-stack web
                applications using MongoDB, Express.js, React, and Node.js.
                Proficient in creating responsive UIs and efficient server-side
                logic.
              </p>
            </div>

            <button>
              <a href="/MERNcertificate.pdf" target="_blank">
                View Certificate
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
