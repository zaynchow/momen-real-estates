import Image from "next/image";
import CropIconOutlined from "@mui/icons-material/Crop";
import StairsOutlinedIcon from "@mui/icons-material/StairsOutlined";
import { urlFor } from "../../lib/client";
import styled from "styled-components";

const FeaturedProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  .highlights {
    display: flex;
    column-gap: 0.2rem;
  }

  .featured-project-image {
    position: relative;
    width: 100%;
    height: 350px;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--secondary);
    margin-bottom: 0;
  }

  h4 {
    font-size: 1rem;
    font-weight: 400;
    margin-top: 6px;
    font-style: italic;
  }

  .highlights-icon {
    display: flex;
    align-items: center;
  }

  .info-icon {
    margin-right: 5px;
  }

  .info-block {
    padding: 0.3rem 1.2rem;
    background-color: #d9d9d9;
    font-size: 1rem;
    font-style: italic;
  }

  @media only screen and (min-width: 768px) {
    max-width: 23%;
  }
`;

const FeaturedProject = ({ project }) => {
  return (
    <FeaturedProjectWrapper className="featured-project">
      <div
        className="featured-project-image"
        href={`/projects/${project.slug.current}`}
      >
        <Image
          loader={() => urlFor(project.images[0]).url()}
          src={urlFor(project.images[0]).url()}
          fill
          alt="home"
        />
      </div>
      <a href={`/projects/${project.slug.current}`}>
        <h3>{project.name}</h3>
      </a>
      <h4>{`${project.project_area} - ${project.city}`}</h4>
      <div className="highlights">
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
    </FeaturedProjectWrapper>
  );
};

export default FeaturedProject;
 