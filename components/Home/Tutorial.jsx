import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const Tutorial = ({ playLink }) => {
  return (
    <div className="tutorial-section">
      <h2>Experience a virtual tour of all our projects</h2>
      <a href={playLink} className="play-icon" target="_blank">
        <PlayCircleOutlineIcon className="play-icon" />
      </a>

      <h5>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut.
      </h5>
    </div>
  );
};

export default Tutorial;
