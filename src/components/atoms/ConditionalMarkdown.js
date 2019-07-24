import React from "react";
import PropTypes from "prop-types";
import Markdown from "markdown-to-jsx";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 10px;
`;

export default function ConditionalMarkdown({ children }) {
  if (children) {
    return (
      <Container>
        <Markdown>{children}</Markdown>
      </Container>
    );
  }

  return null;
}

ConditionalMarkdown.propTypes = {
  children: PropTypes.string.isRequired
};
