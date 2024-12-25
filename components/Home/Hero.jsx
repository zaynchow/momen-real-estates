import React from "react";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import bgLines from "../../public/bg-lines.png";
import Slider from "./Slider/Slider";
import styled from "styled-components";

const HeroWrapper = styled.div`
  width: 100%;
  display: flex;

  background-repeat: repeat;
  background-position: center top;
  flex-direction: column-reverse;

  .hero-sidebar {
    display: flex;
    width: 100%;
    height: fit-content;

    .hero-sidebar-content {
      bottom: 30px;

      h1 {
        margin-top: 20px;
        font-size: 1.2rem;
        text-align: center;
        margin-bottom: 20px;
        padding: 20px;
        font-weight: 500;
      }

      span {
        display: none;

        padding: 0.8rem;
        background-color: black;
        color: white;
        font-size: 2rem;
      }
    }
  }

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    .hero-sidebar {
      position: relative;
      width: 28%;
      height: 100vh;
      .hero-sidebar-content {
        position: absolute;
        padding-left: 40px;

        h1 {
          width: 75%;
          text-align: left;
          font-size: 1.1rem;
          padding: 0;
          font-weight: inherit;
        }
        span {
          display: inline-block;
        }
      }
    }
  }
`;

const Hero = ({ sliderContent }) => {
  return (
    <HeroWrapper>
      <div className="hero-sidebar">
        <div className="hero-sidebar-content">
          <h1>
            Join with Momen Real Estates LTD for a commitment to quality &
            attention to sofistication.
          </h1>
          <span>
            <ArrowDownwardOutlinedIcon className="hero-sidebar-icon" />
          </span>
        </div>
      </div>
      <Slider sliderContent={sliderContent} />
    </HeroWrapper>
  );
};

export default Hero;
