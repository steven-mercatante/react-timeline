import React from "react";
import styled from "styled-components";
import Event from "./Event";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 4px;

  ::after {
    position: absolute;
    left: calc(50% - 1px);
    width: 2px;
    height: 100%;
    background-color: #ee18b6;
    content: "";
  }
`;

export default function Timeline({ events }) {
  return (
    <Container className="timeline">
      {events.map((event, i) => (
        <Event key={i} event={event} placement={i % 2} />
      ))}
    </Container>
  );
}
