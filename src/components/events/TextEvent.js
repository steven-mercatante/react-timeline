import React from 'react';
import PropTypes from 'prop-types';
import Event from './Event';
import Card from './Card';
import TextAtom from '../atoms/TextAtom';
import { joinClassNames } from '../../utils/classNames';

export default function TextEvent(props) {
  const { date, text, marker, children, className } = props;

  return (
    <Event
      className={joinClassNames(['text-event', className])}
      date={date}
      marker={marker}
      card={Card}
    >
      <TextAtom text={text} />
      {children}
    </Event>
  );
}

TextEvent.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
  text: PropTypes.string.isRequired,
  marker: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  children: PropTypes.node,
  className: PropTypes.string,
};
