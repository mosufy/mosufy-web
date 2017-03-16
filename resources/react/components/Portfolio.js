import React from 'react';
import PortfolioList from './PortfolioList';

const Portfolio = ({portfolios, portfolioCategory, switchPortfolioCategory}) => {
  console.log({portfolios});
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
                <li><a href="#" id="portfolio-category-all" className="active">All</a></li>
                <li><a href="#" id="portfolio-category-open-source">Open Source</a></li>
                <li><a href="#" id="portfolio-category-project">Project</a></li>
                <li><a href="#" id="portfolio-category-experiment">Experiment</a></li>
              </ol>
            </li>
          </ul>
          <div className="clearfix"></div>
        </div>
        <PortfolioList portfolioItems={portfolios}/>
      </div>
    </div>
  );
};

export default Portfolio;