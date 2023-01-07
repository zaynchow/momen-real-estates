import styled from "styled-components";
import BedIcon from "../../public/icons/bed.svg";

const FeaturesContainer = styled.div`
  background-color: white;

  .Features-container {
    width: 85%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    padding: 70px 0;
    align-items: flex-start;
    border-bottom: 1px solid #b5b0b0;
    h4 {
      width: 20%;
      font-size: 1.8rem;
      margin: 0;
    }
    .icon-grid {
      width: 80%;

      display: inline-grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      column-gap: 10px;
      row-gap: 15px;

      div {
        display: flex;
        align-items: flex-start;

        p {
          margin-left: 10px;
          line-height: 0;
          span {
            font-weight: 600;
          }
        }
      }
    }
  }
`;

const Features = () => {
  return (
    <FeaturesContainer>
      <div className="Features-container">
        <h4>Features</h4>
        <div className="icon-grid">
          <div>
            <BedIcon />
            <p>
              <span>Bedrooms: </span>4
            </p>
          </div>
          <div>
            <BedIcon />
            <p>
              <span>Bedrooms: </span>4
            </p>
          </div>
          <div>
            <BedIcon />
            <p>
              <span>Bedrooms: </span>4
            </p>
          </div>
          <div>
            <BedIcon />
            <p>
              <span>Bedrooms: </span>4
            </p>
          </div>
          <div>
            <BedIcon />
            <p>
              <span>Bedrooms: </span>4
            </p>
          </div>
          <div>
            <BedIcon />
            <p>
              <span>Bedrooms: </span>4
            </p>
          </div>
          <div>
            <BedIcon />
            <p>
              <span>Bedrooms: </span>4
            </p>
          </div>
          <div>
            <BedIcon />
            <p>
              <span>Bedrooms: </span>4
            </p>
          </div>
        </div>
      </div>
    </FeaturesContainer>
  );
};

export default Features;
