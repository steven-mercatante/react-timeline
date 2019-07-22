import React from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import EventDate from "./EventDate";
import EventMarker from "./EventMarker";
import styled from "styled-components";
import kebabCase from "lodash.kebabcase";

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

export default function Event({ date, children, isCompact, inlineDate, opts }) {
  // TODO: can the intersection observer opts be passed via param so user can customize?
  const [isVisible, ref] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });

  const kebabLayout = kebabCase(opts.layout);

  return (
    <Container
      className={`event ${kebabLayout}`}
      ref={ref}
      isVisible={isVisible}
      animationsEnabled={opts.animationsEnabled}
      layout={opts.layout}
    >
      <FlexColumn className={`col-1 ${kebabLayout}`} flexBasis="50%">
        {!inlineDate && <EventDate>{date}</EventDate>}
      </FlexColumn>

      <EventMarker layout={kebabLayout} />

      {React.cloneElement(children, { isCompact, inlineDate })}
    </Container>
  );
}
