import React from "react";
import ReactMarkdown from "react-markdown";

export default function TextNode({ event }) {
  return <ReactMarkdown>{event.body}</ReactMarkdown>;
}
