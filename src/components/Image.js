import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  max-height: 400px;
  width: 100%;

  img {
    flex: 1;
    object-fit: cover;
    overflow: hidden;
  }
`;

export default function Image({ src, alt }) {
  return (
    <Container>
      <img src={src} alt={alt} />
    </Container>
  );
}
