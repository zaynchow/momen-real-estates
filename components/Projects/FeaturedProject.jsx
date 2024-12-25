import Image from "next/image";
import homeImage from "../../public/home.jpeg";
import BedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
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
    background-color: #d9d9d9;
    font-size: clamp(3px, calc(3px + 0.3vw), 16px);
    font-style: italic;
  }

  @media screen and (max-width: 1100px) {
    .highlights-cards {
      display: none;
    }
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
        <div className="info highlight-icon">
          <BedIcon className="icon" />
          <span>{project.bedrooms}</span>
        </div>
        <div className="info highlight-icon">
          <BathtubOutlinedIcon className="icon" />
          <span>{project.bathrooms}</span>
        </div>
        <div className="info highlight-icon">
          <HouseOutlinedIcon className="icon" />
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
