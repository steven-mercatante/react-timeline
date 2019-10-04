---
id: youtube-atom
title: YouTubeAtom
---

Renders a responsive YouTube embedded video for an event.

#### Props

- `id` (string): The YouTube video ID. For example, given a URL of `https://www.youtube.com/watch?v=6UnRHtwHGSE`, the ID is `6UnRHtwHGSE`.

- `[name]` (string): The name to pass to the Iframe.

#### Example

```jsx
import { Event, YouTubeAtom } from '@merc/react-timeline';

function SimpleVideo() {
  return (
    <Event date="10/03/19">
      <YouTubeAtom id="6UnRHtwHGSE" name="General Tso's Chicken Recipe" />
    </Event>
  );
}
```
