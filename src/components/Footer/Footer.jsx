import React from "react";
import "./Footer.css";
import fLogo from "../../../public/logo.png";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer my-12 mx-40 flex flex-col gap-7">
      <div className="footer-top flex justify-between">
        <div className="footer-top-left flex flex-col gap-2">
          <img src={fLogo} alt="" className="w-20" />
          <p className="text-xl max-w-[400px]">I'm Arnav Jain, software Developer from India.Excited to learn new more things and gain more experience.</p>
        </div>
        <div className="footer-top-right flex items-center gap-9">
          <div className="footer-email-input flex gap-7 py-4 px-9 rounded-[50px] pr-20  ">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your Email" className="outline-none border-none bg-transparent text-#a0a0a0 text-l"/>
          </div>
          <div className="footer-subscribe text-xl py-[15px] px-[50px] rounded-[50px] cursor-pointer ">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom flex justify-between text-lg">
        <p className="footer-bottom-left">© 2024 Arnav jain. All rights reserved.</p>
        <div className="footer-bottom-right flex gap-[50px] mb-[50px] ">
            <p>Term of services</p>
            <p>Privacy Poilicy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
