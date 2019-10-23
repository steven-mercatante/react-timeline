import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  && {
    font-size: ${props => props.theme.button.fontSize};
    background-color: ${props => props.theme.button.backgroundColor};
    border-radius: ${props => props.theme.button.borderRadius};
    padding: ${props => props.theme.button.padding};
    color: ${props => props.theme.button.color};
    margin: ${props => props.theme.button.margin};
    border: ${props => props.theme.button.border};
    text-decoration: ${props => props.theme.button.textDecoration};
    cursor: ${props => props.theme.button.cursor};
  }
`;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
