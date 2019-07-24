import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div(props => {
  const style = {
    zIndex: 100
  }

  if (props.inline) {
    style.marginBottom = props.theme.date.marginBottom || '10px'
  }

  return style;
})

const Time = styled.time(props => {
  const defaults = {
    backgroundColor: '#ec24b5',
    padding: '4px',
    color: '#fff',
    borderRadius: '4px',
    fontWeight: 500,
    fontSize: '.85rem',
  }

  const style = { ...defaults, ...props.theme.date };

  return style;
})

export default function EventDate({ date, inline }) {
  if (!date) {
    return null;
  }

  return (
    <Container className="date" inline={inline}>
      <Time>{date}</Time>
    </Container>
  );
}

EventDate.propTypes = {
  date: PropTypes.string.isRequired,
  inline: PropTypes.bool
};
