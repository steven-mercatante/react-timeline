import React from "react";
import styled from "styled-components";
import Event from "./Event";

const Container = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 4px;

  // renders the vertical line
  // TODO: can width (and thus left calc) be passed via prop?
  ::after {
    position: absolute;
    left: ${({ alternateEvents }) =>
      alternateEvents === true ? `calc(50% - 1px)` : `4%`};
    width: 2px;
    height: 100%;
    background-color: #ee18b6;
    content: "";

    @media (max-width: 768px) {
      left: 4%;
    }
  }
`;

export default function Timeline({ events, alternateEvents, inlineDate }) {
  return (
    <Container className="timeline" alternateEvents={alternateEvents}>
      {events.map((event, i) => (
        <Event
          key={i}
          event={event}
          alternateEvents={alternateEvents}
          inlineDate={inlineDate}
        />
      ))}
    </Container>
  );
}
