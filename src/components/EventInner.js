import React from "react";
import EventMarker from "./EventMarker";
import EventTimestamp from "./EventTimestamp";
import EventContent from "./EventContent";

export default function EventInner({
  event,
  isCompact,
  isVisible,
  children,
  inlineTimestamp = false
}) {
  return (
    <React.Fragment>
      {!isCompact && !inlineTimestamp && (
        <EventTimestamp className="timestamp" inline={false}>
          <time>{event.date}</time>
        </EventTimestamp>
      )}
      <EventMarker className="node-marker" />
      <EventContent
        className="node-content"
        width={event.type.toLowerCase() === "youtube" ? "500px" : null}
      >
        {(isCompact || inlineTimestamp) && (
          <EventTimestamp className="timestamp inline" inline={true}>
            <time>{event.date}</time>
          </EventTimestamp>
        )}
        {children}
      </EventContent>
    </React.Fragment>
  );
}
