import React from "react";
import PropTypes from "prop-types";
import Markdown from "markdown-to-jsx";
import styled from "styled-components";

const Container = styled.div(props => {
  const defaults = {
    marginBottom: "10px"
  };

  const style = { ...defaults, ...props.theme.conditionalMarkdown };

  return style;
});

export default function ConditionalMarkdown({ className, children }) {
  if (!children) {
    return null;
  }

  return (
    <Container className={className}>
      <Markdown>{children}</Markdown>
    </Container>
  );
}

ConditionalMarkdown.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired
};
