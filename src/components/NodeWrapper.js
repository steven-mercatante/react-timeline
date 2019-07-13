import React from "react";
import EventMarker from "./EventMarker";
import EventTimestamp from "./EventTimestamp";
import EventContainer from "./EventContainer";
import EventContent from "./EventContent";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function NodeWrapper({ event, children, isCompact }) {
  // TODO: can the intersection observer opts be passed via param so user can customize?
  const [isVisible, ref] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });

  return (
    <EventContainer className="node-wrapper" ref={ref} isVisible={isVisible}>
      {!isCompact && (
        <EventTimestamp className="timestamp" inline={false}>
          {event.date}
        </EventTimestamp>
      )}
      <EventMarker className="node-marker" />
      <EventContent
        className={`node-content ${event.type}`}
        width={event.type === "youTube" ? "500px" : null}
      >
        {isCompact && (
          <EventTimestamp className="timestamp inline" inline={true}>
            {event.date}
          </EventTimestamp>
        )}
        {children}
      </EventContent>
    </EventContainer>
  );
}
