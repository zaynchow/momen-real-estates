import styled from "styled-components";
import SVG from "react-inlinesvg";

const FeaturesContainer = styled.div`
  background-color: white;

  .features-container {
    width: 85%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    gap: 20px;
    flex-direction: column;
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
      /* display: inline-grid; */
      /* grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr; */
      /* column-gap: 10px;
      row-gap: 15px; */
      display: flex;
      flex-wrap: wrap;

      > div {
        display: flex;
        align-items: flex-start;
        margin-right: 20px;
        svg {
          font-size: 26px;
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
    .features-container {
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

const Features = ({ currProj }) => {
  return (
    <FeaturesContainer>
      {currProj.features && (
        <div className="features-container">
          <h4>Features</h4>
          <div className="icon-grid">
            {currProj.features?.map((single_feature, idx) => (
              <div key={idx}>
                <SVG src={single_feature.icon.svg} />
                <p>
                  <span>{single_feature.feature_name}</span>
                  {single_feature.feature_value &&
                    `: ${single_feature.feature_value}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </FeaturesContainer>
  );
};

export default Features;
