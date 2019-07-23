import React from "react";
import styled from "styled-components";
import ConditionalMarkdown from "../atoms/ConditionalMarkdown";
import CardWrapper from "./CardWrapper";

// TODO: pass img width via prop?

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${props =>
    props.theme.image.maxHeight &&
    `max-height: ${props.theme.image.maxHeight};`}

  img {
    object-fit: ${props => props.theme.image.objectFit};
    overflow: hidden;
    width: 100%;
  }

  .credit {
    font-size: ${props => props.theme.image.credit.fontSize};
  }
`;

// TODO: might not need Container now that we have CardWrapper
export default function ImageCard({ date, src, alt, credit, text }) {
  return (
    <CardWrapper date={date}>
      <Container className="image">
        <ConditionalMarkdown>{text}</ConditionalMarkdown>
        <img src={src} alt={alt} />
        {credit && (
          <ConditionalMarkdown className="credit">{credit}</ConditionalMarkdown>
        )}
      </Container>
    </CardWrapper>
  );
}
