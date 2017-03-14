import React from 'react';

export default class ResumeItem extends React.Component {
  static getTimeline(dateFrom, dateTo) {
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
  }

  render() {
    return (
      <li className={this.props.inverted ? "timeline-inverted" : ""}>
        <div className="timeline-image">
          {ResumeItem.getTimeline(this.props.dateFrom, this.props.dateTo)}
        </div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4>{this.props.itemHead}</h4>
            <h4 className="subheading">{this.props.itemSubhead}</h4>
          </div>
          <div className="timeline-body">
            <p>{this.props.itemSnippet}</p>
          </div>
        </div>
      </li>
    );
  }
}