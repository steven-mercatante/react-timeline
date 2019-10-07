import React from 'react';
import { Timeline, Events, TextEvent } from '../../index';
import { storiesOf } from '@storybook/react';

storiesOf('Events/TextEvent', module)
  .addParameters({ component: TextEvent })

  .add('default', () => (
    <Timeline>
      <Events>
        <TextEvent date="10/03/19" text="Hello world" />
      </Events>
    </Timeline>
  ));
