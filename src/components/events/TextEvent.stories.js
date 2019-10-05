import React from 'react';
import { Timeline, Events, TextEvent } from '../../index';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

export default { title: 'TextEvent' };

storiesOf('TextEvent', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Timeline>
      <Events>
        <TextEvent
          date={text('date', '10/03/19')}
          text={text('text (markdown is supported)', 'Hello world')}
        />
      </Events>
    </Timeline>
  ));
