import React from "react";
import EventContainer from "./EventContainer";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import EventInner from "./EventInner";

export default function Event({ event, children, isCompact, opts }) {
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
      animationsEnabled={opts.animationsEnabled}
    >
      <EventInner
        event={event}
        isCompact={isCompact}
        isVisible={isVisible}
        opts={opts}
      >
        {children}
      </EventInner>
    </EventContainer>
  );
}
