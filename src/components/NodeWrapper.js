import React from "react";
import EventMarker from "./EventMarker";
import EventTimestamp from "./EventTimestamp";
import EventContainer from "./EventContainer";
import EventContent from "./EventContent";

export default function NodeWrapper({ event, children, alternateEvents }) {
  return (
    <EventContainer className="node-wrapper">
      <EventMarker alternateEvents={alternateEvents} />
      <EventContent>
        <EventTimestamp>{event.date}</EventTimestamp>
        {children}
      </EventContent>
    </EventContainer>
  );
}
