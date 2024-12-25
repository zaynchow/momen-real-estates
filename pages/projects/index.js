import styled from "styled-components";
import { LeftColumn, RightColumn } from "../../components/Projects";
import { client } from "../../lib/client";
import bgLines from "../../public/bg-lines.png";
import MobileProject from "../../components/Projects/MobileProject";
import { useMediaQuery } from "react-responsive";

export const DesktopWrapper = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  margin: auto;
  background-image: url(${bgLines?.src});
  background-repeat: repeat;
  background-position: center top;
  width: 100%;
  .map-container {
    border: 40px solid rgb(255, 255, 255, 0);
    border-left: calc(100vw * 0.025) solid rgb(255, 255, 255, 0);
    width: 50%;
  }
`;

const Projects = ({ projects }) => {
  const isMobile = useMediaQuery({ maxWidth: 600 });

  return !isMobile ? (
    <DesktopWrapper>
      <LeftColumn projects={projects} />
      <RightColumn projects={projects} />
    </DesktopWrapper>
  ) : (
    <DesktopWrapper>
      <RightColumn projects={projects} />
    </DesktopWrapper>
  );
};

export const getStaticProps = async () => {
  const query = `*[_type=="projects"]`;

  let projects = await client.fetch(query);

  return {
    props: {
      projects,
    },
  };
};

export default Projects;
