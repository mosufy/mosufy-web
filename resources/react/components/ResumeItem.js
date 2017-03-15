import React from 'react';

const getTimeline = (dateFrom, dateTo) => {
  if (dateFrom == "") {
    return (
      <h4>{dateFrom}<br/>
        {dateTo}
      </h4>
    );
  } else {
    return (
      <h4>{dateFrom}<br/>
        -<br/>
        {dateTo}
      </h4>
    );
  }
};

const ResumeItem = ({inverted, dateFrom, dateTo, itemHead, itemSubhead, itemSnippet}) => {
  return (
    <li className={inverted ? "timeline-inverted" : ""}>
      <div className="timeline-image">
        {getTimeline(dateFrom, dateTo)}
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4>{itemHead}</h4>
          <h4 className="subheading">{itemSubhead}</h4>
        </div>
        <div className="timeline-body">
          <p>{itemSnippet}</p>
        </div>
      </div>
    </li>
  )
};

export default ResumeItem;