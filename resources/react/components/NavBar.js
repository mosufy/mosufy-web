import React from 'react';
import {browserHistory} from 'react-router';
import NavLink from './common/NavLink';

export default class NavBar extends React.Component {
  static defaultProps = {
    navIndex: true
  };

  static propTypes = {
    navIndex: React.PropTypes.bool
  };

  render() {
    var navlinks;

    navlinks = (
      <ul className="nav nav-pills pull-right">
        <NavLink to="/" {...this.props.navIndex}>Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
        <NavLink to="login">Login</NavLink>
      </ul>
    );

    return (
      <nav>
        {navlinks}
      </nav>
    );
  }
}
