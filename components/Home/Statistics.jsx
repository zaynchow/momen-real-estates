import React from "react";

const Statistics = ({ statData }) => {
  return (
    <div className="statistics-wrapper">
      <div className="stats-section">
        <div className="statistics-section">
          <div className="circle circle1">
            <h3>{statData[0].heading}</h3>
            <h3>{statData[0].sub_heading}</h3>
          </div>
          <div className="circle circle2">
            <h3>{statData[1].heading}</h3>
            <h3>{statData[1].sub_heading}</h3>
          </div>
          <div className="circle circle3">
            <h3>{statData[2].heading}</h3>
            <h3>{statData[2].sub_heading}</h3>
          </div>
          <div className="circle circle4">
            <h3>{statData[3].heading}</h3>
            <h3>{statData[3].sub_heading}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
