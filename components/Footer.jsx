import Image from "next/image";
import Logo from "../public/logo/MREL-Logo.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import styled from "styled-components";
import bgLines from "../public/bg-lines.png";
import Link from "next/link";
import PortableText from "react-portable-text";

const FooterWrapper = styled.div`
  color: black;
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
    flex-direction: column;
    gap: 40px;

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
  @media only screen and (min-width: 768px) {
    .footer-content {
      flex-direction: row;
      gap: 0px;
      & > div:nth-of-type(1),
      & > div:nth-of-type(2) {
        width: 25%;
      }
    }
  }
`;

const Footer = ({ footerData }) => {
  return (
    <FooterWrapper>
      <div className="footer-content">
        <div className="footer-about">
          <h4>About</h4>
          <Image src={Logo} alt="logo" id="logo" height={92} width={102} />
          <PortableText
            content={footerData?.footerContent?.footer_text}
            serializers={{ break: (props) => <br /> }}
          />
        </div>
        <div className="footer-contact" id="footer-contact">
          <h4>Contact Us</h4>
          <div>
            <div className="office-hours">
              <p>Sunday - Thursday</p>
              <p>{footerData?.hoursOfOperation?.sunday_to_thursday_hours}</p>
            </div>
            <hr />
            <div className="office-hours">
              <p>Friday</p>
              <p>{footerData?.hoursOfOperation?.friday_hours}</p>
            </div>
            <hr />
            <div className="office-hours">
              <p>Saturday</p>
              <p>{footerData?.hoursOfOperation?.saturday_hours}</p>
            </div>
            <hr />
          </div>

          <a href={`tel:${footerData?.contactInfo?.primary_phone_number}`}>
            {`Phone: ${footerData?.contactInfo?.primary_phone_number}`}
          </a>
          <p>{footerData?.hoursOfOperation.office_address}</p>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=Momen+Real+Estates+Limited,+Bari+Momen's+Heights,+Plot+-157,+Road-12,+Block-+E,+Banani,+Dhaka,+1213,+Bangladesh&travelmode=driving`}
            target="_blank"
            rel="noreferrer"
          >
            Get Directions
          </a>
        </div>
        <div className="footer-useful-links">
          <h4>Useful Links</h4>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-social">
          <h4>Find Us Here</h4>
          <a
            href={footerData?.contactInfo?.facebook_url}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon className="footer-social-icon" />
          </a>
          <a
            href={footerData?.contactInfo?.whatsapp_url}
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className="footer-social-icon" />
          </a>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
