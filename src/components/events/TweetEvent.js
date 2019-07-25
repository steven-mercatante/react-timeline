import React from "react";
import PropTypes from "prop-types";
import Event from "./Event";
import TweetCard from "../cards/TweetCard";
import { joinClassNames } from "../../utils/classNames";

export default function TweetEvent(props) {
  const { date, id, text, marker, tweetOpts, children, className } = props;

  return (
    <Event
      className={joinClassNames(["tweet-event", className])}
      date={date}
      marker={marker}
    >
      <TweetCard date={date} id={id} text={text} tweetOpts={tweetOpts}>
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
  tweetOpts: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string
};
