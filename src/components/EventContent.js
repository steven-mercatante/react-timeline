import styled from "styled-components";
import EventContainer from "./EventContainer";

const EventContent = styled.div`
  // display: inline-block;
  border: 1px solid yellow;
  position: relative;
  border-radius: 4px;
  background-color: #4e4e50;
  flex-grow: 0;
  color: #fff;
  padding: 10px;
  max-width: ${({ alternateEvents }) => (alternateEvents ? "42%" : "88%")};

  ${EventContainer}:nth-child(odd) & {
    left: ${({ alternateEvents }) => (alternateEvents ? "auto" : "80px")};
    right: ${({ alternateEvents }) =>
      alternateEvents ? "calc(50% + 30px)" : 0};
  }

  ${EventContainer}:nth-child(even) & {
    left: ${({ alternateEvents }) =>
      alternateEvents ? "calc(50% + 30px)" : "80px"};
  }
`;

export default EventContent;
