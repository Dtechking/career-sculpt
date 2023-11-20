// Contacts.js
import './Show.css';

import React from 'react';

const Contacts = () => {
  return (
    <section id="contact">
      <div className="container" id="contain">
        <div id="contactinfo">
          <h1>Contact Info</h1>
          <ul className="info">
            <li>
              <span>
                <img src="Images/location.png" alt="" />
              </span>
              <span>
                Nehru Street
                <br />
                Chrompet, Chennai
                <br />
                600044
              </span>
            </li>
            <li>
              <span>
                <img src="Images/mail.png" alt="" />
              </span>
              <span>ct.mitindia.edu</span>
            </li>
            <li>
              <span>
                <img src="Images/call.png" alt="" />
              </span>
              <span>07-22-66-89-17</span>
            </li>
          </ul>
          <ul className="social-media">
            <li>
              <a href="#">
                <img src="Images/1.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="Images/2.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="Images/3.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="Images/4.png" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="Images/5.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="contactform">
          <h2>Send A Message</h2>
          <div className="formbox">
            <div className="inputbox w50">
              <input type="text" required />
              <span>First Name</span>
            </div>
            <div className="inputbox w50">
              <input type="text" required />
              <span>Last Name</span>
            </div>
            <div className="inputbox w50">
              <input type="email" required />
              <span>Email Address</span>
            </div>
            <div className="inputbox w50">
              <input type="text" required />
              <span>Mobile Number</span>
            </div>
            <div className="inputbox w100">
              <textarea required></textarea>
              <span>Write your message here...</span>
            </div>
            <div className="inputbox w50">
              <input type="submit" value="Send" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;