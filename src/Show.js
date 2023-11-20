import React from 'react';
import "./Show.css";
import "./bootstrap.css";
import Contacts from './Contacts';
import About from './About';

const Show = () => {
  return (
    <div>
      
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-7 col-lg-7">
              <div className="hero-header">
                <h2>
                  Tomorrow Looks Better Because We're <span className="hero-head">Here to Help You </span>Choose Your Career Track.
                </h2>
              </div>
              <div className="more">
                <a href="#about">
                  <button className="btn" id="btns">
                    About Career <span className="brand">Guidance</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-md-12">
              <div className="scrolls">
                <a href="#" className="scroll-down" address="true">
                  <img src="Images/mouse_click.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About/>
      <Contacts />
    </div>
  );
};

export default Show;
