import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UrlButtonContainer = styled.a`
  display: inline-block;
  text-decoration: none;
  font-size: ${props => props.theme.urlButton.fontSize};
  background-color: ${props => props.theme.urlButton.backgroundColor};
  border: ${props => props.theme.urlButton.border};
  border-radius: ${props => props.theme.urlButton.borderRadius};
  padding: ${props => props.theme.urlButton.padding};
  margin: ${props => props.theme.urlButton.margin};
  color: ${props => props.theme.urlButton.color};
`;

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
