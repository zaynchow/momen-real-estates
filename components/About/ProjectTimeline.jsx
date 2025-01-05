import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { urlFor } from "../../lib/client";
import Image from "next/image";
import SliderButton from "../lib/SliderButton";

const ProjectTimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  column-gap: 50px;
  width: 85%;
  max-width: 1200px;
  margin: auto;
  padding: 5rem 0;
  h2 {
    font-weight: 600;
    margin-top: 0;
  }
  .slide-wrapper {
    width: 100%;
    display: flex;
    .left-wrapper {
      display: none;
      width: 50%;
      .image-wrapper {
        width: 440px;
        height: 600px;
        position: relative;
        img {
          z-index: 1;
        }
      }
    }
    .right-wrapper {
      width: 100%;
      position: relative;
      p {
        display: inline-block;

        margin: 0 0 8px 0;
        padding: 20px;
        height: 20px;
      }
    }
  }

  .process-wrapper {
    width: 100%;
    position: relative;
    min-height: 10rem;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    #progress-bar-container {
      position: relative;
      width: 100%;
      margin: 0;
      max-width: 100%;
      overflow-x: hidden;
      overflow-y: visible;
      height: 120px;
      ul {
        padding: 0;
        margin: 0;
        padding-top: 15px;
        max-width: 100%;
        width: 100%;
        margin-top: -40px;
        display: flex;
        justify-content: space-between;
        transition: all ease 0.5s;
        z-index: 2;
        position: relative;
        transform: ${(props) => `translateX(${-props.offsetRight * 20}%)`};
        li {
          list-style: none;
          white-space: nowrap;
          float: left;
          flex: 0 0 20%;
          width: 50%;
          text-align: center;
          color: #aaa;
          text-transform: uppercase;
          font-size: 11px;
          cursor: pointer;
          font-weight: 700;
          transition: all ease 0.2s;
          vertical-align: bottom;
          height: 60px;
          position: relative;
          .step-inner {
            position: absolute;
            width: 100%;
            bottom: 0;
            font-size: 14px;
          }

          &::after {
            content: "";
            display: block;
            width: 18px;
            height: 18px;
            background: var(--bg-light);
            margin: auto;
            border: solid 2px #000;
            border-radius: 50%;
            margin-top: 75px;
            transition: all ease 0.2s;
            position: relative;
            z-index: 9999;
          }
          &:hover {
            color: var(--secondary);
          }
          &.active::after,
          &:hover::after {
            background: var(--secondary);
          }
        }
      }
    }
    #line {
      width: 80%;
      margin: auto;
      background: #000;
      height: 3px;
      position: absolute;
      left: 10%;
      top: 60px;
      border-radius: 50px;
      transition: all ease 0.9s;
      overflow: hidden;

      #line-progress {
        content: " ";
        width: ${(props) =>
          `calc(${
            (props.numOfSlides <= 5 ? 100 / (props.numOfSlides - 1) : 25) *
            (props.idx - props.offsetRight)
          }%)`};
        height: 100%;
        background: var(--secondary);
        position: absolute;
        border-radius: 50px;
        transition: all ease 0.9s;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .slide-wrapper {
      .left-wrapper {
        display: inline-block;
        width: 50%;
      }
      .right-wrapper {
        width: 50%;
        p {
          width: 50%;
        }
      }
    }
    .process-wrapper {
      #progress-bar-container {
        width: 90%;
        ul {
          li {
            width: 50%;
          }
        }
      }
    }
  }
`;

const ProjectTimeline = ({ timelineData }) => {
  const [currSlideIdx, setCurrSlideIdx] = useState(0);
  const [availableRightSlide, setAvailableRightSlide] = useState(0);
  const [availableLeftSlide, setAvailableLeftSlide] = useState(0);

  const onDateClick = (idx) => {
    setCurrSlideIdx(idx);
  };

  useEffect(() => {
    setAvailableRightSlide(
      timelineData.length <= 5 ? 0 : timelineData.length - 5
    );
  }, []);

  const data = [
    ...timelineData,
    // { year: 2024, projects: ["Momen"], picture: wireframe },
    // { year: 2024, projects: ["Navana"], picture: wireframe },
    // { year: 2034, projects: ["Navan"], picture: wireframe },
    // { year: 2024, projects: ["Navana"], picture: wireframe },
    // { year: 2024, projects: ["Momen, ABC, Navana"], picture: wireframe },
    // { year: 2024, projects: ["Momen"], picture: wireframe },
    // { year: 2024, projects: ["Navana"], picture: wireframe },
    // { year: 2034, projects: ["Navan"], picture: wireframe },
  ];

  const rightSlideButtonOnCLick = () => {
    setAvailableRightSlide((prev) => prev - 1);
    setAvailableLeftSlide((prev) => prev + 1);
  };

  const leftSlideButtonOnCLick = () => {
    setAvailableRightSlide((prev) => prev + 1);
    setAvailableLeftSlide((prev) => prev - 1);
  };

  return (
    <ProjectTimelineWrapper
      idx={currSlideIdx}
      numOfSlides={timelineData.length}
      offsetRight={availableLeftSlide}
    >
      <h2>Our projects over the years</h2>

      <div className="process-wrapper">
        {availableLeftSlide > 0 && (
          <SliderButton
            backgroundColor={"var(--secondary)"}
            hoverColor={"white"}
            moveSlide={leftSlideButtonOnCLick}
          />
        )}
        <div id="progress-bar-container">
          <ul>
            {timelineData.map((obj, idx) => (
              <li
                className={idx <= currSlideIdx ? `active` : undefined}
                onClick={() => onDateClick(idx)}
                key={idx}
              >
                <div className="step-inner">{obj.year}</div>
              </li>
            ))}
          </ul>

          <div id="line">
            <div id="line-progress"></div>
          </div>
        </div>
        {availableRightSlide > 0 && (
          <SliderButton
            direction={"next"}
            backgroundColor={"var(--secondary)"}
            hoverColor={"white"}
            moveSlide={rightSlideButtonOnCLick}
          />
        )}
      </div>
      <div className="slide-wrapper">
        <div className="left-wrapper">
          <div
            className="image-wrapper"
            data-content={timelineData[currSlideIdx].year}
          >
            <Image
              src={urlFor(timelineData[currSlideIdx].img).url()}
              alt="about-hero-image"
              fill
            />
          </div>
        </div>
        <div className="right-wrapper">
          {timelineData[currSlideIdx].projects.map((obj, idx) => (
            <p key={idx}>{obj}</p>
          ))}
        </div>
      </div>
    </ProjectTimelineWrapper>
  );
};

export default ProjectTimeline;
