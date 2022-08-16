import Image from "next/image";
import homeImage from "../../public/home.jpeg";
import BedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import { urlFor } from "../../lib/client";

const FeaturedProject = ({ project }) => {

  return (
    <div className="featured-project">
      <div className="featured-project-image">
        <Image src={urlFor(project.images[0]).url()} layout="fill" alt="home" />
      </div>
      <a href={`/projects/${project.slug.current}`}>
        <h3>{project.name}</h3>
      </a>
      <h4>{`${project.project_area} - ${project.city}`}</h4>
      <div className="highlights">
        <div className="info-block highlights-icon">
          <BedIcon className="info-icon" />
          <span>{project.bedrooms}</span>
        </div>
        <div className="info-block highlights-icon">
          <BathtubOutlinedIcon className="info-icon" />
          <span>{project.bathrooms}</span>
        </div>
        <div className="info-block highlights-icon">
          <HouseOutlinedIcon className="info-icon" />
          {`${project.area}ft`}
          <span>
            <sup>2</sup>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
