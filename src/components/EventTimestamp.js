import styled from "styled-components";
import EventContainer from "./EventContainer";
import Event from "./Event";

const EventTimestamp = styled.div`
  border: 1px solid cyan;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  &.alternate-events {
    flex-basis: 50%;

    ${EventContainer}:nth-child(even) & {
      align-items: flex-start;
    }
  }
  
  // &.alternate-events {
  //   position: absolute;
  //   ${EventContainer}:nth-child(even) & {
  //     left: ${props => `calc(50% + ${props.theme.timestamp.leftOffset})`}
  //   }
  
  //   ${EventContainer}:nth-child(odd) & {
  //     right: ${props => `calc(50% + ${props.theme.timestamp.rightOffset})`}
  //   }
  // }

  &.alternate-events-inline-date {
    margin-bottom: 10px
  }

  // &.inline-events {
  //   display: flex;
  //   flex-basis: 100px;
  //   justify-content: flex-end;
  //   align-items: center;
  //   position: relative;
  //   left: 30px;
  // }

  &.inline-events-inline-date {
    margin-bottom: 10px;
  }

  top: ${props => `calc(50% + ${props.theme.timestamp.topOffset})`};
  z-index: 100;

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
