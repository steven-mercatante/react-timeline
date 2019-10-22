import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UrlButtonContainer = styled.a(props => props.theme.urlButton);

export default function UrlButton({ href, target, children }) {
  const extraProps = {};
  if (target) {
    extraProps.target = target;
  }

  return (
    <UrlButtonContainer href={href} className="url-button" {...extraProps}>
      {children}
    </UrlButtonContainer>
  );
}

UrlButton.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.string.isRequired,
};
