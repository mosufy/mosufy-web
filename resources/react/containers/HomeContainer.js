/**
 * HomeContainer
 *
 * @date 11/3/2017
 * @author Mosufy <mosufy@gmail.com>
 * @copyright Copyright (c) Mosufy
 */

import React from 'react';
import Home from '../components/Home';
import {connect} from 'react-redux';
import * as portfolioActions from './../actions/portfolioActions';

class HomeContainer extends React.Component {
  componentDidMount() {
    this.props.resetPortfolio();
  }

  render() {
    return (
      <Home portfolios={this.props.portfolios}
            portfolioCategory={this.props.portfolioCategory}
            switchPortfolioCategory={this.props.switchPortfolioCategory}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    portfolios: state.portfolios,
    portfolioCategory: state.portfolioCategory
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchPortfolioCategory: (e) => {
      e.preventDefault();

      let category = $(e.target).closest("a").attr('id');
      dispatch(portfolioActions.switchCategory(category));
    },
    resetPortfolio: () => {
      dispatch(portfolioActions.resetPortfolio());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);