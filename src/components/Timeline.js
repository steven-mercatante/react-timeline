import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import TextCard from "./TextCard";
import ImageCard from "./ImageCard";
import Event from "./Event";
import YouTubeCard from "./YouTubeCard";
import TwitterCard from "./TwitterCard";
import themes from "../themes";
import merge from "lodash.merge";
import isPlainObject from "lodash.isplainobject";
import kebabCase from "lodash.kebabcase";

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
      left: 19px;
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
  // max-width: 800px;
  &.inline-events-inline-date {
    padding-left: 0px;
  }
`;

const cards = {
  text: TextCard,
  image: ImageCard,
  youtube: YouTubeCard,
  twitter: TwitterCard
};

// TODO: need to account for user passing invalid layout and responsiveLayout values
const _opts = {
  animationsEnabled: true,
  layout: "alternateEvents", // alternateEvents, alternateEventsInlineDate, inlineEvents, inlineEventsInlineDate
  responsiveLayout: "inlineEvents"
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
  console.table(finalOpts);
  console.log("is compact?", isCompact);
  if (isCompact && finalOpts.responsiveLayout) {
    finalOpts.layout = finalOpts.responsiveLayout;
  }

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

  const inlineTimestamp = finalOpts.layout.toLowerCase().includes("inlinedate");
  const kebabLayout = kebabCase(finalOpts.layout);

  return (
    <ThemeProvider theme={finalTheme}>
      <OverflowWrapper className={classNames.join(" ")}>
        <Container className={`timeline container ${kebabLayout}`}>
          <Events className={`events ${kebabLayout}`}>
            {events.map((event, i) => {
              let Card;
              if (event.component) {
                Card = event.component;
              } else {
                Card = cards[event.type.toLowerCase()];
              }

              return (
                <Event
                  key={i}
                  event={event}
                  isCompact={isCompact}
                  opts={finalOpts}
                  inlineTimestamp={inlineTimestamp}
                >
                  <Card
                    event={event}
                    isCompact={isCompact}
                    inlineTimestamp={inlineTimestamp}
                  />
                </Event>
              );
            })}
          </Events>
        </Container>
      </OverflowWrapper>
    </ThemeProvider>
  );
}
