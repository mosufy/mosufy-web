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
  shouldComponentUpdate(nextProps, nextState) {
    return (this.props.portfolioCategory !== nextProps.portfolioCategory);
  }

  componentDidMount() {
    this.props.resetPortfolio();
  }

  render() {
    return (
      <Home portfolios={this.props.portfolios}
            portfolioCategory={this.props.portfolioCategory}
            handlePortfolioCategorySwitch={this.props.handlePortfolioCategorySwitch}/>
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
    handlePortfolioCategorySwitch: (e) => {
      e.preventDefault();

      let category = $(e.target).closest("a").attr('id');
      dispatch(portfolioActions.switchCategory(category));
    },
    resetPortfolio: () => {
      dispatch(portfolioActions.switchCategory('portfolio-category-all'));
    }
  };
};

HomeContainer.propTypes = {
  portfolios: React.PropTypes.array,
  portfolioCategory: React.PropTypes.string,
  handlePortfolioCategorySwitch: React.PropTypes.func
};

HomeContainer.defaultProps = {
  portfolios: [],
  portfolioCategory: 'portfolio-category-all'
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);