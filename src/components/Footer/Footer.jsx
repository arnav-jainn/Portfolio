import React from "react";
import "./Footer.css";
import fLogo from "../../../public/logo.png";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer mx-40 my-12 flex flex-col gap-7">
      <div className="footer-top flex justify-between">
        <div className="footer-top-left flex flex-col gap-2">
          <a href="/">
            <img src={fLogo} alt="" className="w-20" />
          </a>
          <p className="max-w-[400px] text-xl">
            I'm Arnav Jain, software Developer from India.Excited to learn new
            more things and gain more experience.
          </p>
        </div>
        <div className="footer-top-right flex items-center gap-9">
          <div className="footer-email-input flex gap-7 rounded-[50px] px-9 py-4 pr-20">
            <img src={user_icon} alt="" />
            <input
              type="email"
              placeholder="Enter your Email"
              className="text-#a0a0a0 text-l border-none bg-transparent outline-none"
            />
          </div>
          <div className="footer-subscribe cursor-pointer rounded-[50px] px-[50px] py-[15px] text-xl">
            Subscribe
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom flex justify-between text-lg">
        <p className="footer-bottom-left">
          © 2024 Arnav jain. All rights reserved.
        </p>
        <div className="footer-bottom-right mb-[50px] flex gap-[50px]">
          <p>Term of services</p>
          <p>Privacy Poilicy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
