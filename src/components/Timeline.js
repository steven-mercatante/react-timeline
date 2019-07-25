import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";
import themes from "../themes";
import merge from "lodash.merge";
import isPlainObject from "lodash.isplainobject";
import kebabCase from "lodash.kebabcase";
import TimelineContext from "../TimelineContext";
import { joinClassNames } from "../utils/classNames";

const OverflowWrapper = styled.div`
  overflow: auto;
`;

const Container = styled.div(props => {
  const trackWidth = props.theme.timelineTrack.width || "2px";
  const trackDefaults = {
    position: "absolute",
    left: `calc(50% - ${parseInt(trackWidth, 10) / 2}px)`,
    width: trackWidth,
    height: "100%",
    backgroundColor: "#ee18b6",
    content: "''"
  };

  const defaults = {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,

    // renders the vertical line
    "::after": { ...trackDefaults, ...props.theme.timelineTrack },

    "&.inline-events": {
      "::after": {
        left: "130px"
      }
    },

    "&.inline-events-inline-date": {
      "::after": {
        left: "29px"
      }
    },

    "*, *:before, *:after": {
      boxSizing: "border-box"
    },

    "&.alt-evts-in-evts": {
      "@media (max-width: 768px)": {
        "::after": { left: "130px" }
      }
    }
  };

  const style = { ...defaults, ...props.theme.timeline };

  return style;
});

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

  // if (isCompact && finalOpts.responsiveLayout) {
  //   finalOpts.layout = finalOpts.responsiveLayout;
  // }

  function handleResize() {
    const mediaQueryList = window.matchMedia(`(max-width: 768px)`);
    if (mediaQueryList.matches === true) {
      setIsCompact(true);
    } else {
      setIsCompact(false);
    }
  }

  const classNames = joinClassNames([
    "timeline",
    "overflow-wrapper",
    className
  ]);
  const inlineDate = finalOpts.layout.toLowerCase().includes("inlinedate");
  const kebabLayout = kebabCase(finalOpts.layout);

  return (
    <ThemeProvider theme={finalTheme}>
      <OverflowWrapper className={classNames}>
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
