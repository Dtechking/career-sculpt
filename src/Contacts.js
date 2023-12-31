import React from 'react';
import './Show.css'
import loc from './Images/location.png';
import mail from './Images/mail.png';
import call from './Images/call.png';
import I1 from './Images/1.png';
import I2 from './Images/2.png';
import I3 from './Images/3.png';
import I4 from './Images/4.png';
import I5 from './Images/5.png';

const Contacts = () => {
  return (
    <section id="contact">
        <div class="container" id="contain">
          <div id="contactinfo">
            <h1>Contact Info</h1>
            <ul class="info">
              <li>
                <span><img src={loc} /></span>
                <span
                  >Nehru Street<br />
                  Chrompet, Chennai<br />
                  600044</span
                >
              </li>
              <li>
                <span><img src={mail} /></span>
                <span>ct.mitindia.edu</span>
              </li>
              <li>
                <span><img src={call} /></span>
                <span>07-22-66-89-17</span>
              </li>
            </ul>
            <ul class="social-media">
              <li><a href="#"><img src={I1} /></a></li>
              <li><a href="#"><img src={I2} /></a></li>
              <li><a href="#"><img src={I3} /></a></li>
              <li><a href="#"><img src={I4} /></a></li>
              <li><a href="#"><img src={I5} /></a></li>
            </ul>
          </div>
          <div class="contactform">
            <h2>Send A Message</h2>
            <div class="formbox">
              <div class="inputbox w50">
                <input type="text" required />
                <span>First Name</span>
              </div>
              <div class="inputbox w50">
                <input type="text" required /> 
                <span>Last Name</span>
              </div>
              <div class="inputbox w50">
               <input type="email" required />
               <span>Email Address</span>
              </div>
              <div class="inputbox w50">
                <input type="text" required />
                <span>Mobile Number</span>
              </div>
              <div class="inputbox w100">
                <textarea required></textarea>
                <span>Write your message here...</span>
              </div>
              <div class="inputbox w50">
                <input type="submit" value="Send" />
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Contacts;
