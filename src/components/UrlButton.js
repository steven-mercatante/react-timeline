import React from 'react';
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
