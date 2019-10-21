import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.span(props => {
  const defaults = {
    position: 'relative',
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
