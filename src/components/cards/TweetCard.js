import React from "react";
import PropTypes from "prop-types";
import ConditionalMarkdown from "../atoms/ConditionalMarkdown";
import Card from "./Card";
import TweetAtom from "../atoms/TweetAtom";

export default function TweetCard({ date, id, text, children }) {
  return (
    <Card date={date}>
      <ConditionalMarkdown>{text}</ConditionalMarkdown>
      <TweetAtom id={id} />
      {children}
    </Card>
  );
}

TweetCard.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element
  ]).isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string,
  children: PropTypes.node
};
