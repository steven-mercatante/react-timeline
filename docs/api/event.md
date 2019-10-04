---
id: event
title: Event
---

The base event. Can be used on its own by passing [atoms]() as children, or can be used to compose higher-level events, like [`TextEvent`](/docs/api/text-event).

#### Props

- `date` (string): The date of the event. Can be in any format (`10/03/19`, `October 3rd, 2019`, etc.)

- `children` (any): The contents of the event. You can use existing [atoms](/docs/atoms), or define your own contents.

- `[className]` (string): An optional class name to append to the event.

- `[marker]` (function): A function that returns a custom [marker]() component used to display the date.

- `[card]` (function): A function that returns a custom [card]() component used to render the event.

#### Example

```jsx
import { Event, TextAtom } from '@merc/react-timeline';

function SimpleTextEvent() {
  return (
    <Event date="10/03/19">
      <TextAtom text="Hello, world!" />
    </Event>
  );
}
```
