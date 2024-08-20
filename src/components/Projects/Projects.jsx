import React from "react";
import "./Projects.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";

const Projects = () => {
  return (
    <div className="myWork mx-40 my-20 flex flex-col items-center justify-center gap-20">
      <div className="myWork-title relative">
        <h1 className="px-7 py-0 text-5xl font-semibold">My Latest Work</h1>
        <img
          src={theme_pattern}
          alt=""
          className="absolute bottom-0 right-0 -z-10 h-14"
        />
      </div>
      <div className="myWork-container flex flex-wrap gap-7 items-center justify-center">
        {mywork_data.map((work, index) => {
          return (
            <div className="max-w-[30%] flex flex-col gap-4">
              <img
                key={index}
                src={work.w_img}
                alt=""
                className=" cursor-pointer rounded-xl ease-in-out"
              />
              <div className="flex justify-evenly">
              <button className="btn">Code</button>
              <button className="btn">Website</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
