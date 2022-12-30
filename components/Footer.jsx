import Image from "next/image";
import Logo from "../public/logo/MREL-Logo.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import styled from "styled-components";
import bgLines from "../public/bg-lines.png";

const FooterWrapper = styled.div`
  background-color: #ecebe9;
  padding-left: 4rem;
  padding-right: 6rem;
  padding-top: 2rem;
  padding-bottom: 5.159rem;
  background-image: url(${bgLines?.src});
  background-repeat: repeat;
  background-position: center top;
  display: block;
  .footer-content {
    display: flex;
    justify-content: space-between;
    & > div:nth-of-type(1),
    & > div:nth-of-type(2) {
      width: 25%;
    }
    .office-hours {
      display: flex;
      justify-content: space-between;
    }
    .footer-contact {
      hr:nth-of-type(3) {
        margin-bottom: 2rem;
      }
      a:nth-of-type(2) {
        text-decoration: underline;
      }
    }

    .footer-contact hr {
      margin: 0px;
    }
    .footer-social a {
      color: #e7ae4b;
      padding-right: 0.5rem;
    }
    .footer-social-icon {
      font-size: 1.7rem;
    }
    .footer-useful-links a {
      display: block;
      padding-bottom: 1rem;
    }
  }
  h2 {
    margin-bottom: 1.78vw;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-content">
        <div className="footer-about">
          <h4>About</h4>
          <Image src={Logo} alt="logo" id="logo" height={92} width={102} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            eiusmod tempor incididunt ut abore et dolore magna aliqua.
          </p>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
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
            Bari Momen&apos;s Heights, Plot -157, Road-12, Block- E, Banani,
            Dhaka,1213
          </p>
          <a
            href="https://goo.gl/maps/DaRQjSjoUG9txM5G6"
            target="_blank"
            rel="noreferrer"
          >
            Get Directions
          </a>
        </div>
        <div className="footer-useful-links">
          <h4>Useful Links</h4>
          <a href="#">Home</a>
          <a href="#">News & Events</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Career</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-social">
          <h4>Find Us Here</h4>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FacebookRoundedIcon className="footer-social-icon" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FacebookRoundedIcon className="footer-social-icon" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FacebookRoundedIcon className="footer-social-icon" />
          </a>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
