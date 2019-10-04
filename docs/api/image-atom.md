---
id: image-atom
title: ImageAtom
---

Renders a responsive image for an event.

#### Props

- `src` (string): The image source. Supports external URLs and bundled images.

- `[alt]` (string): The alt text for the image.

#### Example

```jsx
import { Event, ImageAtom } from '@merc/react-timeline';
import Avatar from '../images/avatar.png';

function SimpleImageEvent() {
  return (
    <Event date="10/03/19">
      <ImageAtom src={Avatar} alt="My avatar" />
      <ImageAtom src="https://example.com/pizza.png" alt="Pizza slice" />
    </Event>
  );
}
```
