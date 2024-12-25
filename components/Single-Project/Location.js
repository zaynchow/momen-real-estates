import React from "react";
import styled from "styled-components";
import Map from "./Map";

import Image from "next/image";
import img from "../../public/all-locations-img.svg";
import { useState } from "react";

const LocationContainer = styled.div`
  background-color: white;

  .location-container {
    width: 85%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    gap: 20px;
    flex-direction: column;
    padding: 70px 0;
    align-items: flex-start;
    border-bottom: 1px solid #b5b0b0;
    h4 {
      width: 100%;
      font-size: 1.8rem;
      margin: 0;
      padding-right: 20px;
    }
    .icon-grid {
      display: inline-grid;
      position: relative;
      width: 100%;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas:
        "map map map map"
        "all all schools schools"
        "restaurants restaurants hospitals hospitals"
        "address address address address";
      column-gap: 40px;
      row-gap: 20px;

      .map-container {
        width: 100%;
        height: 400px;
        grid-area: map;
      }

      .locations-btn,
      .schools-btn,
      .restaurants-btn,
      .hospitals-btn {
        border: 1px solid black;
        height: 118px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: flex-end;

        p {
          border-top: 1px solid black;
          margin: 0px;
          text-align: center;
          background: #ecebe9;
          padding: 8px 0;

          width: 100%;
        }
      }

      .locations-btn {
        grid-area: all;

        background-image: url(${`/all-locations-img.svg`});
      }

      .schools-btn {
        grid-area: schools;
        background-image: url(${`/School.svg`});
      }

      .restaurants-btn {
        grid-area: restaurants;
        background-image: url(${`/Restaurants.svg`});
      }
      .hospitals-btn {
        grid-area: hospitals;
        background-image: url(${`/Hospitals.svg`});
      }
      .address {
        grid-area: address;
        width: 100%;
        p {
          font-size: 1.12rem;
        }
        span {
          font-weight: 600;
        }

        a {
          text-decoration: underline;
          font-size: 1.12rem;
        }
      }
    }
  }
  @media only screen and (min-width: 600px) {
    .location-container {
      flex-direction: row;
      gap: 0px;
      h4 {
        width: 20%;
      }
      .icon-grid {
        width: 70%;
        grid-template-areas:
          "map map map map"
          "all schools restaurants hospitals"
          "address address address address";
      }
    }
  }
`;

const Location = ({
  currProj,
  nearbySchools,
  nearbyRestaurants,
  nearbyHospitals,
}) => {
  const [currMapType, setCurrMapType] = useState("all");

  // restaurants = restaurants.map(() => {
  //   map_pos;
  // });

  return (
    <LocationContainer>
      <div className="location-container">
        <h4>Location &amp; Nearby</h4>
        <div className="icon-grid">
          <Map
            currProj={currProj}
            type={currMapType}
            nearbyRestaurants={nearbyRestaurants}
            nearbySchools={nearbySchools}
            nearbyHospitals={nearbyHospitals}
          ></Map>
          <div className="locations-btn" onClick={() => setCurrMapType("all")}>
            <p>All Locations</p>
          </div>
          <div
            className="schools-btn"
            onClick={() => setCurrMapType("nearbySchools")}
          >
            <p>Nearby Schools</p>
          </div>
          <div
            className="restaurants-btn"
            onClick={() => setCurrMapType("nearbyRestaurants")}
          >
            <p>Nearby Restaurants</p>
          </div>
          <div
            className="hospitals-btn"
            onClick={() => setCurrMapType("nearbyHospitals")}
          >
            <p>Nearby Hospitals</p>
          </div>
          <div className="address">
            <p>
              <span>Full Address: </span>
              28 Wyer Street Wari, Dhaka 1203, Bangladesh
            </p>
            <a href="">Get Directions</a>
          </div>
        </div>
      </div>
    </LocationContainer>
  );
};

export default Location;
