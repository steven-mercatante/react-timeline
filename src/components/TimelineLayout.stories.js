import React from 'react';
import { Timeline, Events, TextEvent } from '../index';
import layouts from '../constants/layouts';

export default { title: 'Timeline Layouts' };

export function AlternateEvents() {
  return (
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
  );
}

export function AlternateEventsInlineDateLayout() {
  return (
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
  );
}

export function InlineEventsLayout() {
  return (
    <Timeline opts={{ layout: layouts.INLINE_EVENTS }}>
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
  );
}

export function InlineEventsInlineDateLayout() {
  return (
    <Timeline opts={{ layout: layouts.INLINE_EVENTS_INLINE_DATE }}>
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
  );
}
