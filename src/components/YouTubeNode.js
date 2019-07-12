import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;

  // display: flex;
  // flex-direction: row;
  // height: 100%;
`;

const RespIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;

  // display: 1 1 auto;
`;

export default function YouTubeNode({ event }) {
  const { id, name } = event;
  return (
    <Container className="youtube-container">
      <RespIframe
        title={name}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Container>
  );
}
