import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import styled from "styled-components";
import bgLines from "../../public/bg-lines.png";

const TutorialWrapper = styled.div`
  background-color: rgba(184, 184, 184, 0.3);
  background-image: url(${bgLines?.src});
  background-repeat: repeat;
  background-position: center top;
  .tutorial-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 0rem;
    width: 85%;
    max-width: 1200px;
    margin: auto;
    text-align: center;
    justify-content: space-between;
  }
  .tutorial-section h2 {
    font-weight: 700;
    line-height: 32px;
    text-align: center;
    font-size: 1.8rem;
  }
  .tutorial-section h5 {
    text-align: center;
    font-weight: 400;
    font-size: 1.2rem;
    margin: 0;
  }

  .play-icon {
    color: var(--secondary);
    font-size: 6.5rem;
    flex-basis: 33.3%;
  }
  @media only screen and (min-width: 768px) {
    .tutorial-section {
      flex-direction: row;
    }
    .play-icon {
      width: 33.3% !important;
      height: 33.3% !important;
    }
    .tutorial-section h5 {
      text-align: left;
    }
  }
`;

const Tutorial = ({ playLink }) => {
  return (
    <TutorialWrapper>
      <div className="tutorial-section">
        <h2>Experience a virtual tour of all our projects</h2>
        <a
          href={playLink}
          className="play-icon"
          target="_blank"
          rel="noreferrer"
        >
          <PlayCircleOutlineIcon className="play-icon" />
        </a>

        <h5>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut.
        </h5>
      </div>
    </TutorialWrapper>
  );
};

export default Tutorial;
