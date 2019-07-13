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

  const classes = ["node-wrapper", event.type.toLowerCase()];
  if (event.opts && event.opts.cssClass) {
    classes.push(event.opts.cssClass);
  }

  return (
    <EventContainer
      className={classes.join(" ")}
      ref={ref}
      isVisible={isVisible}
    >
      {!isCompact && (
        <EventTimestamp className="timestamp" inline={false}>
          {event.date}
        </EventTimestamp>
      )}
      <EventMarker className="node-marker" />
      <EventContent
        className="node-content"
        width={event.type.toLowerCase() === "youtube" ? "500px" : null}
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
