// About.js

import React from 'react';
import './Show.css';
import { Link, useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const handleLinkClick = (path) => {
        navigate(path);
        window.location.reload();
      };

  return (
    <section id="about">
      <div className="container" id="does">
        <div className="row">
          <div className="col-md-12">
            <h2 className="who">
              Who <span className="guide">We Are</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="say">
                <p className="wassup">
                  Career Guidance is a webpage that offers insights in both life, social, and school skills.
                  <br />
                  We strive to give you world-class advice on career choices based on interests, IQ (intelligence quotient), as well as a stable position in the days of tomorrow
                  <br />
                  With a team of diversity in culture and ethnicity, we give you access to banks of information from all corners of the globe.
                  <br />
                  We guarantee you a blissful experience as we help you navigate the perilous waters of life after high school on this great journey.
                  <br />
                  Join us and be part of the experience.
                  <br />
                </p>
              </div>
              <div className="login">
                <Link to="/quiz" onClick={() => handleLinkClick('./quiz')}>
                  <button type="button" className="btn btn-dark" id="btns">
                    Take Test
                  </button>
                </Link>
                <Link to="/domains" onClick={() => handleLinkClick('./quiz')}>
                  <button type="button" className="btn btn-dark" id="btns">
                    Domains
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
