import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

// TODO: pull font-size from theme
const Button = styled.button`
  display: inline-block;
  background-color: ${props => props.theme.buttons.backgroundColor};
  border: ${props => props.theme.buttons.border};
  border-radius: ${props => props.theme.buttons.borderRadius};
  padding: ${props => props.theme.buttons.padding};
  color: ${props => props.theme.buttons.color};
  margin: ${props => props.theme.buttons.margin};
  font-size: ${props => props.theme.buttons.fontSize};
  cursor: pointer;
`;

const UrlButton = styled.a`
  display: inline-block;
  background-color: ${props => props.theme.buttons.backgroundColor};
  border: ${props => props.theme.buttons.border};
  border-radius: ${props => props.theme.buttons.borderRadius};
  padding: ${props => props.theme.buttons.padding};
  color: ${props => props.theme.buttons.color};
  margin: ${props => props.theme.buttons.margin};
  text-decoration: none;
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
