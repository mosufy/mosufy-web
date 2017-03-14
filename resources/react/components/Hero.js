import React from 'react';

const Hero = () => {
  return (
    <header id="header">
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="intro-text">
              <h1>Hello, I'm <span className="name">Mohd Sufiyan</span></h1>
              <p>Tech Lead &amp; Aspiring Entrepreneur</p>
              <a href="#about" className="btn btn-default btn-lg page-scroll">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;