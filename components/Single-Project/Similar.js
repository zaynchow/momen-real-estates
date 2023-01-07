import React from "react";
import styled from "styled-components";
import FeaturedProject from "../Projects/FeaturedProject";

const SimilarContainer = styled.div`
  background-color: white;

  .similar-container {
    width: 85%;
    max-width: 1200px;
    margin: auto;

    padding: 70px 0;
    align-items: flex-start;
    border-bottom: 1px solid #b5b0b0;
    & > h4 {
      font-size: 1.8rem;
      margin: 0;
    }
    .properties-grid {
      padding-top: 40px;
      display: inline-grid;
      width: 90%;
      column-gap: 50px;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      height: 400px;
    }
  }
`;
const Similar = ({ projects }) => {
  return (
    <SimilarContainer>
      <div className="similar-container">
        <h4>Similar Properties</h4>
        <div className="properties-grid">
          <FeaturedProject project={projects[1]} />
          <FeaturedProject project={projects[0]} />
          <FeaturedProject project={projects[0]} />
          <FeaturedProject project={projects[0]} />
        </div>
      </div>
    </SimilarContainer>
  );
};

export default Similar;
