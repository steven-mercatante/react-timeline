import React from "react";
import Markdown from "markdown-to-jsx";
import Buttons from "./Buttons";
import CardWrapper from "./CardWrapper";

export default function TextNode({ event }) {
  const { text, buttons } = event;

  return (
    <CardWrapper>
      <Markdown>{text}</Markdown>
      {buttons && <Buttons buttons={buttons} />}
    </CardWrapper>
  );
}
