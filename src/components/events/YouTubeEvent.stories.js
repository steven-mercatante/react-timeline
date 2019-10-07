import React from 'react';
import { Timeline, Events, YouTubeEvent } from '../../index';
import { storiesOf } from '@storybook/react';

storiesOf('Events/YouTubeEvent', module)
  .addParameters({ component: YouTubeEvent })

  .add('default', () => (
    <Timeline>
      <Events>
        <YouTubeEvent
          date="10/03/19"
          text="Check out this video!"
          id="9z8ujpPgUjI"
          name="Jellyfish video by Nat Geo WILD"
        />
      </Events>
    </Timeline>
  ));
