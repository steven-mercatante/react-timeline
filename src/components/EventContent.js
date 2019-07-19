import styled from "styled-components";
import EventContainer from "./EventContainer";

// TODO: should width be able to be passed in via theme?
const EventContent = styled.div`
  border: 1px solid yellow;
  position: relative;
  display: flex;
  flex-direction: column;
  ${props =>
    props.theme.eventContent.border &&
    `border: ${props.theme.eventContent.border}`};
  border-radius: ${props => props.theme.eventContent.borderRadius};
  background-color: ${props => props.theme.eventContent.backgroundColor};
  color: ${props => props.theme.eventContent.color};
  padding: ${props => props.theme.eventContent.padding};

  ${props =>
    props.theme.eventContent.minWidth &&
    `min-width: ${props.theme.eventContent.minWidth}`}

  max-width: ${props => props.theme.eventContent.maxWidth};
  ${({ width }) => width && `width: ${width};`}

  ${EventContainer}:nth-child(odd) & {
    left: ${props => `calc(50% + ${props.theme.eventContent.leftOffset})`};
  }

  ${EventContainer}:nth-child(even) & {
    right: ${props => `calc(50% + ${props.theme.eventContent.rightOffset})`};
  }

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

export default EventContent;
