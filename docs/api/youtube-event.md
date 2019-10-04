---
id: youtube-event
title: YouTubeEvent
---

The base event. Can be used on its own by passing [atoms]() as children, or can be used to compose higher-level events, like `TextEvent`.

#### Props

- `date` (string): The date of the event. Can be in any format (`10/03/19`, `October 3rd, 2019`, etc.)

- `id` (string): The YouTube video ID. For example, given a URL of `https://www.youtube.com/watch?v=6UnRHtwHGSE`, the ID is `6UnRHtwHGSE`.

- `[name]` (string): The name to pass to the Iframe.

- `[text]` (string): Text to render above the image.

- `[children]` (any): Additional contents of the event. You can use existing [atoms](/docs/atoms), or define your own contents and they'll be rendered within the event card.

- `[className]` (string): An optional class name to append to the event.

- `[marker]` (function): A function that returns a custom [marker]() component used to display the date.

- `[card]` (function): A function that returns a custom [card]() component used to render the event's container.

#### Example

```jsx
import { Timeline, Events, YouTubeEvent } from '@merc/react-timeline';

function App() {
  return (
    <Timeline>
      <Events>
        <YouTubeEvent
          date="10/03/19"
          id="6UnRHtwHGSE"
          name="General Tso's Chicken Recipe"
        />
      </Events>
    </Timeline>
  );
}
```
