import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import EventDate from './EventDate';
import Marker from './Marker';
import Card from './Card';
import styled from 'styled-components';
import TimelineContext from '../../TimelineContext';
import { joinClassNames } from '../../utils/classNames';
import LAYOUTS from '../../constants/layouts';

const Container = styled.div(props => {
  const defaults = {
    position: 'relative',
    display: 'flex',
    marginBottom: '20px',

    ':nth-child(1)': {
      marginTop: '20px',
    },

    ':nth-child(even)': {
      flexDirection: 'row-reverse',
    },

    [`&.${LAYOUTS.INLINE_EVENTS}, &.${LAYOUTS.INLINE_EVENTS_INLINE_DATE}`]: {
      flexDirection: 'row !important',
    },

    '@media (max-width: 768px)': {
      flexDirection: 'row !important',
    },
  };

  const style = { ...defaults, ...props.theme.event };

  return style;
});

const DateColumn = styled.div(props => {
  const defaults = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexBasis: '50%',
    alignItems: 'flex-end',

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
  };

  const style = { ...defaults, ...props.theme.dateColumn };

  return style;
});

const MarkerColumn = styled.div(props => {
  const defaults = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '40px',
    flexShrink: 0,
  };

  const style = { ...defaults, ...props.theme.markerColumn };

  return style;
});

const CardColumn = styled.div(props => {
  const defaults = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexBasis: '50%',
    flexGrow: '1',

    [`&.${LAYOUTS.ALTERNATE_EVENTS}, &.${LAYOUTS.ALTERNATE_EVENTS_INLINE_DATE}`]: {
      [`${Container}:nth-child(even) &`]: {
        alignItems: 'flex-end',
      },
    },

    '@media (max-width: 768px)': {
      alignItems: 'flex-start !important',
    },
  };

  const style = { ...defaults, ...props.theme.cardColumn };

  return style;
});

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
