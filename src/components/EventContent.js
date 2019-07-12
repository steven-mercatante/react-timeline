import styled from "styled-components";
import EventContainer from "./EventContainer";

const EventContent = styled.div`
  border: 1px solid yellow;
  position: relative;
  border-radius: 4px;
  background-color: #4e4e50;
  flex-grow: 0;
  color: #fff;
  padding: 10px;

  ${({ width }) => width && `width: ${width}`}

  max-width: 42%;

  ${EventContainer}:nth-child(odd) & {
    left: calc(50% + 30px);
  }

  ${EventContainer}:nth-child(even) & {
    right: calc(50% + 30px);
  }
`;

export default EventContent;
