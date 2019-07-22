import React from "react";
import Event from "./Event";
import CardWrapper from "./CardWrapper";
import Markdown from "markdown-to-jsx";

export default function TextEvent(props) {
  const { date, children } = props;

  return (
    <Event {...props}>
      <CardWrapper {...props}>
        <Markdown>{children}</Markdown>
      </CardWrapper>
    </Event>
  );
}
