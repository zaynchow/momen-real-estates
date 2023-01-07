import styled from "styled-components";

import BedIcon from "../../public/icons/bed.svg";

const OverviewContainer = styled.div`
  background-color: white;

  .overview-container {
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

const Overview = () => {
  return (
    <OverviewContainer>
      <div className="overview-container">
        <h4>Overview</h4>

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
              <span>Bathrooms: </span>4
            </p>
          </div>
          <div>
            <BedIcon />
            <p>
              <span>Property Size: </span>4
            </p>
          </div>
          <div>
            <BedIcon />
            <p>
              <span>Land Area: </span>4
            </p>
          </div>
          <div>
            <BedIcon />
            <p>
              <span>Floors: </span>4
            </p>
          </div>
          <div>
            <BedIcon />
            <p>
              <span>Units per floor: </span>4
            </p>
          </div>
          <div>
            <BedIcon />
            <p>
              <span>Garage Size: </span>4
            </p>
          </div>
          <div>
            <BedIcon />
            <p>
              <span>Ceiling Height: </span>4
            </p>
          </div>
        </div>
      </div>
    </OverviewContainer>
  );
};

export default Overview;
