import React from 'react';
import {Link} from 'react-router';
import Navbar from './Navbar';

const NotFoundPage = () => {
  return (
    <div>
      <div className="container">
        <div className="clearfix">&nbsp;</div>
        <div className="row">
          <div className="col-lg-12" style={{marginTop: 200 + 'px', marginBottom: 150 + 'px'}}>
            <h2>404 - Page Not Found</h2>
            <p>I'm sorry, the page you were looking for cannot be found! Click <Link to="/">here</Link> to go back to the homepage.
            </p>
          </div>
        </div>
      </div>
      <Navbar/>
    </div>
  )
};

export default NotFoundPage;
