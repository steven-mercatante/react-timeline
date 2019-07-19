import React from "react";
import styled from "styled-components";
import ConditionalMarkdown from "./ConditionalMarkdown";
import Buttons from "./Buttons";

// TODO: pass img width via prop?

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.theme.image.maxHeight && `max-height: ${props.theme.image.maxHeight};`}

  img {
    object-fit: ${props => props.theme.image.objectFit};
    overflow: hidden;
    width: 100%;
  }

  .credit {
    font-size: ${props => props.theme.image.credit.fontSize};
  }
`;

export default function ImageNode({ event }) {
  const { src, alt, credit, text, buttons } = event;

  return (
    <Container className="image">
      {/* <ConditionalMarkdown text={text} /> */}
      <img src={src} alt={alt} />
      {/* {credit && (
        <ConditionalMarkdown className="credit">{credit}</ConditionalMarkdown>
      )}
      {buttons && <Buttons buttons={buttons} />} */}
    </Container>
  );
}
