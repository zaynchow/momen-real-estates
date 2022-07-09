import Image from "next/image";
import Logo from "../public/logo/MREL-Logo.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-about">
          <h3>About</h3>
          <Image src={Logo} alt="logo" id="logo" height={92} width={92} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            eiusmod tempor incididunt ut abore et dolore magna aliqua.
          </p>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <div className="office-hours">
            <p>Sunday - Thursday</p>
            <p>8am-5pm</p>
          </div>
          <hr />
          <div className="office-hours">
            <p>Saturday</p>
            <p>8am-5pm</p>
          </div>
          <hr />
          <div className="office-hours">
            <p>Friday</p>
            <p>Closed</p>
          </div>
          <hr />
          <a href="tel:0241080681">+8802-41080681</a>
          <p>
            Bari Momen's Heights, Plot -157, Road-12, Block- E, Banani,
            Dhaka,1213
          </p>
          <a href="https://goo.gl/maps/DaRQjSjoUG9txM5G6" target="_blank">
            Get Directions
          </a>
        </div>
        <div className="footer-useful-links">
          <h3>Useful Links</h3>
          <a href="#">Home</a>
          <a href="#">News & Events</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Career</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-social">
          <h3>Find Us Here</h3>
          <a href="https://facebook.com" target="_blank">
            <FacebookRoundedIcon className="footer-social-icon" />
          </a>
          <a href="https://facebook.com" target="_blank">
            <FacebookRoundedIcon className="footer-social-icon" />
          </a>
          <a href="https://facebook.com" target="_blank">
            <FacebookRoundedIcon className="footer-social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
