import React from "react";
import "./Contact.css";
import mail from "../../assets/mail_icon.svg";
import location from "../../assets/location_icon.svg";
import call from "../../assets/call_icon.svg";

const Contact = () => {


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6a410a1a-48ff-44ce-b2a5-9a4e9d182268");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
      alert("Sent successfully");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };  

  return (
    <div
      className="contact -mt-15 mx-20 flex h-screen flex-col items-center justify-center gap-16 py-16"
      id="contact"
    >
      <div className="contact-title">
        <h1 className="text-5xl font-semibold">Get in touch</h1>
      </div>
      <div className="contact-section flex justify-between gap-36">
        <div className="contact-left flex flex-col gap-8">
          <h1 className="bg-[linear-gradient(270deg,#DF8908_80%,#B415FF_100%)] text-4xl font-semibold">
            Let's talk
          </h1>
          <p>
            I'm currently working on new projects, feel free to ask anything and
            contact anytime.😄
          </p>
          <div className="contact-details text-#D8D8D8 flex flex-col gap-8 text-xl">
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
        <form
          onSubmit={onSubmit}
          className="contact-right flex flex-col items-start gap-5"
        >
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" />

          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="Enter your Email" name="email" />

          <label htmlFor="msg">Write your message</label>
          <textarea
            name="msg"
            rows="5"
            placeholder="Enter your Message"
          ></textarea>

          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
