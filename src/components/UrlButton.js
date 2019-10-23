import React from 'react';
import PropTypes from 'prop-types';

export default function UrlButton({ href, target, children }) {
  const extraProps = {};
  if (target) {
    extraProps.target = target;
  }

  return (
    <a href={href} className="url-button" {...extraProps}>
      {children}
    </a>
  );
}

UrlButton.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.string.isRequired,
};
