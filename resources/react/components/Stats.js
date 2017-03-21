import React from 'react';
import StatItem from './StatItem';

class Stats extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <div id="achievements" className="text-center">
        <div className="container">
          <div className="section-title center">
            <h2>Some Stats</h2>
            <hr/>
          </div>
          <div className="row">
            <StatItem
              statName="Happy Clients"
              statCount={310}/>
            <StatItem
              statName="Hours of Work"
              statCount={4700}/>
            <StatItem
              statName="Awards Won"
              statCount={30}/>
            <StatItem
              statName="Years of Experience"
              statCount={6}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Stats;