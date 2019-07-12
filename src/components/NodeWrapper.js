import React from "react";
import EventMarker from "./EventMarker";
import EventTimestamp from "./EventTimestamp";
import EventContainer from "./EventContainer";
import EventContent from "./EventContent";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function NodeWrapper({ event, children }) {
  const [isVisible, ref] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  })

  return (
    <EventContainer className="node-wrapper" ref={ref} isVisible={isVisible}>
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
