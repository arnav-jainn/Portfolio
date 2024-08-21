import React from "react";
import "./Contact.css";
import mail from "../../assets/mail_icon.svg";
import location from "../../assets/location_icon.svg";
import call from "../../assets/call_icon.svg";

const Contact = () => {
  return (
    <div className="contact flex flex-col items-center justify-center gap-16 mx-20 pb-24 -mt-15 " id="contact">
      <div className="contact-title">
        <h1 className="text-5xl font-semibold ">Get in touch</h1>
      </div>
      <div className="contact-section flex justify-between gap-36">
        <div className="contact-left flex flex-col gap-8">
          <h1 className="text-4xl font-semibold bg-[linear-gradient(270deg,#DF8908_80%,#B415FF_100%)] ">Let's talk</h1>
          <p>
            I'm currently working on new projects, feel free to ask anything and
            contact anytime.😄
          </p>
          <div className="contact-details flex flex-col gap-8 text-#D8D8D8 text-xl">
            <div className="contact-detail">
              <img src={mail} alt="" />
              <p>arnavjainn02@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="" />
              <p>+91 9717486583</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="" />
              <p>Delhi, India</p>
            </div>
          </div>
        </div>
        <form className="contact-right flex flex-col items-start gap-5">
            <label htmlFor="name">Your Name</label>
            <input type="text" placeholder="Enter Your Name" name="name" />

            <label htmlFor="email">Your Email</label>
            <input type="email" placeholder="Enter your Email" name="email" />

            <label htmlFor="msg">Write your message</label>
            <textarea name="msg" rows='5' placeholder="Enter your Message"></textarea>

            <button type="submit" className="contact-submit">Submit Now</button>

        </form>
      </div>
    </div>
  );
};

export default Contact;
