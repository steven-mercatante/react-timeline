import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
  && {
    overflow: hidden;
    object-fit: ${props => props.theme.imageAtom.objectFit};
    width: ${props => props.theme.imageAtom.width};
    max-height: ${props => props.theme.imageAtom.maxHeight};
  }
`;

export default function ImageAtom({ src, alt }) {
  return <Image src={src} alt={alt} />;
}

ImageAtom.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
