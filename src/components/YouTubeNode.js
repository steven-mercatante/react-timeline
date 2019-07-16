import React from "react";
import styled from "styled-components";
import Markdown from "markdown-to-jsx";
import ConditionalMarkdown from "./ConditionalMarkdown";

const Container = styled.div`
  position: relative;
  overflow: hidden;
  padding-bottom: 56.25%;
`;

const RespIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

export default function YouTubeNode({ event }) {
  const { id, name, text } = event;
  return (
    <div>
      <ConditionalMarkdown text={text} />
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
    </div>
  );
}
