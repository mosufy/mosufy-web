import React from 'react';
import ResumeList from './ResumeList';

export default class Resume extends React.Component {
  render() {
    return (
      <div id="resume" className="text-center">
        <ResumeList section="Experience"/>
        <ResumeList section="Achievement"/>
        <ResumeList section="Certification"/>
        <ResumeList section="Education"/>
      </div>
    );
  }
}