import React from "react";
import Markdown from "markdown-to-jsx";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 10px;
`;

export default function ConditionalMarkdown({ text }) {
  if (text) {
    return (
      <Container>
        <Markdown>{text}</Markdown>
      </Container>
    );
  }

  return null;
}
