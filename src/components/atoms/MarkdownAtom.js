import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

export default function MarkdownAtom({ text }) {
  return <Markdown className="markdown">{text}</Markdown>;
}

MarkdownAtom.propTypes = {
  text: PropTypes.string.isRequired,
};
