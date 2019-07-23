import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ConditionalMarkdown from "../atoms/ConditionalMarkdown";
import Card from "./Card";

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

// TODO: might not need Container now that we have Card
export default function ImageCard({ date, src, alt, credit, text, children }) {
  return (
    <Card date={date}>
      <Container className="image">
        <ConditionalMarkdown>{text}</ConditionalMarkdown>
        <img src={src} alt={alt} />
        {credit && (
          <ConditionalMarkdown className="credit">{credit}</ConditionalMarkdown>
        )}
        {children}
      </Container>
    </Card>
  );
}

ImageCard.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element
  ]).isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  credit: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node
};
