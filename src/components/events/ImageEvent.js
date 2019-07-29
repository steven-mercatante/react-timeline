import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Event from '../events/Event';
import ConditionalMarkdown from '../atoms/ConditionalMarkdown';
import ImageAtom from '../atoms/ImageAtom';
import { joinClassNames } from '../../utils/classNames';

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

export default function ImageEvent(props) {
  const {
    date,
    src,
    alt,
    credit,
    text,
    marker,
    children,
    className,
    card,
  } = props;

  return (
    <Event
      className={joinClassNames(['image-event', className])}
      date={date}
      marker={marker}
      card={card}
    >
      <ImageText className="image-text">{text}</ImageText>
      <ImageAtom src={src} alt={alt} />
      {credit && <ImageCredit className="image-credit">{credit}</ImageCredit>}
      {children}
    </Event>
  );
}

ImageEvent.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  credit: PropTypes.string,
  text: PropTypes.string,
  marker: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  children: PropTypes.node,
  className: PropTypes.string,
  card: PropTypes.func,
};
