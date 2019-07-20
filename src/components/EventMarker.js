import React from "react";
import styled from "styled-components";

const Container = styled.span`
  border: 1px solid rebeccapurple;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 40px;
  flex-shrink: 0;
  z-index: 100;
`;

const Marker = styled.span`
  background-color: ${props => props.theme.marker.backgroundColor};
  border: ${props => props.theme.marker.border};
  border-radius: ${props => props.theme.marker.borderRadius};
  width: ${props => props.theme.marker.width};
  height: ${props => props.theme.marker.height};
`;

export default function EventMarker({ layout }) {
  return (
    <Container className={`marker container ${layout}`}>
      <Marker />
    </Container>
  );
}
