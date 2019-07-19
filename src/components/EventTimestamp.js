import styled from "styled-components";
import EventContainer from "./EventContainer";

// TODO: write "inline" rules in an ".inline" selector instead of doing hard-to-read logic with `props`

const EventTimestamp = styled.div`
  border: 1px solid cyan;

  display: flex;
  flex-basis: 100px;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  left: 30px;

  // position: ${({ inline }) => (inline === true ? "static" : "absolute")};
  top: ${props => `calc(50% + ${props.theme.timestamp.topOffset})`};
  ${({ inline }) => inline && `margin-bottom: 10px`}
  z-index: 100;

  // ${EventContainer}:nth-child(even) & {
  //   left: ${props => `calc(50% + ${props.theme.timestamp.leftOffset})`}
  // }

  // ${EventContainer}:nth-child(odd) & {
  //   right: ${props => `calc(50% + ${props.theme.timestamp.rightOffset})`}
  // }

  time {
    background-color: ${props => props.theme.timestamp.backgroundColor};
    // padding: ${props => props.theme.timestamp.padding};
    color: ${props => props.theme.timestamp.color}
    // ${props =>
      props.theme.timestamp.border &&
      `border: ${props.theme.timestamp.border}`};
    border-radius: ${props => props.theme.timestamp.borderRadius};
    font-weight: ${props => props.theme.timestamp.fontWeight};
    font-size: ${props => props.theme.timestamp.fontSize};
  }
`;

export default EventTimestamp;
