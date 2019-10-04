---
id: timeline
title: Timeline
---

`Timeline` is the root component. It's responsible for rendering the events container.

#### Props

- `children` (`Events`): An [`Events`](/docs/api/events) instance.

- `[className]` (string): An optional class name to append to the timeline.

- `[theme]` (object): A valid [theme](???) object.

- `[opts]` (object): A valid [options](???) object.

#### Example

```jsx
import { Timeline, Events, TextEvent } from '@merc/react-timeline';

function App() {
  const theme = {
    timeline: {
      backgroundColor: "#FE7071"
    },
    timelineTrack: {
      backgroundColor: "#fff"
    },
    card: {
      backgroundColor: "#FE9B9B",
      color: "#fff"
    },
    marker: {
      border: "2px dashed #fff",
      backgroundColor: "#FE7071"
    },
    dateContainer: {
      margin: 0,
      padding: 0
    },
    date: {
      backgroundColor: "none",
      margin: 0,
      padding: 0
    }
  };

  const opts = {
    layout: "inline-evts-inline-date"
  };

  return (
    <Timeline className="my-rad-timeline" theme={theme} opts={opts}>
      <Events>
        <TextEvent date="10/03/19" text="Hello World">
        <TextEvent date="10/04/19" text="I had pizza for lunch">
      </Events>
    </Timeline>
  );
}
```

#### Tips

- `Timeline` must have one and _only_ one child; an [`Events`](/docs/api/events) instance.
