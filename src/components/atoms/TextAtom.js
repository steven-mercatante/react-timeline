import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components';

const Container = styled.div(props => {
  const defaults = {
    marginBottom: '10px',
  };

  const style = { ...defaults, ...props.theme.textAtom };

  return style;
});

export default function TextAtom({ text }) {
  return (
    <Container>
      <Markdown className="markdown">{text}</Markdown>
    </Container>
  );
}

TextAtom.propTypes = {
  text: PropTypes.string.isRequired,
};
