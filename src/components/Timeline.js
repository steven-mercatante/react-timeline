import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TextNode from "./TextNode";
import ImageNode from "./ImageNode";
import NodeWrapper from "./NodeWrapper";
import YouTubeNode from "./YouTubeNode";
import TwitterNode from "./TwitterNode";

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
      left: 24px;
    }
  }
`;

const nodes = {
  text: TextNode,
  image: ImageNode,
  youtube: YouTubeNode,
  twitter: TwitterNode
};

export default function Timeline({ events, inlineDate }) {
  // TODO: use a more semantic var name
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  function handleResize() {
    const mediaQueryList = window.matchMedia(`(max-width: 768px)`);
    if (mediaQueryList.matches === true) {
      setIsCompact(true);
    } else {
      setIsCompact(false);
    }
  }

  return (
    <Container className="timeline">
      {events.map((event, i) => {
        console.log(">>>>>", event.type.toLowerCase());
        const Node = nodes[event.type.toLowerCase()];
        console.log("node:", Node);
        return (
          <NodeWrapper
            key={i}
            event={event}
            inlineDate={inlineDate}
            isCompact={isCompact}
          >
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
