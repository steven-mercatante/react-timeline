import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  align-self: flex-start;
  margin-bottom: 10px;
  // border: 1px solid red;
  text-align: right;

  :nth-child(1) {
    margin-top: 10px;
  }

  :nth-child(even) {
    align-self: flex-end;
    justify-content: flex-start;
    text-align: left;
  }
`;

const Content = styled.div`
  border-radius: 4px;
  background-color: cyan;
  width: 90%;
  padding: 4px;
  margin: 0 6px;
  align-self: flex-end;
`;

export default function Event({ event, placement }) {
  return (
    <Container>
      <Content placement={placement} className="content">
        <p>{event.body}</p>
      </Content>
    </Container>
  );
}
