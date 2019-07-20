import React from "react";
import EventDate from "./EventDate";
import styled from "styled-components";

const Container = styled.div(props => {
  const defaults = {
    display: "flex",
    flexDirection: "column",
    flexBasis: "50%",
    flexGrow: 1
  };

  return { ...defaults, ...props.theme.CardWrapper };
});

export default function CardWrapper({
  event,
  isCompact,
  inlineDate,
  children
}) {
  return (
    <Container className="card-wrapper">
      {((isCompact && inlineDate) || inlineDate) && (
        <EventDate inline={true}>{event.date}</EventDate>
      )}
      {children}
    </Container>
  );
}
