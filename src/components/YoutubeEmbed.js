import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  padding-bottom: 56.25%;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default function YouTubeEmbed({ id, name }) {
  return (
    <Container className="youtube-container">
      <Iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={name}
        frameBorder="0"
        gesture="media"
        width="560"
        height="315"
        allow="encrypted-media"
        allowFullScreen
      />
    </Container>
  );
}
