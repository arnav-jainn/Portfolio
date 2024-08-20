import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar mx-[170px] my-[20px] flex items-center justify-between">
      <img src="./logo.png" alt="Arnav jain" className="w-20" />

      <ul className="nav-menu flex items-center gap-[60px] text-xl">
        <li>Home</li>
        <li>About Me</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>

      <div className="nav-connect cursor-pointer rounded-[50px] bg-[linear-gradient(267deg,#DA7C25_0.36%,#B923E1_102.06%)] px-[40px] py-[20px]">
        Connect With Me
      </div>
    </div>
  );
};

export default Navbar;
