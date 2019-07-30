import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Event from './Event';
import TextAtom from '../atoms/TextAtom';
import YouTubeAtom from '../atoms/YouTubeAtom';
import { joinClassNames } from '../../utils/classNames';

const YouTubeText = styled(TextAtom)(props => {
  const defaults = {};

  const style = { ...defaults, ...props.theme.youTubeText };

  return style;
});

export default function YouTubeEvent(props) {
  const { date, id, name, text, marker, children, className, card } = props;

  return (
    <Event
      className={joinClassNames(['youtube-event', className])}
      date={date}
      marker={marker}
      card={card}
    >
      {text && <YouTubeText className="youtube-text" text={text} />}
      <YouTubeAtom id={id} name={name} />
      {children}
    </Event>
  );
}

YouTubeEvent.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  text: PropTypes.string,
  marker: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  children: PropTypes.node,
  className: PropTypes.string,
  card: PropTypes.func,
};
