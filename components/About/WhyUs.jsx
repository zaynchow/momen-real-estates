import React from "react";
import styled from "styled-components";
import bgLines from "../../public/bg-lines.png";
import ruler from "../../public/icons/ruler-icon.png";
import Image from "next/image";
import Button from "../lib/Button";

const WhyUsWrapper = styled.div`
  background-image: url(${bgLines?.src});
  background-repeat: repeat;
  background-position: center top;
  background-color: white;
  padding: 150px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 50px;

  .inner-wrapper {
    width: 85%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    column-gap: 200px;
    .left-column {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 50%;

      * {
        margin: 0;
      }
      h2 {
        color: var(--secondary);
        font-weight: 400;
        font-size: 1.2rem;
      }
      h3 {
        font-weight: 700;
        text-align: left;
        font-size: 2.5rem;
        margin-top: 20px;
        margin-bottom: 15px;
        line-height: 3rem;
      }
    }
    .right-column {
      width: 50%;
      display: flex;
      flex-direction: column;
      row-gap: 30px;
      div {
        display: flex;
        align-items: flex-start;

        p {
          margin: 0 0 0 20px;
        }
      }
    }
  }
`;

const WhyUs = ({ whyUsData }) => {
  return (
    <WhyUsWrapper>
      <div className="inner-wrapper">
        <div className="left-column">
          <h2>WHY US</h2>
          <h3>
            We are making a diagnosis of clients problems and solving them with
            ready to go solutions
          </h3>
          <Button href="/contact">Contact Us</Button>
        </div>
        <div className="right-column">
          {whyUsData.map((obj, idx) => (
            <div key={idx}>
              <Image
                src={ruler}
                alt="about-hero-image"
                width="50"
                height="50"
              />
              <p>{obj}</p>
            </div>
          ))}
        </div>
      </div>
    </WhyUsWrapper>
  );
};

export default WhyUs;
