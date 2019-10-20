import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import EventDate from './EventDate';
import styled from 'styled-components';
import TimelineContext from '../../TimelineContext';
import { joinClassNames } from '../../utils/classNames';

const Container = styled.div(props => {
  const defaults = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  };

  const style = { ...defaults, ...props.theme.card };

  return style;
});

export default function Card({ date, children }) {
  const { layout } = useContext(TimelineContext);

  let DateComponent;
  if (date) {
    if (typeof date === 'string') {
      DateComponent = <EventDate date={date} layout={layout} inline={true} />;
    } else if (typeof date === 'function') {
      DateComponent = date({ layout, inline: true });
    } else {
      DateComponent = React.cloneElement(date, {
        layout,
        inline: true,
      });
    }
  }

  return (
    <Container className={joinClassNames(['card', layout])}>
      {DateComponent}
      {children}
    </Container>
  );
}

Card.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
  children: PropTypes.node.isRequired,
};
