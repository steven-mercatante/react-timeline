import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function UrlButton({ href, target, children }) {
  const extraProps = {};
  if (target) {
    extraProps.target = target;
  }

  return (
    <Button as="a" href={href} {...extraProps}>
      {children}
    </Button>
  );
}

UrlButton.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.string.isRequired,
};
