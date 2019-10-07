import React from 'react';
import { storiesOf } from '@storybook/react';
import YouTubeAtom from './YouTubeAtom';

storiesOf('Atoms/YouTubeAtom', module)
  .addParameters({ component: YouTubeAtom })
  .add('default', () => (
    <YouTubeAtom id="9z8ujpPgUjI" name="Jellyfish video by Nat Geo WILD" />
  ));
