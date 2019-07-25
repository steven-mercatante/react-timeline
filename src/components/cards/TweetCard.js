import React from "react";
import PropTypes from "prop-types";
import ConditionalMarkdown from "../atoms/ConditionalMarkdown";
import Card from "./Card";
import TweetAtom from "../atoms/TweetAtom";
import styled from "styled-components";

const TweetText = styled(ConditionalMarkdown)(props => {
  const defaults = {};

  const style = { ...defaults, ...props.theme.tweetText };

  return style;
});

export default function TweetCard({ date, id, text, tweetOpts, children }) {
  return (
    <Card date={date}>
      <TweetText className="tweet-text">{text}</TweetText>
      <TweetAtom id={id} tweetOpts={tweetOpts} />
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
  tweetOpts: PropTypes.object,
  children: PropTypes.node
};
