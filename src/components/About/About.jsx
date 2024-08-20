import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile from "../../assets/PIC.png";
import { FaArrowPointer } from "react-icons/fa6";
import { FaServer } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";


const About = () => {
  return (
    <div className="about mx-20 my-20 flex flex-col items-center justify-center gap-10 p-16">
      <div className="about-title relative">
        <h1 className="px-7 py-0 text-6xl font-semibold">About me</h1>
        <img
          src={theme_pattern}
          alt=""
          className="absolute bottom-0 right-0 -z-10 h-20"
        />
      </div>
      <div className="about-para flex flex-col gap-5 text-xl font-medium">
            <p>
              Creative and forward-thinking IT student with a strong foundation
              in programming, web development, and problem-solving. Proactive
              and eager to apply skills in real-world projects and collaborative
              environments.
            </p>
            <p>
              Proficient in C++, ReactJs, Tailwind CSS, and Data Structures and
              Algorithms.
            </p>
          </div>
      <div className="about-sections flex gap-20">
        <div className="about-left">
          <img src={profile} alt="" className="h-[600px] w-[600px] p-10" />
        </div>
        <div className="about-right flex flex-col gap-20 justify-center">
          <ul className="about-items flex flex-col gap-10">
            <li className="about-item">
              <FaArrowPointer className="text-5xl bg-[linear-gradient(270deg,#DF8908_10%,#B415FF_100%)] bg-clip-text" />
              <div className="about-item-text">
                <h3>Frontend Developer</h3>
                <p>
                  I am a front end developer with experience in building
                  responsive and optimized sites.
                </p>
              </div>
            </li>
            <li className="about-item">
              <FaServer className="text-5xl" />
              <div className="about-item-text">
                <h3>Backend Developer</h3>
                <p>
                  I have experience developing fast and optimized back-end
                  systems and working with APIs.
                </p>
              </div>
            </li>
            <li className="about-item">
              <FaFigma className="text-5xl" />
              <div className="about-item-text">
                <h3>UI/UX Designer</h3>
                <p>
                  I have designed multiple landing pages and created the
                  wireframe for many websites.
                </p>
              </div>
            </li>
          </ul>

          {/* <div className="about-skills flex flex-col gap-5">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next Js</p>
              <hr style={{ width: "20%" }} />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
