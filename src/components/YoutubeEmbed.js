import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const RespIframe = styled.iframe`
  flex: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default function YouTubeEmbed({ id, name }) {
  return (
    <Container className="youtube-container">
      <RespIframe
        title={name}
        // width="560"
        // height="315"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Container>
  );
}
