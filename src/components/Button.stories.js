import React from 'react';
import Button from './Button';
import { ThemeProvider } from 'styled-components';
import themes from '../themes';

export default {
  title: 'Controls/Button',
  component: Button,
};

export const button = () => (
  <ThemeProvider theme={themes.default}>
    <Button>I'm just a regular button</Button>
  </ThemeProvider>
);

export const withOnClickHandler = () => (
  <ThemeProvider theme={themes.default}>
    <Button
      onClick={() =>
        alert(
          "I'm just a regular button. Use me like you would any other button."
        )
      }
    >
      Click me for an alert
    </Button>
  </ThemeProvider>
);

withOnClickHandler.story = {
  name: 'With onClick Handler',
};
