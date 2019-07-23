import React from "react";
import Markdown from "markdown-to-jsx";

export default function TextAtom({ text }) {
  if (!text) {
    return null;
  }

  return <Markdown>{text}</Markdown>;
}
