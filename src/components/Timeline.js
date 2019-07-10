import React from "react";
import styled from "styled-components";
import Event from "./Event";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  // border: 1px solid red;
  margin: 4px;

  ::after {
    position: absolute;
    left: calc(50% - 1px);
    width: 2px;
    height: 100%;
    background-color: black;
    content: "";
  }
`;

export default function Timeline({ events }) {
  return (
    <Container>
      {events.map((event, i) => (
        <Event event={event} key={i} />
      ))}
    </Container>
  );
}
