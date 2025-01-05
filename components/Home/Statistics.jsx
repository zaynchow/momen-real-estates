import React from "react";
import styled from "styled-components";
import bgLines from "../../public/bg-lines.png";

const StatisticsWrapper = styled.div`
  padding: 80px 0 100px;

  background-image: url(${bgLines?.src});
  background-repeat: repeat;
  background-position: center top;

  .statistics-section {
    width: 85%;
    max-width: 1200px;
    margin: auto;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .circle {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 3px solid #000;
    border-radius: 50%;
    background-color: var(--bg-light);
    text-align: center;
    margin: -5px;
    h3 {
      margin: 0;
    }
  }

  .circle1 {
    height: 15.6rem;
    width: 15.6rem;
    left: 40px;
  }

  .circle2 {
    height: 13.5rem;
    width: 13.5rem;
    left: -30px;
  }

  .circle3 {
    height: 18rem;
    width: 18rem;
    left: 30px;
  }

  .circle4 {
    height: 20rem;
    width: 20rem;
    top: 5px;
  }

  .circle > h3:nth-of-type(1) {
    text-align: center;
    font-weight: 600;
  }

  .circle > h3:nth-of-type(2) {
    text-align: center;
    font-weight: 400;
    width: 50%;
  }
  .circle1 > h3:nth-of-type(1) {
    font-size: 3rem;
  }

  .circle1 > h3:nth-of-type(2) {
    font-size: 1rem;
  }

  .circle2 > h3:nth-of-type(1) {
    font-size: 2rem;
  }

  .circle2 > h3:nth-of-type(2) {
    font-size: 1rem;
  }
  .circle3 > h3:nth-of-type(1) {
    font-size: 4rem;
  }

  .circle3 > h3:nth-of-type(2) {
    font-size: 1rem;
  }
  .circle4 > h3:nth-of-type(1) {
    font-size: 3rem;
    /* margin: 1rem 0; */
  }

  .circle4 > h3:nth-of-type(2) {
    font-size: 1rem;
    /* width: 60%; */
  }

  @media only screen and (min-width: 768px) {
    padding-bottom: calc(15rem + 8rem);
    padding-top: 4rem;
    .stats-section {
      left: 40px;
    }
    .statistics-section {
      flex-direction: row;
    }
    .circle {
      margin: 0;
    }
    .circle1 {
      top: 5rem;
      height: 23.6rem;
      width: 23.6rem;
      left: 0;
    }
    .circle2 {
      top: 15rem;
      height: 22.5rem;
      width: 22.5rem;
      left: -2rem;
    }
    .circle3 {
      top: 9rem;
      height: 19rem;
      width: 19rem;
      left: -2.8rem;
    }
    .circle4 {
      top: 15rem;
      height: 23.6rem;
      width: 23.6rem;
      left: -3.6rem;
    }
    .circle > h3:nth-of-type(1) {
      text-align: center;
      margin: 2rem 0;
      font-weight: 600;
    }

    .circle > h3:nth-of-type(2) {
      text-align: center;
      font-weight: 400;
      width: 50%;
    }
    .circle1 > h3:nth-of-type(1) {
      font-size: 5rem;
    }

    .circle1 > h3:nth-of-type(2) {
      font-size: 1.2rem;
    }

    .circle2 > h3:nth-of-type(1) {
      font-size: 4.3rem;
    }

    .circle2 > h3:nth-of-type(2) {
      font-size: 1.1rem;
    }
    .circle3 > h3:nth-of-type(1) {
      font-size: 4.3rem;
      margin: 1rem 0;
    }

    .circle3 > h3:nth-of-type(2) {
      font-size: 1.1rem;
    }
    .circle4 > h3:nth-of-type(1) {
      font-size: 4rem;
      margin: 1rem 0;
    }

    .circle4 > h3:nth-of-type(2) {
      font-size: 1.1rem;
      width: 60%;
    }
  }
`;

const Statistics = ({ statData }) => {
  return (
    <StatisticsWrapper>
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
    </StatisticsWrapper>
  );
};

export default Statistics;
