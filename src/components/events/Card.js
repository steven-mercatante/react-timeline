import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import EventDate from '../EventDate';
import styled from 'styled-components';
import TimelineContext from '../../TimelineContext';
import { joinClassNames } from '../../utils/classNames';

const Container = styled.div(props => {
  const defaults = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '4px',
    backgroundColor: '#fff',
    color: '#333',
    padding: '10px',
    boxShadow: '0 4px 6px 0 hsla(0, 0%, 0%, 0.2)',
    width: '100%',
    maxWidth: '560px',
  };

  const style = { ...defaults, ...props.theme.card };

  return style;
});

export default function Card({ date, children, className }) {
  const { kebabLayout } = useContext(TimelineContext);

  let DateComponent;
  if (date) {
    if (typeof date === 'string') {
      DateComponent = (
        <EventDate date={date} layout={kebabLayout} inline={true} />
      );
    } else if (typeof date === 'function') {
      DateComponent = date({ layout: kebabLayout, inline: true });
    } else {
      DateComponent = React.cloneElement(date, {
        layout: kebabLayout,
        inline: true,
      });
    }
  }

  return (
    <Container className={joinClassNames(['card', className, kebabLayout])}>
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
  className: PropTypes.string,
};
