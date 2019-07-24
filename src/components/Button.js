import styled from "styled-components";

const Button = styled.button(props => {
  const defaults = {
    display: 'inline-block',
    fontSize: "14px",
    backgroundColor: "rebeccapurple",
    borderRadius: "4px",
    padding: "4px",
    color: "#fff",
    margin: "10px 5px 5px 0",
    border: "none",
    textDecoration: 'none',
    cursor: 'pointer'
  }

  const style = { ...defaults, ...props.theme.button };

  return style;
})

export default Button;
