import React from 'react'
import styled from "styled-components";

const Container = styled.span`
  border: 3px solid rebeccapurple;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.alternate-events { 
    flex-basis: 100px;
  }


 
  z-index: 100;

  // &.inline-events {
  //   left: 143px;
  // }

  // &.inline-events-inline-date {
  //   left: 13px;
  // }

  // @media (max-width: 768px) {
  //   left: 13px;
  // }
`;

const Marker = styled.span`
 background-color: ${props => props.theme.marker.backgroundColor};
  border: ${props => props.theme.marker.border};
  border-radius: ${props => props.theme.marker.borderRadius};
  width: ${props => props.theme.marker.width};
  height: ${props => props.theme.marker.height};

`

export default function EventMarker({layout}) {
  return <Container className={`marker container ${layout}`}><Marker /></Container>
};
