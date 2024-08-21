import React, { useState } from "react";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <>
      <div className="navbar mx-[170px] my-[20px] flex items-center justify-between">
        <img src="./logo.png" alt="Arnav jain" className="w-20" />

        <ul className="nav-menu flex items-center gap-[60px] text-xl">
          <li>
            <AnchorLink className="anchor-link" href="#home">
              <p onClick={() => setMenu("home")}>Home</p>
            </AnchorLink>
            {menu === "home" ? <img src={underline} /> : <></>}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={100} href="#about">
              <p onClick={() => setMenu("about")}>About Me</p>
            </AnchorLink>
            {menu === "about" ? <img src={underline} /> : <></>}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={100} href="#skills">
              <p onClick={() => setMenu("skills")}>Skills</p>
            </AnchorLink>
            {menu === "skills" ? <img src={underline} /> : <></>}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={100} href="#projects">
              <p onClick={() => setMenu("projects")}>Projects</p>
            </AnchorLink>
            {menu === "projects" ? <img src={underline} /> : <></>}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={100} href="#contact">
              <p onClick={() => setMenu("contact")}>Contact</p>
            </AnchorLink>
            {menu === "contact" ? <img src={underline} /> : <></>}
          </li>
        </ul>

        <div className="nav-connect cursor-pointer rounded-[50px] bg-[linear-gradient(267deg,#DA7C25_0.36%,#B923E1_102.06%)] px-[40px] py-[20px]">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
