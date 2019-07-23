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

  ${props => props.theme.Card.border && `border: ${props.theme.Card.border}`};

  border-radius: ${props => props.theme.Card.borderRadius};
  background-color: ${props => props.theme.Card.backgroundColor};
  color: ${props => props.theme.Card.color};
  padding: ${props => props.theme.Card.padding};
`;

export default function Card({ date, children }) {
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
