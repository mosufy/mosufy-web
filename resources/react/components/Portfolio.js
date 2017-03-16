import React from 'react';
import PortfolioList from './PortfolioList';

const Portfolio = ({portfolios, portfolioCategory, switchPortfolioCategory}) => {
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
                <li>
                  <a href="#" id="portfolio-category-all" className={portfolioCategory == "portfolio-category-all" ? "active" : ""} onClick={switchPortfolioCategory}>All</a>
                </li>
                <li>
                  <a href="#" id="portfolio-category-open-source" className={portfolioCategory == "portfolio-category-open-source" ? "active" : ""} onClick={switchPortfolioCategory}>Open Source</a>
                </li>
                <li>
                  <a href="#" id="portfolio-category-project" className={portfolioCategory == "portfolio-category-project" ? "active" : ""} onClick={switchPortfolioCategory}>Project</a>
                </li>
                <li>
                  <a href="#" id="portfolio-category-experiment" className={portfolioCategory == "portfolio-category-experiment" ? "active" : ""} onClick={switchPortfolioCategory}>Experiment</a>
                </li>
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