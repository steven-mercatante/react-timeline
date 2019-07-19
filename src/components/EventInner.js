import React from "react";
import EventContainer from './EventContainer'
import EventMarker from "./EventMarker";
import EventTimestamp from "./EventTimestamp";
import EventContent from "./EventContent";
import kebabCase from "lodash.kebabcase";
import styled from "styled-components";

const FlexColumn = styled.div`
  // border: 1px solid cyan;
  display: flex;
  flex-direction: column;
  flex-basis: ${({ flexBasis }) => flexBasis};
  justify-content: center;
  align-items: flex-end;

  &.alternate-events,
  &.alternate-events-inline-date {
    flex-basis: 50%;

    ${EventContainer}:nth-child(even) & {
      align-items: flex-start;
    }
  }

  &.alternate-events-inline-date {
    margin-bottom: 10px;
  }

  &.inline-events {}
    flex-basis: 100px;
    justify-content: center;
    align-items: flex-end;
  }

  &.inline-events-inline-date {
    margin-bottom: 10px;
    flex-basis: 0;
    justify-content: center;
    align-items: flex-end;
  }
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
      <FlexColumn className={`col-1 ${kebabLayout}`} flexBasis="50%">
        {!isCompact && !inlineTimestamp && <EventTimestamp>{event.date}</EventTimestamp>}
      </FlexColumn>

      {/* <EventTimestamp className={`timestamp ${kebabLayout}`}>
        {!isCompact && !inlineTimestamp && <time>{event.date}</time>}
      </EventTimestamp> */}

      <EventMarker layout={kebabLayout} />
      <EventContent
        className="node-content"
        width={event.type.toLowerCase() === "youtube" ? "500px" : null}
      >
        {(isCompact || inlineTimestamp) && (
          <EventTimestamp className='timestamp' inline={true}>
            {event.date}
          </EventTimestamp>
        )}
        {children}
      </EventContent>
    </React.Fragment>
  );
}
