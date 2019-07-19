import styled from "styled-components";

const EventMarker = styled.span`
  position: absolute;
  top: ${props =>
    `calc(50% - ${parseInt(props.theme.marker.height, 10) / 2}px)`};
  left: ${props =>
    `calc(50% - ${parseInt(props.theme.marker.width, 10) / 2}px)`};
  background-color: ${props => props.theme.marker.backgroundColor};
  border: ${props => props.theme.marker.border};
  border-radius: ${props => props.theme.marker.borderRadius};
  width: ${props => props.theme.marker.width};
  height: ${props => props.theme.marker.height};
  z-index: 100;

  &.inline-events {
    left: 43px;
  }

  &.inline-events-inline-date {
    left: 13px;
  }

  @media (max-width: 768px) {
    left: 13px;
  }
`;

export default EventMarker;
