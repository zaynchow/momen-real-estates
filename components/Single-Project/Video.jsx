import React from "react";
import styled from "styled-components";
import Script from "next/script";

const VideoContainer = styled.div`
  background: white;
  .video-container {
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
    div {
      position: relative;
      width: 100%;
      height: 420px;
      margin: 0;
      padding: 0;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
  @media only screen and (min-width: 600px) {
    .video-container {
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

const Video = ({ currProj }) => {
  return (
    <VideoContainer>
      {currProj.video && (
        <div className="video-container">
          <h4>Property Video</h4>

          <div>
            <iframe
              src={currProj.video}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="cover 2"
            ></iframe>
          </div>
          <Script src="https://player.vimeo.com/api/player.js"></Script>
        </div>
      )}
    </VideoContainer>
  );
};

export default Video;
