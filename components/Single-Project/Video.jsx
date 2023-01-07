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
    padding: 70px 0;
    align-items: flex-start;
    border-bottom: 1px solid #b5b0b0;
    h4 {
      width: 20%;
      font-size: 1.8rem;
      margin: 0;
    }
    div {
      position: relative;
      width: 70%;
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
`;

const Video = () => {
  return (
    <VideoContainer>
      <div className="video-container">
        <h4>Property Video</h4>

        <div>
          <iframe
            src="https://player.vimeo.com/video/785376023?h=4f8097114c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="cover 2"
          ></iframe>
        </div>
        <Script src="https://player.vimeo.com/api/player.js"></Script>
      </div>
    </VideoContainer>
  );
};

export default Video;
