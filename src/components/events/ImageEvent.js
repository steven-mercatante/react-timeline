import React from "react";
import PropTypes from "prop-types";
import Event from "../events/Event";
import ImageCard from "../cards/ImageCard";

export default function ImageEvent(props) {
  const { date, src, alt, credit, text, marker, children, className } = props;

  return (
    <Event className={className} date={date} marker={marker}>
      <ImageCard date={date} src={src} alt={alt} credit={credit} text={text}>
        {children}
      </ImageCard>
    </Event>
  );
}

ImageEvent.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element
  ]).isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  credit: PropTypes.string,
  text: PropTypes.string,
  marker: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  children: PropTypes.node,
  className: PropTypes.string
};
