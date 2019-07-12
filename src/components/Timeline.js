import React from "react";
import styled from "styled-components";
import Event from "./Event";
import TextNode from "./TextNode";
import ImageNode from "./ImageNode";
import NodeWrapper from "./NodeWrapper";
import YouTubeNode from "./YouTubeNode";

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
    left: calc(50% - 1px);
    width: 2px;
    height: 100%;
    background-color: #ee18b6;
    content: "";

    @media (max-width: 768px) {
      left: 44px;
    }
  }
`;

const nodes = { text: TextNode, image: ImageNode, youTube: YouTubeNode };

export default function Timeline({ events, inlineDate }) {
  return (
    <Container className="timeline">
      {events.map((event, i) => {
        const Node = nodes[event.type];
        return (
          <NodeWrapper key={i} event={event} inlineDate={inlineDate}>
            <Node key={i} event={event} inlineDate={inlineDate} />
          </NodeWrapper>
        );

        // if (event.component) {
        //   const CustomEvent = event.component;
        //   return (
        //     <CustomEvent
        //       key={i}
        //       event={event}
        //
        //       inlineDate={inlineDate}
        //     />
        //   );
        // }

        // return (
        //   <Event
        //     key={i}
        //     event={event}
        //
        //     inlineDate={inlineDate}
        //   />
        // );
      })}
    </Container>
  );
}
