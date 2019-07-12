import styled from "styled-components";
import EventContainer from "./EventContainer";

const EventTimestamp = styled.time`
  background-color: #ec24b5;
  position: ${({ inline }) => (inline ? "static" : "absolute")};
  top: calc(50% - 10px);
  color: #fff
  padding: 4px;
  margin-bottom: 4px;
  border-radius: 4px;
  font-weight: 500;
  font-size: .85rem;

  ${EventContainer}:nth-child(odd) & {
    left: calc(50% + 30px);
  }
  
  ${EventContainer}:nth-child(even) & {
    right: calc(50% + 30px);
  }
`;

export default EventTimestamp;
