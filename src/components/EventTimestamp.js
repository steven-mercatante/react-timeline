import styled from "styled-components";
import EventContainer from "./EventContainer";

const EventTimestamp = styled.div`
  position: ${({ inline }) => (inline === true ? "static" : "absolute")};
  top: ${props => `calc(50% + ${props.theme.timestamp.topOffset})`};
  ${({ inline }) => inline && `margin-bottom: 10px`}
  z-index: 100;

  ${EventContainer}:nth-child(even) & {
    left: ${props => `calc(50% + ${props.theme.timestamp.leftOffset})`}
  }

  ${EventContainer}:nth-child(odd) & {
    right: ${props => `calc(50% + ${props.theme.timestamp.rightOffset})`}
  }

  time {
    background-color: ${props => props.theme.timestamp.backgroundColor};
    padding: ${props => props.theme.timestamp.padding};
    color: ${props => props.theme.timestamp.color}
    ${props =>
      props.theme.timestamp.border &&
      `border: ${props.theme.timestamp.border}`};
    border-radius: ${props => props.theme.timestamp.borderRadius};
    font-weight: ${props => props.theme.timestamp.fontWeight};
    font-size: ${props => props.theme.timestamp.fontSize};
  }
`;

export default EventTimestamp;
