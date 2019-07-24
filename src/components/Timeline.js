import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import themes from "../themes";
import merge from "lodash.merge";
import isPlainObject from "lodash.isplainobject";
import kebabCase from "lodash.kebabcase";
import TimelineContext from "../TimelineContext";

import ReactDOM from "react-dom";
import axe from "react-axe";
axe(React, ReactDOM, 1000);

const OverflowWrapper = styled.div`
  overflow: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: ${props => props.theme.maxWidth};
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

// TODO: need to account for user passing invalid layout and responsiveLayout values
const _opts = {
  animationsEnabled: true,
  layout: "alternateEvents", // alternateEvents, alternateEventsInlineDate, inlineEvents, inlineEventsInlineDate
  responsiveLayout: "inlineEvents"
};

export default function Timeline({ className, theme, opts, children }) {
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

  const inlineDate = finalOpts.layout.toLowerCase().includes("inlinedate");
  const kebabLayout = kebabCase(finalOpts.layout);

  return (
    <ThemeProvider theme={finalTheme}>
      <OverflowWrapper className={classNames.join(" ")}>
        <Container className={`timeline container ${kebabLayout}`}>
          <TimelineContext.Provider
            value={{
              opts: finalOpts,
              kebabLayout,
              isCompact,
              inlineDate
            }}
          >
            {children}
          </TimelineContext.Provider>
        </Container>
      </OverflowWrapper>
    </ThemeProvider>
  );
}

Timeline.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.object,
  opts: PropTypes.object,
  children: PropTypes.element.isRequired
};
