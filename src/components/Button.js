import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button(props => {
  return props.theme.button;
});

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
