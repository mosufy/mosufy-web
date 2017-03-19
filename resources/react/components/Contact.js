import React from 'react';

class Contact extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <div id="contact" className="text-center">
        <div className="container">
          <div className="section-title center">
            <h2>Contact</h2>
            <hr/>
          </div>
          <div className="col-md-8 col-md-offset-2">
            <div className="col-md-4"><i className="fa fa-map-marker fa-2x"/>
              <p>Singapore</p>
            </div>
            <div className="col-md-4"><i className="fa fa-envelope-o fa-2x"/>
              <p>mosufy@gmail.com</p>
            </div>
            <div className="col-md-4"><i className="fa fa-phone fa-2x"/>
              <p>+65 8484 0255</p>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="col-md-8 col-md-offset-2">
            <h3>Leave me a message</h3>
            <form name="sentMessage" id="contactForm" noValidate>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" id="name" className="form-control" placeholder="Name" required="required"/>
                    <p className="help-block text-danger"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="email" id="email" className="form-control" placeholder="Email" required="required"/>
                    <p className="help-block text-danger"/>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required/>
                <p className="help-block text-danger"/>
              </div>
              <div id="success"></div>
              <button type="submit" className="btn btn-default">Send Message</button>
            </form>
            <div className="social">
              <ul>
                <li><a href="https://www.facebook.com/mosufy"><i className="fa fa-facebook"/></a></li>
                {/*<li><a href="#"><i className="fa fa-twitter"/></a></li>*/}
                {/*<li><a href="#"><i className="fa fa-dribbble"/></a></li>*/}
                <li><a href="https://www.github.com/mosufy"><i className="fa fa-github"/></a></li>
                {/*<li><a href="#"><i className="fa fa-instagram"/></a></li>*/}
                <li><a href="https://www.linkedin.com/in/mohdsufiyan"><i className="fa fa-linkedin"/></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;