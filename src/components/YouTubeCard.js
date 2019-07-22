import React from "react";
import styled from "styled-components";
import ConditionalMarkdown from "./ConditionalMarkdown";
import Buttons from "./Buttons";
import CardWrapper from "./CardWrapper";

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

export default function YouTubeCard({ id, name, text, ...rest }) {
  return (
    <CardWrapper event={event} {...rest}>
      <ConditionalMarkdown>{text}</ConditionalMarkdown>
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
    </CardWrapper>
  );
}
