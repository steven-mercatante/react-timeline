import React from 'react';
import { Timeline, Events, TextEvent } from '../index';
import layouts from '../constants/layouts';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Timeline|Layouts', module).addParameters({
  component: Timeline,
});

stories.add('alternate events', () => (
  <Timeline opts={{ layout: layouts.ALTERNATE_EVENTS }}>
    <Events>
      <TextEvent date="10/03/19" text="Hello world" />
      <TextEvent
        date="10/04/19"
        text="Events alternate in the default layout..."
      />
      <TextEvent
        date="10/05/19"
        text="... assuming the browser is wide enough"
      />
    </Events>
  </Timeline>
));

stories.add('alternate events, inline date', () => (
  <Timeline opts={{ layout: layouts.ALTERNATE_EVENTS_INLINE_DATE }}>
    <Events>
      <TextEvent date="10/03/19" text="Hello world" />
      <TextEvent
        date="10/04/19"
        text="Events alternate in the default layout..."
      />
      <TextEvent
        date="10/05/19"
        text="... assuming the browser is wide enough"
      />
    </Events>
  </Timeline>
));

stories.add('inline events', () => (
  <Timeline opts={{ layout: layouts.INLINE_EVENTS }}>
    <Events>
      <TextEvent
        date="10/03/19"
        text="You can also force events to be stacked inline..."
      />
      <TextEvent date="10/04/19" text="... like this" />
    </Events>
  </Timeline>
));

stories.add('inline events, inline date', () => (
  <Timeline opts={{ layout: layouts.INLINE_EVENTS_INLINE_DATE }}>
    <Events>
      <TextEvent
        date="10/03/19"
        text="You can also force events to be stacked inline..."
      />
      <TextEvent date="10/04/19" text="... like this" />
    </Events>
  </Timeline>
));
