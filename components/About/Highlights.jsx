import React from "react";
import styled from "styled-components";
import bgLines from "../../public/bg-lines.png";

const HighlightsWrapper = styled.div`
  background-image: url(${bgLines?.src});
  background-repeat: repeat;
  background-position: center top;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-top: 6rem;
  padding-bottom: 6rem;
  .inner-wrapper {
    width: 85%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 100px;
    .single-highlight {
      display: flex;
      flex-direction: column;
      align-items: center;
      .number {
        font-size: 5rem;
        font-weight: 600;
        color: var(--secondary);
        margin: 0;
        line-height: normal;
      }
      .title {
        font-weight: 600;
        font-size: 1.2rem;
      }
      hr {
        width: 100%;
        height: 2px;
        background-color: black;
        color: black;
        border: 0;
      }
      .description {
        text-align: center;
      }
    }
  }
  @media screen and (min-width: 600px) {
    padding-top: 10rem;
    padding-bottom: 10rem;
    .inner-wrapper {
      flex-direction: row;
    }
  }
`;

const Highlights = ({ highlightsData }) => {
  return (
    <HighlightsWrapper>
      <div className="inner-wrapper">
        {highlightsData?.map((obj, idx) => (
          <div className="single-highlight" key={idx}>
            <p className="number">{obj.heading}</p>
            <p className="title">{obj.sub_heading}</p>
            <hr />
            <p className="description">
              {obj.body ? obj.body[0]?.children[0]?.text : ""}
            </p>
          </div>
        ))}
      </div>
    </HighlightsWrapper>
  );
};

export default Highlights;
