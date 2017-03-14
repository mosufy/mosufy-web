import React from 'react';
import SkillList from './SkillList';

const About = () => {
  return (
    <div id="skills" className="text-center">
      <div className="container">
        <div className="section-title center">
          <h2>Skills</h2>
          <hr/>
        </div>
        <SkillList/>
      </div>
    </div>
  );
};

export default About;