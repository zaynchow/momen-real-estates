import React from "react";
import styled from "styled-components";
import bgLines from "../../public/bg-lines.png";
import PortableText from "react-portable-text";

const HeroWrapper = styled.div`
  background-image: url(${bgLines?.src});
  background-repeat: repeat;
  background-position: center top;
  .hero-wrapper {
    display: flex;
    flex-direction: column;
    width: 85%;
    max-width: 1200px;
    margin: auto;
    column-gap: 100px;
    padding-bottom: 60px;
    .col1 {
      width: 100%;
      h1 {
        font-weight: 700;
        margin-bottom: 0;
        text-transform: uppercase;
        color: var(--secondary);
      }
      .highlight-specs {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
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
      width: 100%;
      .booking-req-btn {
        font-family: Roboto;
        font-weight: 500;
        color: white;
        display: inline-block;
        padding: 15px 30px;
        background-color: #e7ae4b;
        cursor: pointer;
        &:hover {
          background-color: transparent;
          color: var(--secondary);
          outline: var(--secondary);
          border: 1px solid var(--secondary);
        }
      }
    }
  }
  @media only screen and (min-width: 600px) {
    .hero-wrapper {
      flex-direction: row;
      .col1 {
        width: 80%;
        h1 {
          margin-bottom: inherit;
        }
      }
      .col2 {
        width: 20%;
      }
    }
  }
`;

const Hero = ({ scrollRef, currProj }) => {
  return (
    <HeroWrapper>
      <div className="hero-wrapper">
        <div className="col1">
          <h1>{currProj.name}</h1>
          <div className="highlight-specs">
            <h3>
              <span>Location: </span>
              {currProj.project_area}
            </h3>
            <h3>
              <span>Size: </span>
              {currProj.area} sqft
            </h3>
            <h3>
              <span>Status: </span>
              {currProj.status}
            </h3>
          </div>
          <h2>
            {currProj.desc && (
              <PortableText
                content={currProj?.desc}
                serializers={{ break: (props) => <br /> }}
              />
            )}
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
