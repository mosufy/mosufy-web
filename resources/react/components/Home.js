import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Stats from './Stats';
import Resume from './Resume';
import Contact from  './Contact';

class Home extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (this.props.portfolioCategory !== nextProps.portfolioCategory);
  }

  render() {
    return (
      <div>
        <Hero/>
        <Navbar/>
        <About/>
        <Skills/>
        <Portfolio portfolios={this.props.portfolios}
                   portfolioCategory={this.props.portfolioCategory}
                   handlePortfolioCategorySwitch={this.props.handlePortfolioCategorySwitch}/>
        <Stats/>
        <Resume/>
        <Contact/>
      </div>
    );
  }
}

Home.propTypes = {
  portfolios: React.PropTypes.array,
  portfolioCategory: React.PropTypes.string,
  handlePortfolioCategorySwitch: React.PropTypes.func
};

Home.defaultProps = {
  portfolios: [],
  portfolioCategory: 'portfolio-category-all'
};

export default Home;