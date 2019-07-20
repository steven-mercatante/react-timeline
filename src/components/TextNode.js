import React from "react";
import Markdown from "markdown-to-jsx";
import Buttons from "./Buttons";
import CardWrapper from "./CardWrapper";

export default function TextNode({ event, ...rest }) {
  console.log("...rest:", rest);
  const { text, buttons } = event;

  return (
    <CardWrapper event={event} {...rest}>
      <Markdown>{text}</Markdown>
      {buttons && <Buttons buttons={buttons} />}
    </CardWrapper>
  );
}
