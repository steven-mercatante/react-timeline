import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import TextNode from "./TextNode";
import ImageNode from "./ImageNode";
import NodeWrapper from "./NodeWrapper";
import YouTubeNode from "./YouTubeNode";
import TwitterNode from "./TwitterNode";
import { defaultTheme } from "../themes";

const OverflowWrapper = styled.div`
  overflow: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize};

  // renders the vertical line
  ::after {
    position: absolute;
    left: ${props =>
      `calc(50% - ${parseInt(props.theme.track.width, 10) / 2}px)`};
    width: ${props => props.theme.track.width};
    height: 100%;
    background-color: ${props => props.theme.track.color};
    content: "";

    @media (max-width: 768px) {
      left: 24px;
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;

const nodes = {
  text: TextNode,
  image: ImageNode,
  youtube: YouTubeNode,
  twitter: TwitterNode
};

export default function Timeline({ className, events }) {
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

  const classNames = ["timeline", "overflow-wrapper"];
  if (className) {
    classNames.push(className);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <OverflowWrapper className={classNames.join(" ")}>
        <Container className="timeline container">
          {events.map((event, i) => {
            let Node;
            if (event.component) {
              Node = event.component;
            } else {
              Node = nodes[event.type.toLowerCase()];
            }

            return (
              <NodeWrapper key={i} event={event} isCompact={isCompact}>
                <Node key={i} event={event} />
              </NodeWrapper>
            );
          })}
        </Container>
      </OverflowWrapper>
    </ThemeProvider>
  );
}
