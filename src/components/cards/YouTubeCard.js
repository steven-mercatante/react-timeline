import React from "react";
import PropTypes from "prop-types";
import ConditionalMarkdown from "../atoms/ConditionalMarkdown";
import Card from "./Card";
import YouTubeAtom from "../atoms/YouTubeAtom";

export default function YouTubeCard({ date, id, name, text, children }) {
  return (
    <Card date={date}>
      <ConditionalMarkdown>{text}</ConditionalMarkdown>
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
