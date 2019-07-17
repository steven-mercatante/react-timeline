import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TextNode from "./TextNode";
import ImageNode from "./ImageNode";
import NodeWrapper from "./NodeWrapper";
import YouTubeNode from "./YouTubeNode";
import TwitterNode from "./TwitterNode";

const OverflowWrapper = styled.div`
  overflow: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 14px;

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

export default function Timeline({ events }) {
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
    <OverflowWrapper className="timeline-overflow-wrapper">
      <Container className="timeline-container">
        {events.map((event, i) => {
          const Node = nodes[event.type.toLowerCase()];
          return (
            <NodeWrapper key={i} event={event} isCompact={isCompact}>
              <Node key={i} event={event} />
            </NodeWrapper>
          );
        })}
      </Container>
    </OverflowWrapper>
  );
}
