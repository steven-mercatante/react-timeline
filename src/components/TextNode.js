import React from "react";
import Markdown from "markdown-to-jsx";

export default function TextNode({ event }) {
  return <Markdown>{event.text}</Markdown>;
}
