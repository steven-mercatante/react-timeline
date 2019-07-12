import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  overflow: hidden;
  // width: 500px;
  // height: 281px;

  iframe {
    left: 10;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

export default function YouTubeEmbed({ id, name }) {
  return (
    <Container className="youtube-container">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={name}
        frameBorder="0"
        gesture="media"
        allow="encrypted-media"
        allowFullScreen
      />
    </Container>
  );
}
