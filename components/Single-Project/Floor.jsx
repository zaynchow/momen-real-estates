import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { urlFor } from "../../lib/client";


const FloorContainer = styled.div`
  background: white;

  .MuiAccordion-root {
    background: transparent;
    box-shadow: none;
    border: 1px solid black;
  }
  .MuiAccordionSummary-content {
    margin: 0;
    padding: 20px 0;
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
    width: 100%;
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    p {
      margin-right: 30px;
      margin-bottom: 0;

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
    gap: 20px;
    flex-direction: column;
    padding: 70px 0;
    align-items: flex-start;
    border-bottom: 1px solid #b5b0b0;
    h4 {
      width: 100%;
      font-size: 1.8rem;
      margin: 0;
      line-height: 1;
    }
    .accordion-container {
      width: 100%;
    }
  }
  @media only screen and (min-width: 600px) {
    .highlight-desc {
      p {
        display: inline-block;
        margin-right: 30px;
      }
    }
    .floor-container {
      flex-direction: row;
      gap: 0px;
      h4 {
        width: 20%;
      }
      .accordion-container {
        width: 80%;
      }
    }
  }
`;



const Floor = ({ currProj }) => {
  return (
    <FloorContainer>
      {currProj.floor_plans && (
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
      )}
    </FloorContainer>
  );
};

export default Floor;
