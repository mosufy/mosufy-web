import React from 'react';

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
            <div className="col-md-3 col-sm-3 wow fadeInDown" data-wow-delay="200ms">
              <div className="achievement-box"><span className="count">310</span>
                <h4>Happy Clients</h4>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 wow fadeInDown" data-wow-delay="400ms">
              <div className="achievement-box"><span className="count">4700</span>
                <h4>Hours of Work</h4>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 wow fadeInDown" data-wow-delay="600ms">
              <div className="achievement-box"><span className="count">30</span>
                <h4>Awards Won</h4>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 wow fadeInDown" data-wow-delay="800ms">
              <div className="achievement-box"><span className="count">8</span>
                <h4>Years of Experience</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stats;