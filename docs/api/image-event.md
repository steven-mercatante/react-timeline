---
id: image-event
title: ImageEvent
---

An event that renders a responsive image.

#### Props

- `date` (string): The date of the event. Can be in any format (`10/03/19`, `October 3rd, 2019`, etc.)

- `src` (string): The image source. Supports external URLs and bundled images.

- `[alt]` (string): The alt text for the image.

- `[text]` (string): Text to render above the image.

- `[credit]` (string): Credit text to render below the image.

- `[children]` (any): Additional contents of the event. You can use existing [atoms](/docs/atoms), or define your own contents and they'll be rendered within the event card.

- `[className]` (string): An optional class name to append to the event.

- `[marker]` (function): A function that returns a custom [marker]() component used to display the date.

- `[card]` (function): A function that returns a custom [card]() component used to render the event's container.

#### Example

```jsx
import { Timeline, Events, ImageEvent } from '@merc/react-timeline';

function App() {
  return (
    <Timeline>
      <Events>
        <ImageEvent date="10/03/19" src={Avatar} alt="My avatar" />
        <ImageEvent
          date="10/04/19"
          src="https://example.com/pizza.png"
          alt="Pizza slice"
          credit="Photo taken by Mr. Pizzana"
        />
      </Events>
    </Timeline>
  );
}
```
