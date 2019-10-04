---
id: text-atom
title: TextAtom
---

Renders text for an event. Supports Markdown.

#### Props

- `text` (string): The text to render.

#### Example

```jsx
import { Event, TextAtom } from '@merc/react-timeline';

function SimpleTextEvent() {
  return (
    <Event date="10/03/19">
      <TextAtom text="Hello, world!" />
      <TextAtom text={`**Markdown** is _supported_!`} />
    </Event>
  );
}
```
