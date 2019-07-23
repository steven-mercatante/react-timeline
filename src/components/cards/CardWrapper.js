import React, { useContext } from "react";
import EventDate from "../EventDate";
import styled from "styled-components";
import TimelineContext from "../../TimelineContext";

const Container = styled.div`
  // border: 1px solid yellow;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  flex-grow: 1;

  ${props =>
    props.theme.cardWrapper.border &&
    `border: ${props.theme.cardWrapper.border}`};

  border-radius: ${props => props.theme.cardWrapper.borderRadius};
  background-color: ${props => props.theme.cardWrapper.backgroundColor};
  color: ${props => props.theme.cardWrapper.color};
  padding: ${props => props.theme.cardWrapper.padding};
`;

export default function CardWrapper({ date, children }) {
  const { isCompact, inlineDate, kebabLayout } = useContext(TimelineContext);

  let DateComponent;
  if (date) {
    if (typeof date === "string") {
      DateComponent = (
        <EventDate date={date} layout={kebabLayout} inline={true} />
      );
    } else if (typeof date === "function") {
      DateComponent = date({ layout: kebabLayout, inline: true });
    } else {
      DateComponent = React.cloneElement(date, {
        layout: kebabLayout,
        inline: true
      });
    }
  }

  return (
    <Container className="card-wrapper">
      {((isCompact && inlineDate) || inlineDate) && DateComponent}
      {children}
    </Container>
  );
}
