import React from 'react';

const StatItem = ({statName, statCount}) => {
  return (
    <div className="col-md-3 col-sm-3">
      <div className="achievement-box"><span className="count">{statCount}</span>
        <h4>{statName}</h4>
      </div>
    </div>
  )
};

export default StatItem;