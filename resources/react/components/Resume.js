import React from 'react';
import ResumeList from './ResumeList';

class Resume extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <div id="resume" className="text-center">
        <ResumeList section="Experience"/>
        <ResumeList section="Achievement"/>
        <ResumeList section="Certification"/>
        <ResumeList section="Education"/>
      </div>
    )
  }
}

export default Resume;