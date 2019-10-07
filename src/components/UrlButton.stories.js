import React from 'react';
import UrlButton from './UrlButton';

export default {
  title: 'Controls/UrlButton',
  component: UrlButton,
};

export const urlButton = () => (
  <UrlButton href="http://stevemerc.com" target="_blank">
    Click me
  </UrlButton>
);

urlButton.story = {
  name: 'UrlButton',
};
