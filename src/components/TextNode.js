import React from "react";
import ReactMarkdown from "react-markdown";
import EventContainer from "./EventContainer";
import EventContent from "./EventContent";

export default function TextNode({ event }) {
  return (
    <EventContainer>
      <EventContent>
        <ReactMarkdown>{event.body}</ReactMarkdown>
      </EventContent>
    </EventContainer>
  );
}
