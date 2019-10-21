import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img(props => {
  return props.theme.imageAtom;
});

export default function ImageAtom({ src, alt }) {
  return <Image src={src} alt={alt} />;
}

ImageAtom.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
