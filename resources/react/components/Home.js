import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <header id="header">
          <div className="intro">
            <div className="container">
              <div className="row">
                <div className="intro-text">
                  <h1>Hello, I'm <span className="name">John Doe</span></h1>
                  <p>UX Designer & Front End Developer</p>
                  <a href="#about" className="btn btn-default btn-lg page-scroll">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div id="nav">
          <nav className="navbar navbar-custom">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                  <i className="fa fa-bars"/>
                </button>
                <a className="navbar-brand page-scroll" href="#page-top">John Doe</a>
              </div>

              <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                <ul className="nav navbar-nav">
                  <li className="hidden"><a href="#page-top"/></li>
                  <li><a className="page-scroll" href="#about">About</a></li>
                  <li><a className="page-scroll" href="#skills">Skills</a></li>
                  <li><a className="page-scroll" href="#portfolio">Portfolio</a></li>
                  <li><a className="page-scroll" href="#resume">Resume</a></li>
                  <li><a className="page-scroll" href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div id="about">
          <div className="container">
            <div className="section-title text-center center">
              <h2>About Me</h2>
              <hr/>
            </div>
            <div className="row">
              <div className="col-md-12 text-center"><img src="img/about.jpg" className="img-responsive"/></div>
              <div className="col-md-8 col-md-offset-2">
                <div className="about-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare.</p>
                  <p className="text-center">
                    <a className="btn btn-primary" href="#"><i className="fa fa-download"/> Download Resume</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}