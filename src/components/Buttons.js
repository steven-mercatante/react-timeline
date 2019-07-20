import React from "react";
import styled from "styled-components";

// TODO: set position relative and do left = amount of padding in outer card
const Container = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  left: -10px;
`;

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
  const { label, url, onClick, cssClass, ...rest } = button;

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

  const classes = ["button"];
  if (cssClass) {
    classes.push(cssClass);
  }

  return (
    <ButtonComponent key={key} className={classes.join(" ")} {...buttonProps}>
      {label}
    </ButtonComponent>
  );
}

export default function Buttons({ buttons }) {
  return (
    <Container className="buttons">
      {buttons.map((button, i) => {
        return renderButton(button, i);
      })}
    </Container>
  );
}
