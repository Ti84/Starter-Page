import React from 'react';
import './TimePanel.scss';

const TimePanel = props => {
  const { time, date } = props;
  return (
    <div className="time-panel">
      <div className="datetimer-container">
        <span className="current-date">{date}</span>
      </div>
      <div className="datetimer-container">
        <span className="current-time">{time}</span>
      </div>
    </div>
  );
};

export default TimePanel;
