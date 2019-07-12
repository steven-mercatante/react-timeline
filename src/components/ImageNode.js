import React from "react";
import ReactMarkdown from "react-markdown";
import EventContainer from "./EventContainer";
import EventContent from "./EventContent";
import Image from "./Image";

export default function ImageNode({ event }) {
  return (
    // <EventContainer>
    <EventContent>
      <Image {...event} />
    </EventContent>
    // </EventContainer>
  );
}
