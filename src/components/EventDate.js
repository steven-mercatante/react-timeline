import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { joinClassNames } from "../utils/classNames";

const Container = styled.div(props => {
  const defaults = {
    position: "relative",
    zIndex: 100,

    "&.inline": {
      display: "none",
      marginBottom: "10px",

      "&.alt-evts-inline-date, &.inline-evts-inline-date": {
        display: "initial"
      },

      "@media (max-width: 768px)": {
        display: "initial"
      }
    },

    "&:not(.inline)": {
      "&.alt-evts-inline-date, &.inline-evts-inline-date": {
        display: "none"
      },

      "@media (max-width: 768px)": {
        display: "none"
      }
    }
  };

  const style = { ...defaults, ...props.theme.dateContainer };

  return style;
});

const Date = styled.time(props => {
  const defaults = {
    position: "relative",
    backgroundColor: "#ec24b5",
    padding: "4px",
    color: "#fff",
    borderRadius: "4px",
    fontWeight: 500,
    fontSize: ".85rem"
  };

  const style = { ...defaults, ...props.theme.date };

  return style;
});

export default function EventDate({ date, inline, layout }) {
  if (!date) {
    return null;
  }

  const containerClassNames = joinClassNames([
    "date-container",
    inline ? "inline" : null,
    layout
  ]);
  const dateClassNames = joinClassNames(["date", inline ? "inline" : null]);

  return (
    <Container className={containerClassNames} inline={inline}>
      <Date className={dateClassNames}>{date}</Date>
    </Container>
  );
}

EventDate.propTypes = {
  date: PropTypes.string.isRequired,
  inline: PropTypes.bool
};
