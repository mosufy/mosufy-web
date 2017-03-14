import React from 'react';

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="section-title text-center center">
          <h2>About Me</h2>
          <hr/>
        </div>
        <div className="row">
          <div className="col-md-12 text-center"><img src="img/about.jpg" className="img-responsive"/></div>
          <div className="col-md-8 col-md-offset-2">
            <div className="about-text">
              <p>Pushing my boundaries and trying out new things as part of experience building for both my personal and professional progression.</p>
              <p>I am a full-stack developer; from idea validation to product development to launch. I am capable of developing web apps as a service as well as an end-product. I've worked as a 1-man team, building an API service for a mobile telephony app to team lead of up to 10-men team to re-architect a high traffic dating site from the ground up as a Technical Lead at Incube8.</p>
              <p>I have experienced running my own start-up; both as a part-time as well as full-time basis, and was part of JFDI's (Joyful Frog Digital Incubator) 2014A Accelerator programme.</p>
              <p>As a Senior Web Developer and a founding member of the Digital Platform Team in a previous ad agency for almost 3 years, I have worked closely with various media agency partners, account managers, designers, art directors and direct with clients, and thus well versed in the advertising, media and marketing landscape.</p>
              <p>I am also experienced in web server administration; particularly on Amazon Web Services (AWS) and Digital Ocean (DO) and can deploy and host web servers on the fly. Building highly scalable and redundant web is one of my next learning points.</p>
              <p className="text-center">
                <a className="btn btn-primary" href="#"><i className="fa fa-download"/> Download Resume</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;