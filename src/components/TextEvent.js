import React from "react";
import Event from "./Event";
import CardWrapper from "./CardWrapper";
import Markdown from "markdown-to-jsx";

export default function TextEvent(props) {
  const { date, children } = props;

  return (
    <Event date={date}>
      <CardWrapper date={date}>
        <Markdown>{children}</Markdown>
      </CardWrapper>
    </Event>
  );
}
