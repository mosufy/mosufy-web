import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Stats from './Stats';
import Resume from './Resume';
import Contact from  './Contact';

const Home = ({portfolios, portfolioCategory, switchPortfolioCategory}) => {
  return (
    <div>
      <Hero/>
      <Navbar/>
      <About/>
      <Skills/>
      <Portfolio portfolios={portfolios}
                 portfolioCategory={portfolioCategory}
                 switchPortfolioCategory={switchPortfolioCategory}/>
      <Stats/>
      <Resume/>
      <Contact/>
    </div>
  );
};

export default Home;