import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

// TODO: pull font-size from theme
const Button = styled.button`
  display: inline-block;
  background-color: rebeccapurple;
  border-radius: 4px;
  padding: 4px;
  color: #fff;
  margin-right: 4px;
  cursor: pointer;
  border: none;
  font-size: 14px;
`;

const UrlButton = styled.a`
  display: inline-block;
  background-color: rebeccapurple;
  border-radius: 4px;
  padding: 4px;
  color: #fff;
  text-decoration: none;
  margin-right: 4px;
`;

function renderButton(button, key) {
  const { label, url, onClick, ...rest } = button;

  let ButtonComponent;
  if (url) {
    ButtonComponent = UrlButton;
  } else {
    ButtonComponent = Button;
  }

  const buttonProps = { onClick, ...rest };
  if (url) {
    buttonProps.href = url;
  }

  return (
    <ButtonComponent key={key} {...buttonProps}>
      {label}
    </ButtonComponent>
  );
}

export default function Buttons({ buttons }) {
  return (
    <Container>
      {buttons.map((button, i) => {
        return renderButton(button, i);
      })}
    </Container>
  );
}
