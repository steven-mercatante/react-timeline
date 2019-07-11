import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  width: 100%;

  img {
    flex: 1;
    object-fit: cover;
    overflow: hidden;
  }

  .credit {
    font-size: 0.85rem;
  }
`;

export default function Image({ src, alt, credit }) {
  return (
    <Container className="image">
      <img src={src} alt={alt} />
      {credit && <p className="credit">{credit}</p>}
    </Container>
  );
}
