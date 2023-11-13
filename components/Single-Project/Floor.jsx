import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { urlFor } from "../../lib/client";

//TODO: Add transition animation

const FloorContainer = styled.div`
  background: white;

  .MuiAccordion-root {
    background: transparent;
    box-shadow: none;
    border: 1px solid black;
  }
  .MuiAccordionSummary-content {
    margin: 0;

    & > p {
      width: 33%;
      flex-shrink: 0;
      font-weight: 600;
    }
  }
  .MuiAccordionSummary-expandIconWrapper.Mui-expanded {
    transform: rotate(45deg);
  }
  .MuiAccordionSummary-expandIconWrapper {
    transition: transform 0.3s ease-out;
  }
  .highlight-desc {
    p {
      display: inline-block;
      margin-right: 30px;
      span {
        font-weight: 600;
      }
    }
  }
  .floor-container {
    width: 85%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    padding: 70px 0;
    align-items: flex-start;
    border-bottom: 1px solid #b5b0b0;
    h4 {
      width: 20%;
      font-size: 1.8rem;
      margin: 0;
    }
    .accordion-container {
      width: 70%;
    }
  }
`;

{
  /* <Image
src="/icons/accordion-open-icon.svg"
alt="open-icon"
width={20}
height="20"
/> */
}

const Floor = ({ currProj }) => {
  return (
    <FloorContainer>
      <div className="floor-container">
        <h4>Floor Plans</h4>
        <div className="accordion-container">
          {currProj.floor_plans?.map((single_floor, idx) => (
            <Accordion square disableGutters key={idx}>
              <AccordionSummary
                expandIcon={
                  <Image
                    src="/icons/accordion-open-icon.svg"
                    alt="open-icon"
                    width={20}
                    height="20"
                  />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p>{single_floor.unit_name}</p>
                <div className="highlight-desc">
                  {single_floor.area && (
                    <p>
                      <span>Size: </span>
                      {single_floor.area} sqft
                    </p>
                  )}
                  {single_floor.bedrooms && (
                    <p>
                      <span>Bedrooms: </span>
                      {single_floor.bedrooms}
                    </p>
                  )}

                  {single_floor.bathrooms && (
                    <p>
                      <span>Bathrooms: </span>
                      {single_floor.bathrooms}
                    </p>
                  )}
                </div>
              </AccordionSummary>
              <AccordionDetails>
                {single_floor.desc && <p>{single_floor.desc}</p>}
                {single_floor.floor_image && (
                  <Image
                    src={urlFor(single_floor.floor_image).url()}
                    width={500}
                    height={500}
                    loader={() => urlFor(single_floor.floor_image).url()}
                    alt="Floor Image"
                  />
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </FloorContainer>
  );
};

export default Floor;
