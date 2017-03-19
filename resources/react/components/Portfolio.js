import React from 'react';
import PortfolioList from './PortfolioList';

class Portfolio extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (this.props.portfolioCategory !== nextProps.portfolioCategory);
  }

  render() {
    const portfolios = this.props.portfolios;
    const portfolioCategory = this.props.portfolioCategory;
    const handlePortfolioCategorySwitch = this.props.handlePortfolioCategorySwitch;

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
                    <a href="#" id="portfolio-category-all" className={portfolioCategory == "portfolio-category-all" ? "active" : ""} onClick={handlePortfolioCategorySwitch}>All</a>
                  </li>
                  <li>
                    <a href="#" id="portfolio-category-open-source" className={portfolioCategory == "portfolio-category-open-source" ? "active" : ""} onClick={handlePortfolioCategorySwitch}>Open Source</a>
                  </li>
                  <li>
                    <a href="#" id="portfolio-category-project" className={portfolioCategory == "portfolio-category-project" ? "active" : ""} onClick={handlePortfolioCategorySwitch}>Project</a>
                  </li>
                  <li>
                    <a href="#" id="portfolio-category-experiment" className={portfolioCategory == "portfolio-category-experiment" ? "active" : ""} onClick={handlePortfolioCategorySwitch}>Experiment</a>
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
}

Portfolio.propTypes = {
  portfolios: React.PropTypes.array,
  portfolioCategory: React.PropTypes.string,
  handlePortfolioCategorySwitch: React.PropTypes.func
};

Portfolio.defaultProps = {
  portfolios: [],
  portfolioCategory: 'portfolio-category-all'
};

export default Portfolio;