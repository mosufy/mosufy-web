import React from 'react';
import PortfolioList from './PortfolioList';

export default class Portfolio extends React.Component {
  render() {
    return (
      <div id="portfolio">
        <div className="container">

          <div className="section-title text-center center">
            <h2>Portfolio</h2>
            <hr/>
          </div>
          <div className="categories">
            <ul className="cat">
              <li>
                <ol className="type">
                  <li><a href="#" data-filter="*" className="active">All</a></li>
                  <li><a href="#" data-filter=".web">Web Design</a></li>
                  <li><a href="#" data-filter=".app">App Development</a></li>
                  <li><a href="#" data-filter=".branding">Branding</a></li>
                </ol>
              </li>
            </ul>
            <div className="clearfix"></div>
          </div>
          <PortfolioList/>
        </div>
      </div>
    );
  }
}