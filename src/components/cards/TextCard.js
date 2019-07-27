import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import TextAtom from '../atoms/TextAtom';

export default function TextCard({ date, text, children }) {
  return (
    <Card date={date}>
      <TextAtom text={text} />
      {children}
    </Card>
  );
}

TextCard.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
};
