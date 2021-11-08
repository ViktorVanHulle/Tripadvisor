import React from 'react'
import bannerImage from "../assets/cityBackgroundImage.jpg";
import { MdLocationPin } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact" style={{backgroundImage: `url(${bannerImage})`}}>
    <div className="container">
    <h1>CONTACT US</h1>
    <div className="wrapper">
    <div className="company-info">
      <ul>
        <li><MdLocationPin /> 44 Something st</li>
        <li><BsFillTelephoneFill /> +32430485961</li>
        <li><HiMail /> tripadvisor@outlook.com</li>
      </ul>
    </div>
    <div className="form">
      <form>
        <p>
          <label>Name</label>
          <input type="text" name="name"/>
        </p>
        <p>
          <label>Email Address</label>
          <input type="email" name="email"/>
        </p>
        <p>
          <label>Title</label>
          <input type="text" name="title"/>
        </p>
        <p className="full">
          <label>Message</label>
          <textarea name="message" row="S"></textarea>
        </p>
        <p className="full">
          <button>SEND MESSAGE</button>
        </p>
      </form>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
