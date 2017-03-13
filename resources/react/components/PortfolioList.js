import React from 'react';
import PortfolioItem from './PortfolioItem';

export default class PortfolioList extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="portfolio-items">
          <PortfolioItem title="Lument-React" snippet="Foundation for an API-Centric Architecture with Laravel's Lumen (API) and React (Web)" category="open-source" img="lumen-react.jpg" link="https://github.com/mosufy/lumen-react"/>
          <PortfolioItem title="Arena" snippet="Provides quantitative metrics to help young professionals stand out for promotion through a gamified concept." category="project" img="arena.jpg" link="https://www.thearena.co/"/>
          <PortfolioItem title="Maggie" snippet="Automates timekeeping for hourly-based professionals, offering their clients credible and accurate invoices." category="project" img="maggie.jpg" link="https://www.heymaggie.com/"/>
          <PortfolioItem title="PropertyAPI" snippet="Provides real estate agents the ability to have their own property listing website integrated via RESTful API." category="project" img="propertyapi.jpg" link="https://www.propertyapi.com/"/>
          <PortfolioItem title="VixHub" snippet="Simplifies and packages business processes into a single comprehensive and user-friendly cloud-based software." category="app" img="vixhub.jpg" link="http://www.vixhub.com/"/>
          <PortfolioItem title="API coLab" snippet="Tinder for Cheaper Flights concept app for Hack Day. Coded in 6 hours with a 2-min pitch." category="experiment" img="apicolab.jpg" link="https://github.com/mosufy/apicolab-hackday/"/>
          <PortfolioItem title="BusWhere" snippet="Search for buses near an area and know when the buses arrive at a specific bus stop using an API." category="experiment" img="buswhere.jpg" link="https://github.com/mosufy/bus-where"/>
          <PortfolioItem title="PHP MVC Framework" snippet="Provides basic, barebone essentials to deploy a project quickly. Hosted on GitHub." category="experiment" img="php-mvc.jpg" link="https://github.com/mosufy/php-mvc"/>
        </div>
      </div>
    );
  }
}