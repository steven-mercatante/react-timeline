import React from 'react';
import { storiesOf } from '@storybook/react';
import ImageAtom from './ImageAtom';
import themes from '../../themes';
import jellyfish from '../../../demo/images/jellyfish.jpg';
import { ThemeProvider } from 'styled-components';

storiesOf('Atoms/ImageAtom', module)
  .addParameters({ component: ImageAtom })
  .add('remote URL', () => (
    <ThemeProvider theme={themes.default}>
      <ImageAtom
        src="https://images.unsplash.com/photo-1540968221243-29f5d70540bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
        alt="yellow jellyfish"
      />
    </ThemeProvider>
  ))
  .add('local image', () => (
    <ThemeProvider theme={themes.default}>
      <ImageAtom src={jellyfish} alt="swimming jellyfish" />
    </ThemeProvider>
  ));
