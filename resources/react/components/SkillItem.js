import React from 'react';

export default class SkillItem extends React.Component {
  render() {
    return (
      <div className="col-md-4 col-sm-6 skill">
        <h4>{this.props.skillCategory}</h4>
        <span className="chart">
          <span className="skill-items">{this.props.skillItem}
          </span>
        </span>
      </div>
    );
  }
}