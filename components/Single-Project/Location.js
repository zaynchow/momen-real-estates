import React from "react";
import styled from "styled-components";
import Map from "../Home/Map";
import Image from "next/image";
import img from "../../public/all-locations-img.svg";

const LocationContainer = styled.div`
  background-color: white;

  .location-container {
    width: 85%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    padding: 55px 0;
    align-items: flex-start;
    border-bottom: 1px solid #b5b0b0;
    h4 {
      width: 20%;
      font-size: 1.8rem;
    }
    .icon-grid {
      display: inline-grid;
      position: relative;
      width: 70%;

      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas:
        "map map map map"
        "all schools restaurants hospitals"
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
        span {
          font-weight: 600;
        }
        a {
          text-decoration: underline;
        }
      }
    }
  }
`;

const Location = ({ projects }) => {
  return (
    <LocationContainer>
      <div className="location-container">
        <h4>Location &amp; Nearby</h4>
        <div className="icon-grid">
          <Map project_locations={projects}></Map>
          <div className="locations-btn">
            <p>All Locations</p>
          </div>
          <div className="schools-btn">
            <p>Nearby Schools</p>
          </div>
          <div className="restaurants-btn">
            <p>Nearby Restaurants</p>
          </div>
          <div className="hospitals-btn">
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
