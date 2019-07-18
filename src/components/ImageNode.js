import React from "react";
import styled from "styled-components";
import ConditionalMarkdown from "./ConditionalMarkdown";
import Buttons from "./Buttons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: ${props => props.theme.image.maxHeight};
  width: ${props => props.theme.image.width};

  img {
    flex: 1;
    object-fit: ${props => props.theme.image.objectFit};
    overflow: hidden;
  }

  .credit {
    font-size: ${props => props.theme.image.credit.fontSize};
  }
`;

export default function ImageNode({ event }) {
  const { src, alt, credit, text, buttons } = event;

  return (
    <Container className="image">
      <ConditionalMarkdown text={text} />
      <img src={src} alt={alt} />
      {credit && (
        <ConditionalMarkdown className="credit">{credit}</ConditionalMarkdown>
      )}
      {buttons && <Buttons buttons={buttons} />}
    </Container>
  );
}
