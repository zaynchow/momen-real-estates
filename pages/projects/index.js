import styled from "styled-components";
import { LeftColumn, RightColumn } from "../../components/Projects";
import { client } from "../../lib/client";
import bgLines from "../../public/bg-lines.png";
import MobileProject from "../../components/Projects/MobileProject";
import { useMediaQuery } from "react-responsive";
import Head from "next/head";

export const DesktopWrapper = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  margin: auto;
  background-image: url(${bgLines?.src});
  background-repeat: repeat;
  background-position: center top;
  width: 100%;
`;

const Projects = ({ projects }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <Head>
        <title>Projects - Momen Real Estates Limited</title>
      </Head>
      {!isMobile ? (
        <DesktopWrapper>
          <LeftColumn projects={projects} />
          <RightColumn projects={projects} />
        </DesktopWrapper>
      ) : (
        <DesktopWrapper>
          <RightColumn projects={projects} />
          <MobileProject projects={projects} />
        </DesktopWrapper>
      )}
    </>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type=="projects"]`;

  let projects = await client.fetch(query);

  return {
    props: {
      projects,
    },
  };
};

export default Projects;
