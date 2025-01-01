import Image from "next/image";
import wireframe from "../../public/building-wireframe.png";
import styled from "styled-components";

const ContactWrapper = styled.div`
  background-color: var(--bg-dark);

  .home-contact-section {
    width: 85%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    height: 100vh;
    align-items: center;
    position: relative;
  }

  .home-contact-image {
    position: absolute;
    width: 100%;
    height: 80%;
    img {
      opacity: 0.7;
    }
  }

  .home-contact-section div:nth-child(1) {
    width: 100%;
  }
  .home-contact-section div h2 {
    font-weight: 700;
    font-size: 4.7rem;
    line-height: 4.5rem;
    color: white;
    span {
      color: var(--secondary);
    }
  }

  .home-contact-section div a {
    color: white;
    text-decoration: underline;
    font-family: Roboto, sans-serif;
    font-weight: 100;
    font-size: 1.4rem;
  }
  @media only screen and (min-width: 600px) {
    .home-contact-image {
      position: relative;
      width: 50%;
    }
    .home-contact-section div:nth-child(1) {
      width: 50%;
    }
  }
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <div className="home-contact-section">
        <div>
          <h2>
            Find Your Perfect <span>Home</span> or Unlock Your Property&apos;s{" "}
            <span>Value</span>
          </h2>
          <a href="/contact">Contact Us Now</a>
        </div>
        <div className="home-contact-image">
          <Image src={wireframe} alt="logo" className="wireframe-pic" fill />
        </div>
      </div>
    </ContactWrapper>
  );
};

export default Contact;
