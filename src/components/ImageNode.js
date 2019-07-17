import React from "react";
import styled from "styled-components";
import ConditionalMarkdown from "./ConditionalMarkdown";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  width: 100%;

  img {
    flex: 1;
    object-fit: cover;
    overflow: hidden;
  }

  .credit {
    font-size: 0.85rem;
  }
`;

export default function ImageNode({ event }) {
  const { src, alt, credit, text } = event;
  return (
    <Container className="image">
      <ConditionalMarkdown text={text} />
      <img src={src} alt={alt} />
      {credit && (
        <ConditionalMarkdown className="credit">{credit}</ConditionalMarkdown>
      )}
    </Container>
  );
}
