import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import EventDate from './EventDate';
import styled from 'styled-components';
import TimelineContext from '../../TimelineContext';
import { joinClassNames } from '../../utils/classNames';

const Container = styled.div`
  && {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: ${props => props.theme.card.borderRadius};
    background-color: ${props => props.theme.card.backgroundColor};
    color: ${props => props.theme.card.color};
    padding: ${props => props.theme.card.padding};
    box-shadow: ${props => props.theme.card.boxShadow};
    width: ${props => props.theme.card.width};
    max-width: ${props => props.theme.card.maxWidth};

    a {
      color: ${props => props.theme.card.a.color};
    }

    .url-button {
      display: inline-block;
      text-decoration: none;
      font-size: ${props => props.theme.urlButton.fontSize};
      background-color: ${props => props.theme.urlButton.backgroundColor};
      border: ${props => props.theme.urlButton.border};
      border-radius: ${props => props.theme.urlButton.borderRadius};
      padding: ${props => props.theme.urlButton.padding};
      margin: ${props => props.theme.urlButton.margin};
      color: ${props => props.theme.urlButton.color};
    }
  }
`;

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
