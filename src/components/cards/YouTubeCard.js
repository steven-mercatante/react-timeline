import React from "react";
import PropTypes from "prop-types";
import ConditionalMarkdown from "../atoms/ConditionalMarkdown";
import Card from "./Card";
import YouTubeAtom from "../atoms/YouTubeAtom";
import styled from "styled-components";

const YouTubeText = styled(ConditionalMarkdown)(props => {
  const defaults = {};

  const style = { ...defaults, ...props.theme.youTubeText };

  return style;
});

export default function YouTubeCard({ date, id, name, text, children }) {
  return (
    <Card date={date}>
      <YouTubeText className="youtube-text">{text}</YouTubeText>
      <YouTubeAtom id={id} name={name} />
      {children}
    </Card>
  );
}

YouTubeCard.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element
  ]).isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node
};
