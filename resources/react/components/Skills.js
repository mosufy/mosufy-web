import React from 'react';
import SkillItem from './SkillItem';

class Skills extends React.Component {
  static getSkillItems(skillCategory) {
    switch (skillCategory) {
      case 'Technologies':
        return (
          <span>
            Laravel 5.3 &bull; Lumen<br/>
            PHP 7.0 &bull; MySQL 5.6<br/>
            Memcached &bull; Redis<br/>
            Queue Services<br/>
            Elasticsearch &bull; Sphinx<br/>
            API &bull; OAuth2<br/>
            Codeception &bull; Unit Test
          </span>
        );
      case 'Front-end':
        return (
          <span>
            HTML5 &bull; CSS3<br/>
            JavaScript &bull; JQuery<br/>
            Blade &bull; Bootstrap<br/>
            Gulp &bull; Bower<br/>
            React &bull; React Native<br/>
            Canvas
          </span>
        );
      case 'DevOps':
        return (
          <span>
            Vagrant &bull; Virtualbox<br/>
            Ansible &bull; Jenkins CI<br/>
            Web Server Administration<br/>
            AWS &bull; Digital Ocean<br/>
            Cloudflare &bull; CloudFront<br/>
            Bugsnag &bull; Sentry<br/>
            Tinc VPN &bull; Travis CI
          </span>
        );
      case 'Software':
        return (
          <span>
            SourceTree &bull; Git<br/>
            JIRA &bull; Confluence<br/>
            GitHub &bull; Bitbucket<br/>
            Stash &bull; Crucible<br/>
            Deployment Automation
          </span>
        );
      case 'Administration':
        return (
          <span>
            Agile &bull; Lean<br/>
            Technical Documentation<br/>
            Technical Writing<br/>
            Software Architect
          </span>
        );
      case 'Management':
        return (
          <span>
            Tech Lead &bull; Team Lead<br/>
            Team Management<br/>
            Team Formation<br/>
            Scrum Master<br/>
            Consultant &bull; Coach
          </span>
        );
    }
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div id="skills" className="text-center">
        <div className="container">
          <div className="section-title center">
            <h2>Skills</h2>
            <hr/>
          </div>
          <div className="row">
            <SkillItem skillCategory="Technologies" skillItem={Skills.getSkillItems('Technologies')}/>
            <SkillItem skillCategory="Front-end" skillItem={Skills.getSkillItems('Front-end')}/>
            <SkillItem skillCategory="DevOps" skillItem={Skills.getSkillItems('DevOps')}/>
            <SkillItem skillCategory="Software" skillItem={Skills.getSkillItems('Software')}/>
            <SkillItem skillCategory="Administration" skillItem={Skills.getSkillItems('Administration')}/>
            <SkillItem skillCategory="Management" skillItem={Skills.getSkillItems('Management')}/>
          </div>
        </div>
      </div>
    )
  };
}

export default Skills;