import React from 'react';
import { Timeline, Events, TextEvent } from '../../index';

export default {
  title: 'Events|TextEvent',
  component: TextEvent,
};

export const withSimpleText = () => (
  <Timeline>
    <Events>
      <TextEvent date="10/03/19" text="Hello world" />
    </Events>
  </Timeline>
);

export const withMarkdown = () => (
  <Timeline>
    <Events>
      <TextEvent date="10/03/19" text="**Hello** _world_" />
    </Events>
  </Timeline>
);
