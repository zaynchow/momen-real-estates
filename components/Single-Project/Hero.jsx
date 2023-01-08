import React from "react";
import styled from "styled-components";
import bgLines from "../../public/bg-lines.png";

const HeroWrapper = styled.div`
  background-image: url(${bgLines?.src});
  background-repeat: repeat;
  background-position: center top;
  .hero-wrapper {
    display: flex;
    width: 85%;
    max-width: 1200px;
    margin: auto;
    column-gap: 100px;
    padding-bottom: 60px;
    .col1 {
      width: 80%;
      h1 {
        font-weight: 700;

        text-transform: uppercase;
        color: var(--secondary);
      }
      .highlight-specs {
        display: flex;
        justify-content: space-between;
      }
      h3 {
        span {
          font-weight: 600;
        }
      }
      h2 {
        font-size: 1.2rem;
        font-weight: 400;
      }
    }
    .col2 {
      width: 20%;
      .booking-req-btn {
        font-family: Roboto;
        font-weight: 500;
        color: white;
        display: inline-block;
        padding: 15px 30px;
        background-color: #e7ae4b;
        cursor: pointer;
      }
    }
  }
`;

const Hero = ({ scrollRef }) => {
  return (
    <HeroWrapper>
      <div className="hero-wrapper">
        <div className="col1">
          <h1>Momen&apos;s Apon Nibash</h1>
          <div className="highlight-specs">
            <h3>
              <span>Location: </span>
              Gulshan
            </h3>
            <h3>
              <span>Size: </span>
              Gulshan
            </h3>
            <h3>
              <span>Status: </span>
              Ongoing
            </h3>
          </div>
          <h2>
            Smart living features highlight the lake-facing, palatial 7000+sft
            units, in Gulshan 2. Stunning amenities paired with top-notch health
            and wellness facilities enable a high-powered and luxurious
            lifestyle for
          </h2>
        </div>
        <div className="col2">
          <a
            className="booking-req-btn"
            onClick={() => scrollRef.current.scrollIntoView()}
          >
            Request a booking
          </a>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
