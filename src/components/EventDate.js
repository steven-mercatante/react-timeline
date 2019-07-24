import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { joinClassNames } from "../utils/classNames";

const Container = styled.div(props => {
  const defaults = {
    zIndex: 100,
    "&.inline": {
      marginBottom: "10px"
    }
  };

  const style = { ...defaults, ...props.theme.dateContainer };

  return style;
});

const Date = styled.time(props => {
  const defaults = {
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

export default function EventDate({ date, inline }) {
  if (!date) {
    return null;
  }

  const containerClassNames = joinClassNames([
    "date-container",
    inline ? "inline" : null
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
