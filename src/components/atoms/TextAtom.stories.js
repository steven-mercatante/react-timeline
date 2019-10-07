import React from 'react';
import { storiesOf } from '@storybook/react';
import TextAtom from './TextAtom';

storiesOf('Atoms/TextAtom', module)
  .addParameters({ component: TextAtom })
  .add('default', () => <TextAtom text="Hello world" />)
  .add('with markdown', () => <TextAtom text={`**Hello** _world_`} />);
