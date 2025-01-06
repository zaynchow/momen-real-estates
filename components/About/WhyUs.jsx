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
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 50px;

  .inner-wrapper {
    width: 85%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    gap: 70px;
    flex-direction: column;
    align-items: center;
    column-gap: 200px;
    .left-column {
      display: flex;
      gap: 10px;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;

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
        font-size: 1.8rem;
        margin-top: 20px;
        margin-bottom: 15px;
        line-height: 1.3;
      }
    }
    .right-column {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      row-gap: 30px;
      div {
        width: 50%;
        display: flex;
        align-items: flex-start;

        p {
          margin: 0 0 0 20px;
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    padding: 150px 0;
    .inner-wrapper {
      flex-direction: row;
      gap: 100px;
      .left-column {
        width: 50%;
        h3 {
          font-size: 2.5rem;
          line-height: 3rem;
        }
      }
      .right-column {
        width: 50%;
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
            We prioritize balanced living by fostering interactive,
            well-being-focused environments. With meticulous planning, premium
            materials, and skilled professionals, we deliver top-quality
            projects on time, exceeding customer expectations.
          </h3>
          <Button href="/contact" isLink>
            Contact Us
          </Button>
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
