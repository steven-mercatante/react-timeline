import styled from "styled-components";

const EventMarker = styled.span`
  position: absolute;
  top: calc(50% - 10px);
  left: ${({ alternateEvents }) =>
    alternateEvents ? "calc(50% - 12px)" : "32px"};
  background-color: #eb2db4;
  border: 2px solid #eb2db4;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  z-index: 100;

  @media (max-width: 768px) {
    left: 32px;
  }
`;

export default EventMarker;
