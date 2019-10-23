import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { joinClassNames } from '../../utils/classNames';
import LAYOUTS from '../../constants/layouts';

const DateContainer = styled.div`
  && {
    position: relative;
    z-index: 100;

    &.inline {
      display: none;
      margin-bottom: 10px;

      &.${LAYOUTS.ALTERNATE_EVENTS_INLINE_DATE},
        &.${LAYOUTS.INLINE_EVENTS_INLINE_DATE} {
        display: initial;
      }

      @media (max-width: 768px) {
        display: initial;
      }
    }

    &:not(.inline) {
      &.${LAYOUTS.ALTERNATE_EVENTS_INLINE_DATE},
        &.${LAYOUTS.INLINE_EVENTS_INLINE_DATE} {
        display: none;
      }

      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`;

const Date = styled.time`
  && {
    position: relative;
    background-color: ${props => props.theme.date.backgroundColor};
    padding: ${props => props.theme.date.padding};
    color: ${props => props.theme.date.color};
    border-radius: ${props => props.theme.date.borderRadius};
    font-weight: ${props => props.theme.date.fontWeight};
    font-size: ${props => props.theme.date.fontSize};
  }
`;

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
