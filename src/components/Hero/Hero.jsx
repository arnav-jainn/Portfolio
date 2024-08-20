import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.png";

const Hero = () => {
  return (
    <div className="hero flex flex-col items-center gap-9">
      <img src={profile} alt="pic" className=" img mt-24 max-h-64" />
      <h1 className="w-[70%] text-center text-7xl font-semibold">
        <span className="bg-[linear-gradient(270deg,#DF8908_10%,#B415FF_100%)] bg-clip-text">
          I'm Arnav Jain,
        </span>
        Software developer Based in India.
      </h1>
      {/* <p className="w-[50%] text-center text-2xl leading-10">I am a frontend developer from Delhi,India</p> */}
      <div className="hero-action mb-12 flex items-center gap-7 text-2xl font-medium">
        <div className="hero-connect hover:border-#fff cursor-pointer rounded-[50px] bg-[linear-gradient(264deg,#DF8908_-5.09%,#B415FF_106.28%)] px-16 py-5 hover:border hover:border-2">
          Contact Me
        </div>
        <div className="hero-resume border-#fff cursor-pointer rounded-[50px] border px-16 py-5 hover:border-purple-800">
          My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
