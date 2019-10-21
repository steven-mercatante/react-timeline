import React from 'react';
import PropTypes from 'prop-types';
import MarkdownAtom from './MarkdownAtom';
import styled from 'styled-components';

const Container = styled.div(props => {
  return props.theme.textAtom;
});

export default function TextAtom({ text }) {
  return (
    <Container className="text-atom">
      <MarkdownAtom text={text} />
    </Container>
  );
}

TextAtom.propTypes = {
  text: PropTypes.string.isRequired,
};
