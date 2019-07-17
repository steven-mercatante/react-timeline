import React from "react";
import Markdown from "markdown-to-jsx";
import Buttons from "./Buttons";

export default function TextNode({ event }) {
  const { text, buttons } = event;

  return (
    <React.Fragment>
      <Markdown>{text}</Markdown>
      {buttons && <Buttons buttons={buttons} />}
    </React.Fragment>
  );
}
