import React from "react";
import { urlFor } from "../../lib/client";
import BedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import Image from "next/image";
import Button from "../lib/Button";
import styled from "styled-components";

const SingleProjectListItemWrapper = styled.div`
  border: 1px solid grey;
  border-radius: 10px;
  padding: 20px;
  position: relative;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  .project-img {
    position: relative;
    width: 200px;
    height: 200px;
  }
  h3 {
    margin: 0;
    font-weight: 500;
    font-size: 1.5rem;
    color: var(--secondary);
  }
  h4 {
    font-size: 11px;
    font-weight: 400;

    font-style: italic;
    margin: 0px 0px 14px 0px;
  }
  hr {
    width: 90%;
    margin: 10px 0px;
  }
  .highlight-cards {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    width: 100%;
    justify-content: flex-start;
  }
  .highlight-icon {
    display: flex;
    align-items: center;
  }

  .icon {
    margin: 0px 5px 0px 3px;
    width: 0.9rem;
    height: 0.9rem;
    font-weight: 700;
  }

  .info {
    padding: 2px 10px;
    font-weight: 600;
    background-color: #d9d9d9;
    font-size: 0.8rem;
    font-style: italic;
  }
  .project-info {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .project-details-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      p {
        font-size: 0.8rem;
        margin-top: 0;
        span {
          font-weight: 500;
        }
      }
    }
    .action-btns-wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;
      > div {
        margin: 0px;
      }
      a {
        margin: 0;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .project-info {
      .action-btns-wrapper {
        flex-direction: row;
        justify-content: flex-end;
        align-items: flex-end;
      }
      .project-img {
        height: 100%;
      }
    }
  }
`;

const SingleProjectListItem = ({ singleProjectInfo }) => {
  return (
    <SingleProjectListItemWrapper>
      <div className="project-img">
        <a
          className="image"
          href={`/projects/${singleProjectInfo.slug.current}`}
        >
          <Image
            loader={() => urlFor(singleProjectInfo.images[0]).url()}
            src={urlFor(singleProjectInfo.images[0]).url()}
            fill
            alt="home"
          />
        </a>
      </div>

      <div className="project-info">
        <div className="project-details-wrapper">
          <a
            className="image"
            href={`/projects/${singleProjectInfo.slug.current}`}
          >
            <h3>{singleProjectInfo.name}</h3>
          </a>
          <h4>{`${singleProjectInfo.project_area} - ${singleProjectInfo.city}`}</h4>
          <div className="highlight-cards">
            <div className="info highlight-icon">
              <BedIcon className="icon" />
              <span>{`${singleProjectInfo.bedrooms} Bedrooms`}</span>
            </div>
            <div className="info highlight-icon">
              <BathtubOutlinedIcon className="icon" />
              <span>{`${singleProjectInfo.bathrooms} bathrooms`}</span>
            </div>
            <div className="info highlight-icon">
              <HouseOutlinedIcon className="icon" />
              {`${singleProjectInfo.area}ft`}
              <span>
                <sup>2</sup>
              </span>
            </div>
          </div>
          <hr />
          <p>
            <span>Address: </span>
            {singleProjectInfo.full_address}
          </p>
        </div>
        <div className="action-btns-wrapper">
          <Button
            isLink
            href={`/projects/${singleProjectInfo.slug.current}`}
            light
          >
            View Details
          </Button>
          <Button
            isLink
            href={`/projects/${singleProjectInfo.slug.current}/#proj-contact-section`}
          >
            Inquire
          </Button>
        </div>
      </div>
    </SingleProjectListItemWrapper>
  );
};

export default SingleProjectListItem;
