import styled from "styled-components";
import Map from "../Home/Map";

const LeftColumnContainer = styled.div`
  border: 40px solid rgb(255, 255, 255, 0);
  border-left: calc(100vw * 0.025) solid rgb(255, 255, 255, 0);
  width: 50%;
  position: relative;
  .map-container {
    width: 100%;
    height: 100%;
  }
`;

const LeftColumn = ({ projects }) => {
  return (
    <LeftColumnContainer>
      <Map project_locations={projects} />
    </LeftColumnContainer>
  );
};

export default LeftColumn;
