import React from "react";
import EventDate from "./EventDate";
import styled from "styled-components";

const Container = styled.div(props => {
  const defaults = {
    // border: "1px solid yellow",
    display: "flex",
    flexDirection: "column",
    flexBasis: "50%",
    flexGrow: 1,
    color: "#fff",
    backgroundColor: "#4e4e50",
    borderRadius: "4px",
    padding: "10px"
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
