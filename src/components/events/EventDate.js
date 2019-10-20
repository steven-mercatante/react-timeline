import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { joinClassNames } from '../../utils/classNames';
import LAYOUTS from '../../constants/layouts';

const DateContainer = styled.div(props => {
  const defaults = {
    position: 'relative',
    zIndex: 100,

    '&.inline': {
      display: 'none',
      marginBottom: '10px',

      [`&.${LAYOUTS.ALTERNATE_EVENTS_INLINE_DATE}, &.${LAYOUTS.INLINE_EVENTS_INLINE_DATE}`]: {
        display: 'initial',
      },

      '@media (max-width: 768px)': {
        display: 'initial',
      },
    },

    '&:not(.inline)': {
      [`&.${LAYOUTS.ALTERNATE_EVENTS_INLINE_DATE}, &.${LAYOUTS.INLINE_EVENTS_INLINE_DATE}`]: {
        display: 'none',
      },

      '@media (max-width: 768px)': {
        display: 'none',
      },
    },
  };

  const style = { ...defaults, ...props.theme.dateContainer };

  return style;
});

const Date = styled.time(props => {
  const defaults = {
    position: 'relative',
  };

  const style = { ...defaults, ...props.theme.date };

  return style;
});

export default function EventDate({ date, inline, layout }) {
  if (!date) {
    return null;
  }

  const containerClassNames = joinClassNames([
    'date-container',
    inline ? 'inline' : null,
    layout,
  ]);
  const dateClassNames = joinClassNames(['date', inline ? 'inline' : null]);

  return (
    <DateContainer className={containerClassNames} inline={inline}>
      <Date className={dateClassNames}>{date}</Date>
    </DateContainer>
  );
}

EventDate.propTypes = {
  date: PropTypes.string.isRequired,
  inline: PropTypes.bool,
  layout: PropTypes.string.isRequired,
};
