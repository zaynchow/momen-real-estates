import React from "react";
import Image from "next/image";
import { urlFor } from "../../lib/client";
import styled from "styled-components";
import bgLines from "../../public/bg-lines.png";

const AreaWrapper = styled.div`
  background-color: white;
  background-image: url(${bgLines?.src});
  background-repeat: repeat;
  background-position: center top;

  .area {
    width: 85%;
    max-width: 1200px;
    margin: auto;
  }
  .area-container-desktop {
    display: none;
  }
  .area-container-mobile {
    display: flex;
    flex-wrap: wrap;
    z-index: 100;
    gap: 10px;

    justify-content: center;
    .block {
      width: 48%;
      height: 45vw;
      position: relative;
    }
    .location-name {
      position: absolute;
      bottom: 1rem;
      left: 1rem;
      padding: 0.2rem 0.6rem;
      background: white;
    }

    .location-name h2 {
      font-family: "Montserrat";
      margin: 0;
      font-weight: 400;
      line-height: 20px;
      font-size: 0.7rem;
    }
  }

  .area {
    width: 85%;
    max-width: 1200px;
    text-align: center;
    padding-top: 8rem;
    padding-bottom: 8rem;
    margin: auto;
  }

  .area h2 {
    font-weight: 700;
    line-height: 0;
  }

  .area h4 {
    font-weight: 400;
    margin: 0;
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 600px) {
    .area-container-mobile {
      display: none;
    }
    .area-container-desktop {
      display: inline-block;
      width: 100%;
    }
    .area {
      text-align: center;
      padding-top: 8rem;
      padding-bottom: 8rem;
      margin: auto;
      /* background-color: black; */
    }

    .area h2 {
      /* font-size: 2rem; */
      font-weight: 700;
      line-height: 0;
    }

    .area h4 {
      font-weight: 400;
      margin: 0;
      margin-bottom: 2rem;
    }

    .area-section {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .area-container-desktop {
      display: flex;
      margin-top: 3.5rem;
    }

    .area-container-desktop > div {
      width: 27vw;
      max-width: 400px;
      height: 72vh;
      position: relative;
    }

    .column1 {
      margin: 3px;

      background-color: #d9d9d9;
    }

    .location-name {
      position: absolute;
      bottom: 1rem;
      left: 1rem;
      padding: 0.5rem 1rem;
      background: white;
    }

    .location-name h2 {
      font-family: "Montserrat";
      margin: 0;
      font-weight: 400;

      line-height: 30px;
      font-size: 1rem;
    }

    .column2 {
      margin: 3px;

      display: flex;
      flex-direction: column;

      margin-top: 5rem;
    }
    .column3 {
      margin: 3px;

      background-color: #d9d9d9;

      margin-top: 10rem;
    }

    .column2 .row1 {
      position: relative;
      margin-bottom: 3px;
      flex: 1;
      background-color: #d9d9d9;
    }

    .column2 .row2 {
      position: relative;
      margin-top: 3px;
      flex: 1;
      background-color: #d9d9d9;
    }
  }
`;

const Area = ({ places }) => {
  return (
    <AreaWrapper className="area-wrapper">
      <div className="area">
        <h2>Most Popular Areas</h2>
        <h4>Find yourself a home in the area you love</h4>
        <div className="area-section">
          <div className="area-container-desktop">
            <div className="column1">
              <Image
                loader={() => urlFor(places[0].location_img).url()}
                src={urlFor(places[0].location_img).url()}
                fill
                alt="home"
              />
              <div className="location-name">
                <h2>{places[0].location_name}</h2>
              </div>
            </div>
            <div className="column2">
              <div className="row1">
                <Image
                  loader={() => urlFor(places[1].location_img).url()}
                  src={urlFor(places[1].location_img).url()}
                  layout="fill"
                  alt="home"
                />
                <div className="location-name">
                  <h2>{places[1].location_name}</h2>
                </div>
              </div>
              <div className="row2">
                <Image
                  loader={() => urlFor(places[2].location_img).url()}
                  src={urlFor(places[2].location_img).url()}
                  layout="fill"
                  alt="home"
                />
                <div className="location-name">
                  <h2>{places[2].location_name}</h2>
                </div>
              </div>
            </div>
            <div className="column3">
              <Image
                loader={() => urlFor(places[3].location_img).url()}
                src={urlFor(places[3].location_img).url()}
                layout="fill"
                alt="home"
              />
              <div className="location-name">
                <h2>{places[3].location_name}</h2>
              </div>
            </div>
          </div>
          <div className="area-container-mobile">
            <div className="block">
              <Image
                loader={() => urlFor(places[0].location_img).url()}
                src={urlFor(places[0].location_img).url()}
                fill
                alt="home"
              />
              <div className="location-name">
                <h2>{places[0].location_name}</h2>
              </div>
            </div>
            <div className="block">
              <Image
                loader={() => urlFor(places[1].location_img).url()}
                src={urlFor(places[1].location_img).url()}
                layout="fill"
                alt="home"
              />
              <div className="location-name">
                <h2>{places[1].location_name}</h2>
              </div>
            </div>
            <div className="block">
              <Image
                loader={() => urlFor(places[2].location_img).url()}
                src={urlFor(places[2].location_img).url()}
                layout="fill"
                alt="home"
              />
              <div className="location-name">
                <h2>{places[2].location_name}</h2>
              </div>
            </div>
            <div className="block">
              <Image
                loader={() => urlFor(places[3].location_img).url()}
                src={urlFor(places[3].location_img).url()}
                layout="fill"
                alt="home"
              />
              <div className="location-name">
                <h2>{places[3].location_name}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AreaWrapper>
  );
};

export default Area;
