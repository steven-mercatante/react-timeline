import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Event from '../events/Event';
import ImageAtom from '../atoms/ImageAtom';
import MarkdownAtom from '../atoms/MarkdownAtom';
import { joinClassNames } from '../../utils/classNames';

const ImageTextContainer = styled.div`
  && {
    margin-bottom: ${props => props.theme.imageText.marginBottom};
    font-size: ${props => props.theme.imageText.fontSize};
  }
`;

const ImageCreditContainer = styled.div`
  && {
    margin-top: ${props => props.theme.imageCredit.marginTop};
    font-size: ${props => props.theme.imageCredit.fontSize};
  }
`;

function ImageCredit({ text }) {
  return (
    <ImageCreditContainer>
      <MarkdownAtom text={text} />
    </ImageCreditContainer>
  );
}

function ImageText({ text }) {
  return (
    <ImageTextContainer>
      <MarkdownAtom text={text} />
    </ImageTextContainer>
  );
}

/**
 * Renders a responsive image as an event.
 */
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
      {text && <ImageText className="image-text" text={text} />}
      <ImageAtom src={src} alt={alt} />
      {credit && <ImageCredit className="image-credit" text={credit} />}
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
