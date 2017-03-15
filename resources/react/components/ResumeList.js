import React from 'react';
import ResumeItem from './ResumeItem';

const getResumeItems = (sectionName) => {
  switch (sectionName) {
    case 'Experience':
      return (
        <ul className="timeline">
          <ResumeItem inverted={false} dateFrom="Aug 2014" dateTo="Present" itemHead="Incube8" itemSubhead="Tech Lead" itemSnippet="Lead 10-person development team for a flagship dating site with >200,000 active daily users. Proposed and engineered the core architecture. Acted as Scrum Master with a 2 week release life-cycle."/>
          <ResumeItem inverted={true} dateFrom="Mar 2014" dateTo="Jul 2014" itemHead="SM Solutions" itemSubhead="Co-founder" itemSnippet="Selected 13/315 teams to complete a 3-month Start-up Accelerator Bootcamp at JFDI.Asia with a $25,000 funding. Learnt crucial aspects of running a start-up using LEAN and Agile methodologies."/>
          <ResumeItem inverted={false} dateFrom="Jul 2011" dateTo="Mar 2014" itemHead="The Idea Laboratory" itemSubhead="Senior Web Developer" itemSnippet="Led 3-person digital team. Clients include Tigerair, Burger King, Workforce Development Agency, Renesas APAC, Nestle Sjora & Milo, Ngee Ann Polytechnic, Resorts World Sentosa, among others."/>
          <ResumeItem inverted={true} dateFrom="2011" dateTo="2014" itemHead="Singapore Armed Forces" itemSubhead="Platoon Commander, Instructor" itemSnippet="Gained leadership, coaching and instructional skills as a Platoon Commander of >30 men. Later on as an Instructor, trained would-be officers of the Armed Forces to excel beyond their limits."/>
        </ul>
      );
    case 'Achievement':
      return (
        <ul className="timeline">
          <ResumeItem inverted={false} dateFrom="" dateTo="Jan 2014" itemHead="StarHub i3" itemSubhead="1st Place: StarHub SmartFoundry Challenge 2013" itemSnippet="A follow-up of StarHub's “Enterprise Communications Made Easy” Hackathon, this competition allows winning teams to build a more elaborate prototype of their ideas."/>
          <ResumeItem inverted={true} dateFrom="" dateTo="Nov 2013" itemHead="StarHub i3" itemSubhead="1st Runner-up: Enterprise Communications Made Easy Hackathon" itemSnippet="7-hour hackathon to create and prototype solutions that make use of StarHub's SmartFoundry solutions."/>
          <ResumeItem inverted={false} dateFrom="" dateTo="Nov 2007" itemHead="Singapore Polytechnic" itemSubhead="Finalist: Asia Pacific ICT Alliance Awards (APICTA) 2007" itemSnippet="Finalist in Asia Pacific ICT Alliance Awards (APICTA) 2007, held in Macau. Represented Singapore Polytechnic in the Tertiary Student Project Award."/>
        </ul>
      );
    case 'Certification':
      return (
        <ul className="timeline">
          <ResumeItem inverted={false} dateFrom="" dateTo="Jul 2016" itemHead="Scrum.org" itemSubhead="Professional Scrum Master I" itemSnippet="Professional Scrum Master (PSM) I certificate holders prove that they understand Scrum as described in the Scrum Guide and the concepts and terminology of applying Scrum."/>
          <ResumeItem inverted={true} dateFrom="" dateTo="Aug 2009" itemHead="Centre for Management Development" itemSubhead="Coaching for Performance & Development" itemSnippet="Learn the aspects of coaching and techniques to apply those skills appropriately in their work environment to develop and improve staff performance."/>
          <ResumeItem inverted={false} dateFrom="" dateTo="Jul 2009" itemHead="National Institute of Education" itemSubhead="Introducing Problem-Based Learning" itemSnippet="Problem-Based Learning (PBL) is a pedagogy that encourages students to learn through problem-solving."/>
          <ResumeItem inverted={true} dateFrom="" dateTo="Jan 2009" itemHead="Centre for Management Development" itemSubhead="The Art of Delegation" itemSnippet="As management is really about getting things done through people, successful delegation is a vital aspect of a manager's job."/>
        </ul>
      );
    case 'Education':
      return (
        <ul className="timeline">
          <ResumeItem inverted={false} dateFrom="2004" dateTo="2007" itemHead="Singapore Polytechnic" itemSubhead="Diploma in Multimedia Technology" itemSnippet="Finalist in Asia Pacific ICT Alliance Awards (APICTA) 2007, Macau. National IP Champion Camp Mentor for IPOS, 2006. Awarded Distinction in Drawing."/>
          <ResumeItem inverted={true} dateFrom="2000" dateTo="2003" itemHead="Montfort Seconday School" itemSubhead="GCE 'O'" itemSnippet="'A' Grade for Art, Math, Additional Math, Science. Vice Chairman of Art Club, 2002. Outstanding Performance in ART, 2002. EAGLES Award (Achievement, Good Leadership, Service) in 2001."/>
        </ul>
      );
  }
};

const ResumeList = ({section}) => {
  return (
    <div className="container">
      <div className="section-title center">
        <h2>{section}</h2>
        <hr/>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {getResumeItems(section)}
        </div>
      </div>
    </div>
  );
};

export default ResumeList;