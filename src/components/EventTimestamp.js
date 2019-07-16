import styled from "styled-components";
import EventContainer from "./EventContainer";

const EventTimestamp = styled.div`
  position: ${({ inline }) => (inline === true ? "static" : "absolute")};
  top: calc(50% - 10px);
  ${({ inline }) => inline && `margin-bottom: 10px`}
  z-index: 100;

  ${EventContainer}:nth-child(even) & {
    left: calc(50% + 30px);
  }

  ${EventContainer}:nth-child(odd) & {
    right: calc(50% + 30px);
  }

  time {
    background-color: #ec24b5;
    padding: 4px;
    color: #fff
    border-radius: 4px;
    font-weight: 500;
    font-size: .85rem;
  }
`;

export default EventTimestamp;
