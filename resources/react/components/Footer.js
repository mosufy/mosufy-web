import React from 'react';

class Footer extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <div id="footer">
        <div className="container text-center">
          <div className="fnav">
            <p>Copyright &copy; 2017 Mohd Sufiyan. Designed by <a href="http://www.templatewire.com" rel="nofollow">TemplateWire</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;