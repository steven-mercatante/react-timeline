import React from "react";
import styled from "styled-components";
import Event from "./Event";
import TextNode from "./TextNode";
import ImageNode from "./ImageNode";
import NodeWrapper from "./NodeWrapper";

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
      alternateEvents === true ? `calc(50% - 1px)` : `44px`};
    width: 2px;
    height: 100%;
    background-color: #ee18b6;
    content: "";

    @media (max-width: 768px) {
      left: 44px;
    }
  }
`;

const nodes = { text: TextNode, image: ImageNode };

export default function Timeline({ events, alternateEvents, inlineDate }) {
  return (
    <Container className="timeline" alternateEvents={alternateEvents}>
      {events.map((event, i) => {
        const Node = nodes[event.type];
        return (
          <NodeWrapper event={event}>
            <Node
              key={i}
              event={event}
              alternateEvents={alternateEvents}
              inlineDate={inlineDate}
            />
          </NodeWrapper>
        );

        // if (event.component) {
        //   const CustomEvent = event.component;
        //   return (
        //     <CustomEvent
        //       key={i}
        //       event={event}
        //       alternateEvents={alternateEvents}
        //       inlineDate={inlineDate}
        //     />
        //   );
        // }

        // return (
        //   <Event
        //     key={i}
        //     event={event}
        //     alternateEvents={alternateEvents}
        //     inlineDate={inlineDate}
        //   />
        // );
      })}
    </Container>
  );
}
