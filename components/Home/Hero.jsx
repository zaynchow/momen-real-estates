import React from "react";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import bgLines from "../../public/bg-lines.png";
import Slider from "./Slider/Slider";
import styled from "styled-components";

const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  background-image: url(${bgLines?.src});
  background-repeat: repeat;
  background-position: center top;
  flex-direction: column-reverse;

  .hero-sidebar {
    display: flex;
    width: 100%;
    height: fit-content;

    .hero-sidebar-content {
      bottom: 30px;
      .hero-sidebar-icon {
        display: none;
      }
      h1 {
        margin-top: 20px;
        font-size: 1.2rem;
        text-align: center;
        margin-bottom: 20px;
        padding: 20px;
        font-weight: 500;
        span {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--secondary);
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    .hero-sidebar {
      position: relative;
      width: 23%;
      height: 100vh;
      .hero-sidebar-content {
        position: absolute;
        padding-left: 40px;
        .hero-sidebar-icon {
          display: inline-block;
        }
        h1 {
          width: 75%;
          text-align: left;
          font-size: 1.1rem;
          padding: 0;
          font-weight: inherit;
          span {
            font-size: 1.1rem;
            font-weight: 500;
            color: var(--secondary);
          }
        }
        a {
          display: inline-block;
          padding: 0.5rem 1.1rem;
          background-color: black;
          color: white;
          font-size: 2rem;
          border: 1px solid transparent;
          transition: all 0.3s ease-in-out;
          &:hover {
            background-color: transparent;
            color: black;
            border: 2px solid black;
          }
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
            Partner with <span>Momen Real Estates LTD</span> — where
            unparalleled quality meets timeless sophistication.
          </h1>
          <a href="#home-featured">
            <ArrowDownwardOutlinedIcon className="hero-sidebar-icon" />
          </a>
        </div>
      </div>
      <Slider sliderContent={sliderContent} />
    </HeroWrapper>
  );
};

export default Hero;
