import React from "react";
import styled from "styled-components";

const Container = styled.div`
  ${({ inline }) => inline && `margin-bottom: 10px;`}
`;

const Time = styled.time`
  background-color: ${props => props.theme.timestamp.backgroundColor};
  padding: ${props => props.theme.timestamp.padding};
  color: ${props => props.theme.timestamp.color}
    ${props =>
      props.theme.timestamp.border &&
      `border: ${props.theme.timestamp.border}`};

  border-radius: ${props => props.theme.timestamp.borderRadius};
  font-weight: ${props => props.theme.timestamp.fontWeight};
  font-size: ${props => props.theme.timestamp.fontSize};
  z-index: 100;
`;

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
