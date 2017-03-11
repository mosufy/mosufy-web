import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Achievements from './Achievements';
import Resume from './Resume';
import Contact from  './Contact';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero/>
        <Navbar/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Achievements/>
        <Resume/>
        <Contact/>
      </div>
    );
  }
}