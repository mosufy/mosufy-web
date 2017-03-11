import React from 'react';

export default class Resume extends React.Component {
  render() {
    return (
      <div id="resume" className="text-center">
        <div className="container">
          <div className="section-title center">
            <h2>Experience</h2>
            <hr/>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <h4>Feb 2013 <br/>
                      - <br/>
                      Present </h4>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Creative Agency</h4>
                      <h4 className="subheading">UX Developer</h4>
                    </div>
                    <div className="timeline-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>Nov 2011 <br/>
                      - <br/>
                      Jan 2013 </h4>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Creative Agency</h4>
                      <h4 className="subheading">Front-end Developer</h4>
                    </div>
                    <div className="timeline-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <h4>Dec 2009 <br/>
                      - <br/>
                      May 2011 </h4>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Creative Agency</h4>
                      <h4 className="subheading">UX Designer</h4>
                    </div>
                    <div className="timeline-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section-title center">
            <h2>Education</h2>
            <hr/>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">

                /* Education Section */

                <li>
                  <div className="timeline-image">
                    <h4>2010 <br/>
                      - <br/>
                      2011 </h4>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Design University</h4>
                      <h4 className="subheading">Master Degree of Design</h4>
                    </div>
                    <div className="timeline-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>2007 <br/>
                      - <br/>
                      2010 </h4>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Design University</h4>
                      <h4 className="subheading">Bachelor Degree of Design</h4>
                    </div>
                    <div className="timeline-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <h4>2004 <br/>
                      - <br/>
                      2007 </h4>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>School Name</h4>
                      <h4 className="subheading">High School Degree</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diamcommodo nibh ante facilisis.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}