import React from 'react';
import Button from './Button';

export default {
  title: 'Controls/Button',
  component: Button,
};

export const button = () => <Button>I'm just a regular button</Button>;

export const withOnClickHandler = () => (
  <Button
    onClick={() =>
      alert(
        "I'm just a regular button. Use me like you would any other button."
      )
    }
  >
    Click me for an alert
  </Button>
);

withOnClickHandler.story = {
  name: 'With onClick Handler',
};
