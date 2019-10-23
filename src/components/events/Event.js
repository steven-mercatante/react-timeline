import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import EventDate from './EventDate';
import Marker from './Marker';
import Card from './Card';
import styled from 'styled-components';
import TimelineContext from '../../TimelineContext';
import { joinClassNames } from '../../utils/classNames';
import LAYOUTS from '../../constants/layouts';

const Container = styled.div`
  && {
    position: relative;
    display: flex;
    margin-bottom: ${props => props.theme.event.marginBottom};

    :nth-child(1) {
      margin-top: ${props => props.theme.event.marginBottom};
    }

    :nth-child(even) {
      flex-direction: row-reverse;
    }

    &.${LAYOUTS.INLINE_EVENTS}, &.${LAYOUTS.INLINE_EVENTS_INLINE_DATE} {
      flex-direction: row !important;
    }

    @media (max-width: 768px) {
      flex-direction: row !important;
    }
  }
`;

const DateColumn = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flexBasis: '50%',
  alignItems: 'flex-end',
  zIndex: 300,

  [`&.${LAYOUTS.ALTERNATE_EVENTS}`]: {
    [`${Container}:nth-child(even) &`]: {
      alignItems: 'flex-start',
    },
  },

  [`&.${LAYOUTS.INLINE_EVENTS}`]: {
    flexBasis: '100px',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  [`&.${LAYOUTS.INLINE_EVENTS_INLINE_DATE}`]: {
    flexBasis: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  '@media (max-width: 768px)': {
    flexBasis: '0 !important',
  },
});

const MarkerColumn = styled.div`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 40px;
    flex-shrink: 0;
    z-index: 200;
  }
`;

const CardColumn = styled.div`
  && {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-basis: 50%;
    flex-grow: 1;

    &.${LAYOUTS.ALTERNATE_EVENTS}, &.${LAYOUTS.ALTERNATE_EVENTS_INLINE_DATE} {
      ${Container}:nth-child(even) & {
        align-items: flex-end;
      }
    }

    @media (max-width: 768px) : {
      align-items: flex-start !important;
    }
  }
`;

export default function Event({ date, marker, children, className, card }) {
  const { layout } = useContext(TimelineContext);

  let DateComponent;
  if (date) {
    if (typeof date === 'function') {
      DateComponent = date({ layout });
    } else {
      DateComponent = <EventDate date={date} layout={layout} />;
    }
  }

  let MarkerComponent;
  if (typeof marker === 'function') {
    MarkerComponent = marker({ layout });
  } else {
    MarkerComponent = <Marker layout={layout} />;
  }

  let CardComponent;
  if (typeof card === 'function') {
    CardComponent = card({ date, children });
  } else {
    CardComponent = <Card date={date} children={children} />;
  }

  const classNames = joinClassNames(['event', className, layout]);

  return (
    <Container className={classNames}>
      <DateColumn className={`date-col ${layout}`}>{DateComponent}</DateColumn>

      <MarkerColumn className={`marker-col ${layout}`}>
        {MarkerComponent}
      </MarkerColumn>

      <CardColumn className={`card-col ${layout}`}>{CardComponent}</CardColumn>
    </Container>
  );
}

Event.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
  marker: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  card: PropTypes.func,
};
