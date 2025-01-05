import styled from "styled-components";
import bgDark from "../../public/home-dark-bg.jpeg";
import Image from "next/image";
import home from "../../public/home.jpeg";
import { urlFor } from "../../lib/client";

const StaffWrapper = styled.div`
  background: url(${bgDark?.src});
  background-size: cover;
  padding: 5rem 0;
  .inner-wrapper {
    width: 85%;
    max-width: 1200px;
    margin: auto;
    h2 {
      color: var(--secondary);
      font-size: 1.2rem;
      font-weight: normal;
    }
    h3 {
      max-width: 50%;
      color: white;
      font-size: 1.85rem;
      font-weight: 600;
      margin-top: 0;
    }
    .team-portfolio {
      margin-top: 5rem;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 100px;
      .single-portfolio {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        .portfolio-img {
          width: 100%;
          position: relative;
          min-height: 350px;
        }

        .portfolio-name {
          color: white;
          font-size: 1.4rem;
          margin-bottom: 0;
        }
        .portfolio-designation {
          font-size: 1.2rem;
          color: var(--secondary);
          margin: 0;
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    .inner-wrapper {
      .team-portfolio {
        flex-direction: row;
      }
    }
  }
`;

const Staff = ({ staffData }) => {
  return (
    <StaffWrapper>
      <div className="inner-wrapper">
        <h2>Management Board</h2>
        <h3>
          Meet the experienced management team behind Momen Real Estate Limited.
          With a clear vision and dedication to excellence, these industry
          leaders drive our success and ensure client satisfaction in every
          project we deliver.
        </h3>
        <div className="team-portfolio">
          {staffData?.map((obj, idx) => (
            <div className="single-portfolio" key={idx}>
              <div className="portfolio-img">
                <Image
                  src={urlFor(obj.img)?.url()}
                  alt="portfolio-image"
                  fill
                />
              </div>

              <p className="portfolio-name">{obj.name}</p>
              <p className="portfolio-designation">{obj.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </StaffWrapper>
  );
};

export default Staff;
