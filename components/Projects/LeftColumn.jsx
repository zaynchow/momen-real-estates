import styled from "styled-components";
import Map from "../Home/Map";

const LeftColumn = ({ projects }) => {
  return <Map project_locations={projects} />;
};

export default LeftColumn;
