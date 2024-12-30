import Image from "next/image";

import CropIconOutlined from "@mui/icons-material/Crop";
import StairsOutlinedIcon from "@mui/icons-material/StairsOutlined";
import { urlFor } from "../../lib/client";
import styled from "styled-components";

const SingleProject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .highlight-cards {
    position: relative;
    display: flex;
    gap: 10px;
    width: 100%;
    justify-content: space-between;
  }

  .image {
    position: relative;

    height: 100%;
    width: 100%;
  }

  .title h3 {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--secondary);
    margin-bottom: 0;
  }

  h4 {
    font-size: 11px;
    font-weight: 400;

    font-style: italic;
    margin: 0px 0px 14px 0px;
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
    font-weight: 600;
    width: 100%;
    background-color: #d9d9d9;
    padding: 2px 6px;
    font-size: 0.8rem;
    font-style: italic;
  }
`;

const FeaturedProject = ({ project }) => {
  return (
    <SingleProject>
      <a className="image" href={`/projects/${project.slug.current}`}>
        <Image
          loader={() => urlFor(project.images[0]).url()}
          src={urlFor(project.images[0]).url()}
          fill
          alt="home"
        />
      </a>
      <a href={`/projects/${project.slug.current}`} className="title">
        <h3>{project.name}</h3>
      </a>
      <h4>{`${project.project_area} - ${project.city}`}</h4>
      <div className="highlight-cards">
        <div className="info-block highlights-icon">
          <StairsOutlinedIcon className="info-icon" />
          <span>{project.floors}</span>
        </div>
        <div className="info-block highlights-icon">
          <CropIconOutlined className="info-icon" />
          {`${project.area}ft`}
          <span>
            <sup>2</sup>
          </span>
        </div>
      </div>
    </SingleProject>
  );
};

export default FeaturedProject;
