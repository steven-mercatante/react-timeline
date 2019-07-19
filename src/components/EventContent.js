import styled from "styled-components";

const EventContent = styled.div`
  border: 1px solid yellow;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-basis: 50%;

  ${props =>
    props.theme.eventContent.flexGrow &&
    `flex-grow: ${props.theme.eventContent.flexGrow}`}

  ${props =>
    props.theme.eventContent.border &&
    `border: ${props.theme.eventContent.border}`};

  border-radius: ${props => props.theme.eventContent.borderRadius};
  background-color: ${props => props.theme.eventContent.backgroundColor};
  color: ${props => props.theme.eventContent.color};
  padding: ${props => props.theme.eventContent.padding};
`;

export default EventContent;
