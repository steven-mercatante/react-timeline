import React from 'react';
import { storiesOf } from '@storybook/react';
import MarkdownAtom from './MarkdownAtom';

storiesOf('Atoms/MarkdownAtom', module)
  .addParameters({ component: MarkdownAtom })
  .add('default', () => <MarkdownAtom text="**Hello** _world_" />);
