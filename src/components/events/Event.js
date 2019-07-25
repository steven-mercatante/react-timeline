import React, { useContext } from "react";
import PropTypes from "prop-types";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import EventDate from "../EventDate";
import EventMarker from "../EventMarker";
import styled from "styled-components";
import TimelineContext from "../../TimelineContext";
import { joinClassNames } from "../../utils/classNames";

const Container = styled.div(props => {
  const defaults = {
    position: "relative",
    display: "flex",
    marginBottom: "20px",

    ":nth-child(1)": {
      marginTop: "20px"
    },

    "&.inline-events, &.inline-events-inline-date": {
      flexDirection: "row !important"
    },

    ":nth-child(even)": {
      flexDirection: "row-reverse"
    },

    "&.alt-evts-in-evts": {
      "@media (max-width: 768px)": {
        flexDirection: "row !important"
      }
    }
  };

  if (props.animationsEnabled) {
    defaults.opacity = props.isVisible ? 1 : 0.15;
    defaults.transition = "opacity 0.25s ease-in";
  }

  const style = { ...defaults, ...props.theme.event };

  return style;
});

const DateColumn = styled.div(props => {
  const defaults = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flexBasis: "50%",
    alignItems: "flex-end",

    "&.alternate-events, &.alternate-events-inline-date": {
      flexBasis: "50%",

      [`${Container}:nth-child(even) &`]: {
        alignItems: "flex-start"
      }
    },

    "&.alternate-events-inline-date": {
      marginBottom: "10px"
    },

    "&.inline-events": {
      flexBasis: "100px",
      justifyContent: "center",
      alignItems: "flex-end"
    },

    "&.inline-events-inline-date": {
      marginBottom: "10px",
      flexBasis: 0,
      justifyContent: "center",
      alignItems: "flex-end"
    },

    "&.alt-evts-in-evts": {
      "@media (max-width: 768px)": {
        flexBasis: "100px",
        justifyContent: "center",
        alignItems: "flex-end"
      }
    }
  };

  const style = { ...defaults, ...props.theme.eventDateColumn };

  return style;
});

const MarkerColumn = styled.div(props => {
  const defaults = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexBasis: "40px",
    flexShrink: 0
  };

  const style = { ...defaults, ...props.theme.eventMarkerColumn };

  return style;
});

const CardColumn = styled.div(props => {
  const defaults = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    flexBasis: "50%",
    flexGrow: "1",

    "&.alternate-events, &.alternate-events-inline-date": {
      [`${Container}:nth-child(even) &`]: {
        alignItems: "flex-end"
      }
    }
  };

  const style = { ...defaults, ...props.theme.eventCardColumn };

  return style;
});

export default function Event({ date, marker, children, className }) {
  const { kebabLayout, inlineDate, opts } = useContext(TimelineContext);

  // TODO: can the intersection observer opts be passed via param so user can customize?
  const [isVisible, ref] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });

  let DateComponent;
  if (date) {
    if (typeof date === "string") {
      DateComponent = <EventDate date={date} layout={kebabLayout} />;
    } else if (typeof date === "function") {
      DateComponent = date({ layout: kebabLayout });
    } else {
      DateComponent = React.cloneElement(date, { layout: kebabLayout });
    }
  }

  let MarkerComponent;
  if (marker && typeof marker === "function") {
    // user passed a function
    MarkerComponent = marker({ layout: kebabLayout });
  } else if (marker) {
    // user passed JSX
    MarkerComponent = React.cloneElement(marker, { layout: kebabLayout });
  } else {
    // user didn't pass anything - use default marker component
    MarkerComponent = <EventMarker layout={kebabLayout} />;
  }

  const classNames = joinClassNames(["event", className, kebabLayout]);

  return (
    <Container
      className={classNames}
      ref={ref}
      isVisible={isVisible}
      animationsEnabled={opts.animationsEnabled}
    >
      <DateColumn className={`date-col ${kebabLayout}`}>
        {!inlineDate && DateComponent}
      </DateColumn>

      <MarkerColumn className={`marker-col ${kebabLayout}`}>
        {MarkerComponent}
      </MarkerColumn>

      <CardColumn className={`card-col ${kebabLayout}`}>{children}</CardColumn>
    </Container>
  );
}

Event.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element
  ]).isRequired,
  marker: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  children: PropTypes.node.isRequired
};
