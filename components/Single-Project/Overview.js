import styled from "styled-components";

import SVG from "react-inlinesvg";

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
`;

const Overview = ({ currProj }) => {
  return (
    <OverviewContainer>
      <div className="overview-container">
        <h4>Overview</h4>

        <div className="icon-grid">
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
