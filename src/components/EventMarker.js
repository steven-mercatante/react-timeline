import styled from "styled-components";

const EventMarker = styled.span`
  position: absolute;
  top: calc(50% - 10px);
  left: calc(50% - 12px);
  background-color: #eb2db4;
  border: 2px solid #eb2db4;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  z-index: 100;

  @media (max-width: 768px) {
    left: 13px;
  }
`;

export default EventMarker;
