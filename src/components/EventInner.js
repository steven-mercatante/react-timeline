import React from "react";
import EventMarker from "./EventMarker";
import EventTimestamp from "./EventTimestamp";
import EventContent from "./EventContent";
import kebabCase from 'lodash.kebabcase'

export default function EventInner({
  event,
  isCompact,
  isVisible,
  children,
  opts
}) {
  const inlineTimestamp = opts.layout.toLowerCase().includes('inlinedate')

  return (
    <React.Fragment>
      {!isCompact && !inlineTimestamp && (
        <EventTimestamp className="timestamp" inline={false}>
          <time>{event.date}</time>
        </EventTimestamp>
      )}
      <EventMarker className={`node-marker ${kebabCase(opts.layout)}`}/>
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
