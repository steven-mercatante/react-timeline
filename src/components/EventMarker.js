import styled from "styled-components";

const EventMarker = styled.span`
  background-color: #ee18b6;
  border: 2px solid #ee18b6;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 10px);
  right: -40px;
  width: 20px;
  height: 20px;
  z-index: 100;
`;

export default EventMarker;
