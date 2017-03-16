import React from 'react';

const PortfolioItem = ({title, snippet, category, img, link}) => {
  return (
    <div className={"col-sm-6 col-md-4 col-lg-4 " + category}>
      <div className="portfolio-item">
        <div className="hover-bg">
          <a href={link} target="_blank" title={title} rel="prettyPhoto">
            <div className="hover-text">
              <h4>{title}</h4>
              <small>{snippet}</small>
            </div>
            <img src={'img/portfolio/mockup-' + img} className="img-responsive" alt={title}/>
          </a>
        </div>
      </div>
    </div>
  )
};

export default PortfolioItem;