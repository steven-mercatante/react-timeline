import React from "react";
import EventMarker from "./EventMarker";
import EventTimestamp from "./EventTimestamp";

export default function NodeWrapper({ event, children }) {
  return (
    <React.Fragment>
      <EventMarker />
      <EventTimestamp>{event.date}</EventTimestamp>
      {children}
    </React.Fragment>
  );
}
