import React from 'react';
import ResumeList from './ResumeList';

const Resume = () => {
  return (
    <div id="resume" className="text-center">
      <ResumeList section="Experience"/>
      <ResumeList section="Achievement"/>
      <ResumeList section="Certification"/>
      <ResumeList section="Education"/>
    </div>
  );
};

export default Resume;