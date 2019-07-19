import React from "react";
import EventMarker from "./EventMarker";
import EventTimestamp from "./EventTimestamp";
import EventContent from "./EventContent";
import kebabCase from "lodash.kebabcase";
import styled from "styled-components";

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: ${({ flexBasis }) => flexBasis};
`;

export default function EventInner({
  event,
  isCompact,
  isVisible,
  children,
  opts
}) {
  const inlineTimestamp = opts.layout.toLowerCase().includes("inlinedate");
  const kebabLayout = kebabCase(opts.layout);

  // TODO: make the flex item different from what holds the actual content. that way you can set max-width on the content without messing up the flex layout

  return (
    <React.Fragment>
      {/* <FlexColumn className="col-1" flexBasis="50%">

      </FlexColumn> */}
      <EventTimestamp className={`timestamp ${kebabLayout}`}>
        {!isCompact && !inlineTimestamp && <time>{event.date}</time>}
      </EventTimestamp>
      <EventMarker layout={kebabLayout} />
      <EventContent
        className="node-content"
        width={event.type.toLowerCase() === "youtube" ? "500px" : null}
      >
        {(isCompact || inlineTimestamp) && (
          <EventTimestamp className={`timestamp ${kebabLayout}`}>
            <time>{event.date}</time>
          </EventTimestamp>
        )}
        {children}
      </EventContent>
    </React.Fragment>
  );
}
