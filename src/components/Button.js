import styled from "styled-components";

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

export default Button;
