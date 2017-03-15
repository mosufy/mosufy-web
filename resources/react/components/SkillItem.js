import React from 'react';

const SkillItem = ({skillCategory, skillItem}) => {
  return (
    <div className="col-md-4 col-sm-6 skill">
      <h4>{skillCategory}</h4>
      <span className="chart">
        <span className="skill-items">{skillItem}</span>
      </span>
    </div>
  );
};

export default SkillItem;