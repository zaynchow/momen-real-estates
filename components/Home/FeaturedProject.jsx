import Image from "next/image";
import homeImage from "../../public/home.jpeg";
import BedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";

const FeaturedProject = () => {
  return (
    <div className="featured-project">
      <div className="featured-project-image">
        <Image src={homeImage} layout="fill" alt="home" />
      </div>
      <h3>Apon Nibash</h3>
      <h4>Mohakhali - Dhaka</h4>
      <div className="highlights">
        <div className="info-block highlights-icon">
          <BedIcon className="info-icon" />
          <span>3</span>
        </div>
        <div className="info-block highlights-icon">
          <BathtubOutlinedIcon className="info-icon" />
          <span>2</span>
        </div>
        <div className="info-block highlights-icon">
          <HouseOutlinedIcon className="info-icon" />
          8432ft
          <span>
            <sup>2</sup>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
