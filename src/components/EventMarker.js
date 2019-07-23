import React from "react";
import styled from "styled-components";

const Marker = styled.span`
  background-color: ${props => props.theme.marker.backgroundColor};
  border: ${props => props.theme.marker.border};
  border-radius: ${props => props.theme.marker.borderRadius};
  width: ${props => props.theme.marker.width};
  height: ${props => props.theme.marker.height};
  z-index: 100;
`;

export default function EventMarker() {
  return <Marker className="marker" />;
}
