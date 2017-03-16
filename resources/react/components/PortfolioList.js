import React from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioList = ({portfolioItems}) => {
  return (
    <div className="row">
      <div className="portfolio-items">
        {portfolioItems.map(portfolioItem => {
          return (
            <div key={portfolioItem.id}>
              <PortfolioItem title={portfolioItem.title} snippet={portfolioItem.snippet} category={portfolioItem.category} img={portfolioItem.img} link={portfolioItem.link}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioList;