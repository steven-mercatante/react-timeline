import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Event from './Event';
import TextAtom from '../atoms/TextAtom';
import TweetAtom from '../atoms/TweetAtom';
import { joinClassNames } from '../../utils/classNames';

const TweetText = styled(TextAtom)(props => {
  const defaults = {};

  const style = { ...defaults, ...props.theme.tweetText };

  return style;
});

export default function TweetEvent(props) {
  const {
    date,
    id,
    text,
    marker,
    tweetOpts,
    children,
    className,
    card,
  } = props;

  return (
    <Event
      className={joinClassNames(['tweet-event', className])}
      date={date}
      marker={marker}
      card={card}
    >
      {text && <TweetText className="tweet-text" text={text} />}
      <TweetAtom id={id} tweetOpts={tweetOpts} />
      {children}
    </Event>
  );
}

TweetEvent.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string,
  marker: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  tweetOpts: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  card: PropTypes.func,
};
