import React from "react";
import styled from "styled-components";
import EventContainer from "./EventContainer";

const Container = styled.div`
  // top: ${props => `calc(50% + ${props.theme.timestamp.topOffset})`};
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

export default function EventTimestamp({ children }) {
  return (
    <div>
      <Time>{children}</Time>
    </div>
  );
}
