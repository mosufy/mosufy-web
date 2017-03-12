import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div id="skills" className="text-center">
        <div className="container">
          <div className="section-title center">
            <h2>Skills</h2>
            <hr/>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 skill">
              <h4>Technologies</h4>
              <span className="chart">
                <span className="skill-items">Laravel 5.3 &bull; Lumen<br/> PHP 7.0 &bull; MySQL 5.6<br/> Memcached &bull; Redis<br/> Queue Services<br/> Elasticsearch &bull; Sphinx<br/> API &bull; OAuth2<br/> Codeception &bull; Unit Test</span>
              </span>
            </div>
            <div className="col-md-4 col-sm-6 skill">
              <h4>Front-end</h4>
              <span className="chart">
                <span className="skill-items">HTML5 &bull; JavaScript<br/> Blade &bull; Bootstrap<br/> Gulp &bull; Bower<br/> React &bull; React Native<br/> Canvas</span>
              </span>
            </div>
            <div className="col-md-4 col-sm-6 skill">
              <h4>DevOps</h4>
              <span className="chart">
                <span className="skill-items">Vagrant &bull; Virtualbox<br/> Ansible &bull; Jenkins CI<br/> AWS &bull; Digital Ocean<br/> Cloudflare &bull; CloudFront<br/> Bugsnag &bull; Sentry<br/> Tinc VPN &bull; Travis CI</span>
              </span>
            </div>
            <div className="col-md-4 col-sm-6 skill">
              <h4>Software</h4>
              <span className="chart">
                <span className="skill-items">SourceTree &bull; Git<br/> JIRA &bull; Confluence<br/> GitHub &bull; Bitbucket<br/> Stash &bull; Crucible</span>
              </span>
            </div>
            <div className="col-md-4 col-sm-6 skill">
              <h4>Administration</h4>
              <span className="chart">
                <span className="skill-items">Agile &bull; Lean<br/> Technical Documentation<br/> Technical Writing<br/> Software Architect</span>
              </span>
            </div>
            <div className="col-md-4 col-sm-6 skill">
              <h4>Management</h4>
              <span className="chart">
                <span className="skill-items">Tech Lead &bull; Team Lead<br/> Team Management<br/> Team Formation<br/> Scrum Master<br/> Consultant &bull; Coach</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}