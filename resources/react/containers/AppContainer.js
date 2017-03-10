/**
 * AppContainer
 *
 * @date 11/3/2017
 * @author Mosufy <mosufy@gmail.com>
 * @copyright Copyright (c) Mosufy
 */

import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import App from './../components/App';

class AppContainer extends React.Component {
  render() {
    return (
      <App {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);