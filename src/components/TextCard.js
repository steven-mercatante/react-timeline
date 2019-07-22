import React from "react";
import Markdown from "markdown-to-jsx";
import CardWrapper from "./CardWrapper";

export default function TextCard({ children }) {
  return (
    <CardWrapper>
      <Markdown>{children}</Markdown>
    </CardWrapper>
  );
}
