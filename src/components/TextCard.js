import React from "react";
import Markdown from "markdown-to-jsx";
import CardWrapper from "./CardWrapper";

export default function TextCard({ text }) {
  return (
    <CardWrapper>
      <Markdown>{text}</Markdown>
    </CardWrapper>
  );
}
