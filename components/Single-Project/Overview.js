import styled from "styled-components";
import CropIconOutlined from "@mui/icons-material/Crop";
import StairsOutlinedIcon from "@mui/icons-material/StairsOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";

import SVG from "react-inlinesvg";

const OverviewContainer = styled.div`
  background-color: white;

  .overview-container {
    width: 85%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 70px 0;
    align-items: flex-start;
    border-bottom: 1px solid #b5b0b0;
    h4 {
      width: 100%;
      font-size: 1.8rem;
      margin: 0;
      line-height: 1;
    }
    .icon-grid {
      width: 100%;

      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      > div {
        display: flex;

        align-items: flex-start;
        margin-right: 40px;
        svg {
          font-size: 28px;
          fill: #e7ae4b;
          width: 26px !important;
          height: 26px !important;
        }
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
  @media only screen and (min-width: 600px) {
    .overview-container {
      flex-direction: row;
      gap: 0px;
      h4 {
        width: 20%;
      }
      .icon-grid {
        width: 80%;
      }
    }
  }
`;

const Overview = ({ currProj }) => {
  return (
    <OverviewContainer>
      <div className="overview-container">
        <h4>Overview</h4>
        <div className="icon-grid">
          <div>
            <CropIconOutlined />
            <p>
              <span>Size: </span>
              {currProj.area}
            </p>
          </div>
          <div>
            <StairsOutlinedIcon />
            <p>
              <span>Floors: </span>
              {currProj.floors}
            </p>
          </div>
          <div>
            <BedOutlinedIcon />
            <p>
              <span>Bedrooms: </span>
              {currProj.bedrooms}
            </p>
          </div>
          <div>
            <ShowerOutlinedIcon />
            <p>
              <span>Bathrooms: </span>
              {currProj.bathrooms}
            </p>
          </div>
          {currProj.overview?.map((single_overview, idx) => (
            <div key={idx}>
              <SVG src={single_overview.icon.svg} />
              <p>
                <span>{single_overview.overview_item_name}</span>
                {single_overview.overview_item_value &&
                  `: ${single_overview.overview_item_value}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </OverviewContainer>
  );
};

export default Overview;
