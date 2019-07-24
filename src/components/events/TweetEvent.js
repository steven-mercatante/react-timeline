import React from "react";
import PropTypes from "prop-types";
import Event from "./Event";
import TweetCard from "../cards/TweetCard";

export default function TweetEvent(props) {
  const { date, id, text, marker, children, className } = props;

  return (
    <Event className={className} date={date} marker={marker}>
      <TweetCard date={date} id={id} text={text}>
        {children}
      </TweetCard>
    </Event>
  );
}

TweetEvent.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element
  ]).isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string,
  marker: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  children: PropTypes.node,
  className: PropTypes.string
};
