import React from "react";
import PropTypes from "prop-types";
import Event from "./Event";
import TextCard from "../cards/TextCard";

export default function TextEvent(props) {
  const { date, text, marker, children, className } = props;

  return (
    <Event className={className} date={date} marker={marker}>
      <TextCard date={date} text={text}>
        {children}
      </TextCard>
    </Event>
  );
}

TextEvent.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element
  ]).isRequired,
  text: PropTypes.string.isRequired,
  marker: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  children: PropTypes.node,
  className: PropTypes.string
};
