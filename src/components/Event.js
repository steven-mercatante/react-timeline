import React from "react";
import EventContainer from "./EventContainer";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import EventDate from "./EventDate";
import EventMarker from "./EventMarker";
import styled from "styled-components";
import kebabCase from "lodash.kebabcase";

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

export default function Event({
  event,
  children,
  isCompact,
  inlineDate,
  opts
}) {
  // TODO: can the intersection observer opts be passed via param so user can customize?
  const [isVisible, ref] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });

  const kebabLayout = kebabCase(opts.layout);

  const classes = ["event", event.type.toLowerCase(), kebabLayout];
  if (event.opts && event.opts.cssClass) {
    classes.push(event.opts.cssClass);
  }

  return (
    <EventContainer
      className={classes.join(" ")}
      ref={ref}
      isVisible={isVisible}
      animationsEnabled={opts.animationsEnabled}
      layout={opts.layout}
    >
      <FlexColumn className={`col-1 ${kebabLayout}`} flexBasis="50%">
        {!isCompact && !inlineDate && <EventDate>{event.date}</EventDate>}
      </FlexColumn>

      <EventMarker layout={kebabLayout} />

      {React.cloneElement(children, { isCompact, inlineDate })}
    </EventContainer>
  );
}
