import React from 'react';

export default class PortfolioItem extends React.Component {
  render() {
    return (
      <div className="col-sm-6 col-md-4 col-lg-4 web">
        <div className="portfolio-item">
          <div className="hover-bg">
            <a href={this.props.link} target="_blank" title={this.props.title} rel="prettyPhoto">
              <div className="hover-text">
                <h4>{this.props.title}</h4>
                <small>{this.props.snippet}</small>
              </div>
              <img src={'img/portfolio/mockup-' + this.props.img} className="img-responsive" alt={this.props.title}/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}