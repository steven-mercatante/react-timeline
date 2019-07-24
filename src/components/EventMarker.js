import React from "react";
import styled from "styled-components";

const Marker = styled.span(props => {
  const defaults = {
    backgroundColor: '#fff',
    border: '2px solid black',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    zIndex: 100
  }

  const style = { ...defaults, ...props.theme.marker };

  return style;
})


export default function EventMarker() {
  return <Marker className="marker" />;
}
