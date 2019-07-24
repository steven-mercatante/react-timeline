import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ConditionalMarkdown from "../atoms/ConditionalMarkdown";
import Card from "./Card";
import ImageAtom from "../atoms/ImageAtom";

const ImageText = styled(ConditionalMarkdown)(props => {
  const defaults = {
    fontSize: "1rem"
  };

  const style = { ...defaults, ...props.theme.imageCardText };

  return style;
});

const ImageCredit = styled(ConditionalMarkdown)(props => {
  const defaults = {};

  const style = { ...defaults, ...props.theme.imageCardCredit };

  return style;
});

export default function ImageCard({ date, src, alt, credit, text, children }) {
  return (
    <Card date={date}>
      <ImageText className="image-text">{text}</ImageText>
      <ImageAtom src={src} alt={alt} />
      {credit && <ImageCredit className="credit">{credit}</ImageCredit>}
      {children}
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
