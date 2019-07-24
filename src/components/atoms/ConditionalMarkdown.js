import React from "react";
import PropTypes from "prop-types";
import Markdown from "markdown-to-jsx";
import styled from "styled-components";

const Container = styled.div(props => {
  const defaults = {
    marginBottom: '10px'
  }

  const style = { ...defaults, ...props.theme.conditionalMarkdown };

  return style;
})

export default function ConditionalMarkdown({ children }) {
  if (! children) {
    return null
  }

  return (
    <Container>
      <Markdown>{children}</Markdown>
    </Container>
  );
}

ConditionalMarkdown.propTypes = {
  children: PropTypes.string.isRequired
};
