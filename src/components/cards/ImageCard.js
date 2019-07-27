import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ConditionalMarkdown from '../atoms/ConditionalMarkdown';
import Card from './Card';
import ImageAtom from '../atoms/ImageAtom';

const ImageText = styled(ConditionalMarkdown)(props => {
  const defaults = {};

  const style = { ...defaults, ...props.theme.imageText };

  return style;
});

const ImageCredit = styled(ConditionalMarkdown)(props => {
  const defaults = {
    marginTop: '10px',
    fontSize: '0.85rem',
  };

  const style = { ...defaults, ...props.theme.imageCredit };

  return style;
});

export default function ImageCard({ date, src, alt, credit, text, children }) {
  return (
    <Card date={date}>
      <ImageText className="image-text">{text}</ImageText>
      <ImageAtom src={src} alt={alt} />
      {credit && <ImageCredit className="image-credit">{credit}</ImageCredit>}
      {children}
    </Card>
  );
}

ImageCard.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  credit: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
};
