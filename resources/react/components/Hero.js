import React from 'react';

export default class Hero extends React.Component {
  render() {
    return (
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
    );
  }
}