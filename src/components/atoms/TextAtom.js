import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

export default function TextAtom({ text }) {
  if (!text) {
    return null;
  }

  return <Markdown className="markdown">{text}</Markdown>;
}

TextAtom.propTypes = {
  text: PropTypes.string.isRequired,
};
