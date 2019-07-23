import React from "react";
import Markdown from "markdown-to-jsx";
import CardWrapper from "./CardWrapper";

export default function TextCard({ date, text }) {
  return (
    <CardWrapper date={date}>
      <Markdown>{text}</Markdown>
    </CardWrapper>
  );
}
