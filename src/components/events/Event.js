import React, { useContext } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import EventDate from "../EventDate";
import EventMarker from "../EventMarker";
import styled from "styled-components";
import TimelineContext from "../../TimelineContext";

const Container = styled.div`
  // border: 1px solid red;
  position: relative;
  display: flex;
  margin-bottom: 20px;

  ${props =>
    props.animationsEnabled && `opacity: ${props.isVisible ? 1 : 0.15};`}

  ${({ animationsEnabled }) =>
    animationsEnabled && `transition: opacity 0.25s ease-in;`}

  :nth-child(1) {
    margin-top: 20px;
  }

  &.inline-events,
  &.inline-events-inline-date {
    flex-direction: row !important;
  }

  :nth-child(even) {
    flex-direction: row-reverse;
  }
`;

const DateColumn = styled.div`
  // border: 1px solid cyan;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 50%;
  align-items: flex-end;

  &.alternate-events,
  &.alternate-events-inline-date {
    flex-basis: 50%;

    ${Container}:nth-child(even) & {
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

const MarkerColumn = styled.div`
  // border: 1px solid yellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 40px;
  flex-shrink: 0;
`;

const CardColumn = styled.div`
  // border: 1px solid green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 50%;
  flex-grow: 1;
`;

export default function Event({ date, marker, children }) {
  const { kebabLayout, inlineDate, opts } = useContext(TimelineContext);

  // TODO: can the intersection observer opts be passed via param so user can customize?
  const [isVisible, ref] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });

  let DateComponent;
  if (date) {
    if (typeof date === "string") {
      DateComponent = <EventDate date={date} layout={kebabLayout} />;
    } else if (typeof date === "function") {
      DateComponent = date({ layout: kebabLayout });
    } else {
      DateComponent = React.cloneElement(date, { layout: kebabLayout });
    }
  }

  let MarkerComponent;
  if (marker && typeof marker === "function") {
    // user passed a function
    MarkerComponent = marker({ layout: kebabLayout });
  } else if (marker) {
    // user passed JSX
    MarkerComponent = React.cloneElement(marker, { layout: kebabLayout });
  } else {
    // user didn't pass anything - use default marker component
    MarkerComponent = <EventMarker layout={kebabLayout} />;
  }

  return (
    <Container
      className={`event ${kebabLayout}`}
      ref={ref}
      isVisible={isVisible}
      animationsEnabled={opts.animationsEnabled}
    >
      <DateColumn className={`date-col ${kebabLayout}`}>
        {!inlineDate && DateComponent}
      </DateColumn>

      <MarkerColumn className={`marker-col ${kebabLayout}`}>
        {MarkerComponent}
      </MarkerColumn>

      <CardColumn className={`card-col ${kebabLayout}`}>{children}</CardColumn>
    </Container>
  );
}
