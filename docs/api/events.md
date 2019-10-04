---
id: events
title: Events
---

`Events` is the container for all event instances.

Its main purpose is providing styling for the events HTML container. You can define your own `Events` component (and style) and pass that to [`Timeline`](/docs/api/timeline).

#### Example

```jsx
import { Timeline, Events, TextEvent } from '@merc/react-timeline';

function App() {
  return (
    <Timeline>
      <Events>
        <TextEvent date="10/03/19" text="Hello World">
        <TextEvent date="10/04/19" text="I had pizza for lunch">
      </Events>
    </Timeline>
  );
}
```

#### Tips

- `Events` must be the only child passed to a [`Timeline`](/docs/api/timeline) instance.
