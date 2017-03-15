import React from 'react';
import PortfolioList from './PortfolioList';

const Portfolio = () => {
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
                <li><a href="#" data-filter=".open-source">Open Source</a></li>
                <li><a href="#" data-filter=".project">Project</a></li>
                <li><a href="#" data-filter=".experiment">Experiment</a></li>
              </ol>
            </li>
          </ul>
          <div className="clearfix"></div>
        </div>
        <PortfolioList/>
      </div>
    </div>
  );
};

export default Portfolio;