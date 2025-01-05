import React from "react";
import styled from "styled-components";
import bgLines from "../../public/bg-lines.png";
import Button from "../lib/Button";
import PortableText from "react-portable-text";
import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import VideoCameraBackOutlinedIcon from "@mui/icons-material/VideoCameraBackOutlined";
import Map from "./Map";

const WhoAreWeWrapper = styled.div`
  padding: 8rem 0 0 0;
  background-image: url(${bgLines?.src});
  background-repeat: repeat;
  background-position: center top;
  background-color: #f8f8f8;
  overflow: hidden;
  .who-are-we-section {
    width: 85%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column-reverse;

    > div:nth-child(1) {
      max-width: 100%;
      margin-top: -200px;
      margin-bottom: 120px;
    }

    > div {
      h2 {
        font-size: 4rem;
        font-weight: 600;
        margin-bottom: 20px;
        line-height: 1.2;

        span {
          margin: 0;
          display: block;
          color: var(--secondary);
        }
      }
      p {
        margin: 0;
      }
      a {
        margin-top: 30px;
      }

      .icon-container {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        gap: 10px;
        > div {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          > div {
            display: flex;
            align-items: center;
            gap: 20px;
            svg {
              font-size: 30px;
              position: relative;
              &::before {
                position: absolute;
                top: 0;
                width: 100%;
                background: var(--secondary);
              }
            }
          }
        }
      }
      > img {
        border: 8px solid var(--secondary);

        width: 60vw;
        height: 60vw;
        filter: grayscale(30%);
        &:hover {
          filter: none;
        }
      }
      .map-container {
        height: 70vw;
        width: 70vw;
        top: -50vw;
        left: 60px;
      }
      .map-info-window h5 {
        font-size: 1.4rem;
        margin: 0;
        margin: 6px 0;
        color: var(--secondary);
      }

      .map-info-window a {
        font-size: 0.9rem;
        text-decoration: underline;
      }
    }
  }
  @media only screen and (min-width: 600px) {
    .who-are-we-section {
      flex-direction: row;
      gap: 200px;
      > div:nth-child(1) {
        max-width: 40%;
      }

      > div {
        h2 {
          font-size: 5rem;
        }
        > img {
          height: 400px;
          width: 400px;
        }
        .map-container {
          height: 400px;
          width: 400px;
          top: -200px;
          left: 100px;
        }
      }
    }
  }
`;

const WhoAreWe = ({ project_locations, about }) => {
  return (
    <WhoAreWeWrapper>
      <div className="who-are-we-section">
        <div>
          <h2>
            Who Are <span>We</span>
          </h2>

          <PortableText
            content={about}
            serializers={{ break: (props) => <br /> }}
          />

          <div className="icon-container">
            <div>
              <div>
                <ApartmentOutlinedIcon />
                <p>Modern Architecture</p>
              </div>
              <div>
                <FitnessCenterOutlinedIcon />
                <p>Premium Amenities</p>
              </div>
            </div>
            <div>
              <div>
                <EnergySavingsLeafOutlinedIcon />
                <p>Sustainable Living</p>
              </div>
              <div>
                <VideoCameraBackOutlinedIcon />
                <p>Surveillance Security</p>
              </div>
            </div>
          </div>
          <Button href={"/about"} light isLink>
            About Us
          </Button>
        </div>
        <div className="right-section">
          <img src="/momen-building.jpg" alt="Momen Head Office" />
          <Map project_locations={project_locations} />
        </div>
      </div>
    </WhoAreWeWrapper>
  );
};

export default WhoAreWe;
