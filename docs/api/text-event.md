---
id: text-event
title: TextEvent
---

An event that renders text.

#### Props

- `date` (string): The date of the event. Can be in any format (`10/03/19`, `October 3rd, 2019`, etc.)

- `text` (string): The text to render.

- `[children]` (any): Additional contents of the event. You can use existing [atoms](/docs/atoms), or define your own contents and they'll be rendered within the event card.

- `[className]` (string): An optional class name to append to the event.

- `[marker]` (function): A function that returns a custom [marker]() component used to display the date.

- `[card]` (function): A function that returns a custom [card]() component used to render the event's container.

#### Example

```jsx
import { Timeline, Events, TextEvent } from '@merc/react-timeline';

function App() {
  return (
    <Timeline>
      <Events>
        <TextEvent date="10/03/19" text="Hello, world!">
        <TextEvent date="10/04/19" text={`I support **Markdown**`}>
      </Events>
    </Timeline>

  );
}
```
