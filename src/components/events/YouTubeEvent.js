import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Event from './Event';
import ConditionalMarkdown from '../atoms/ConditionalMarkdown';
import YouTubeAtom from '../atoms/YouTubeAtom';
import { joinClassNames } from '../../utils/classNames';

const YouTubeText = styled(ConditionalMarkdown)(props => {
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
      <YouTubeText className="youtube-text">{text}</YouTubeText>
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
