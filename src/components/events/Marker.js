import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.span(props => {
  const defaults = {
    position: 'relative',
    backgroundColor: '#fff',
    border: '2px solid #EB2DB4',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    zIndex: 100,
  };

  const style = { ...defaults, ...props.theme.marker };

  return style;
});

export default function Marker() {
  return <Container className="marker" />;
}

Marker.propTypes = {
  children: PropTypes.node,
};
