import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import TextNode from "./TextNode";
import ImageNode from "./ImageNode";
import Event from "./Event";
import YouTubeNode from "./YouTubeNode";
import TwitterNode from "./TwitterNode";
import themes from "../themes";
import merge from "lodash.merge";
import isPlainObject from "lodash.isplainobject";
import kebabCase from 'lodash.kebabcase'

// TODO: move to own module?
const OverflowWrapper = styled.div`
  overflow: auto;
`;

// TODO: move to own module?
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize};
  ${props =>
    props.theme.backgroundColor &&
    `background-color: ${props.theme.backgroundColor}`}

  // renders the vertical line
  ::after {
    position: absolute;
    left: ${props =>
      `calc(50% - ${parseInt(props.theme.track.width, 10) / 2}px)`};
    width: ${props => props.theme.track.width};
    height: 100%;
    background-color: ${props => props.theme.track.backgroundColor};
    content: "";
  }

  &.inline-events {
    ::after {
      left: 130px;
    }
  }

  &.inline-events-inline-date {
    ::after {
      left: 29px;
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;

const Events = styled.div`
  padding: 10px;
  max-width: 800px;
`

const nodes = {
  text: TextNode,
  image: ImageNode,
  youtube: YouTubeNode,
  twitter: TwitterNode
};

const _opts = {
  animationsEnabled: true,
  layout: 'alternateEvents' // alternateEvents, alternateEventsInlineDate, inlineEvents, inlineEventsInlineDate
};

export default function Timeline({ className, events, theme, opts }) {
  // TODO: use a more semantic var name
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  let finalTheme = themes.default;
  if (typeof theme === "string" && themes[theme.toLowerCase()]) {
    finalTheme = themes[theme.toLowerCase()];
  }
  if (isPlainObject(theme)) {
    finalTheme = merge(finalTheme, theme);
  }

  let finalOpts = _opts;
  if (opts && isPlainObject(opts)) {
    finalOpts = merge(finalOpts, opts);
  }
  // console.table(finalOpts)

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
    <ThemeProvider theme={finalTheme}>
      <OverflowWrapper className={classNames.join(" ")}>
        <Container className={`timeline container ${kebabCase(finalOpts.layout)}`}>
          <Events className="events">
            {events.map((event, i) => {
              let Node;
              if (event.component) {
                Node = event.component;
              } else {
                Node = nodes[event.type.toLowerCase()];
              }

              return (
                <Event
                  key={i}
                  event={event}
                  isCompact={false}
                  opts={finalOpts}
                >
                  <Node event={event} />
                </Event>
              );
            })}
          </Events>
        </Container>
      </OverflowWrapper>
    </ThemeProvider>
  );
}
