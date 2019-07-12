import React from "react";
import EventMarker from "./EventMarker";
import EventTimestamp from "./EventTimestamp";
import EventContainer from "./EventContainer";
import EventContent from "./EventContent";

export default function NodeWrapper({ event, children }) {
  return (
    <EventContainer className="node-wrapper">
      <EventMarker className="node-marker" />
      <EventContent
        className={`node-content ${event.type}`}
        width={event.type === "youTube" ? "500px" : null}
      >
        <EventTimestamp>{event.date}</EventTimestamp>
        {children}
      </EventContent>
    </EventContainer>
  );
}
