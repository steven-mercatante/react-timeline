import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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

  return (
    <Container
      className={`date-container ${inline ? "inline" : ""}`}
      inline={inline}
    >
      <Date className={`date ${inline ? "inline" : ""}`}>{date}</Date>
    </Container>
  );
}

EventDate.propTypes = {
  date: PropTypes.string.isRequired,
  inline: PropTypes.bool
};
