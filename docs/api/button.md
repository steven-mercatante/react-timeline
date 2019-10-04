---
id: button
title: Button
---

`Button` is a convenience component that renders a regular `button`, but wrapped in Styled Components for easy theming.

`Button` can be used in this context to do anything you might do with a `button` in a React app.

If all you want to do is link out to a site, use [`UrlButton`](./url-button) instead.

#### Example

```
import { Timeline, Events, Button, TextEvent } from "@merc/react-timeline";

export default function App() {
  return (
    <Timeline>
      <Events>
        <TextEvent date="1/1/19" text="Hello!">
          <div>
            <Button
              onClick={() => {
                alert("You clicked the button!");
              }}
            >
              Click me!
            </Button>
          </div>
        </TextEvent>
      </Events>
    </Timeline>
  );
}
```

[Click here for a demo](https://codesandbox.io/s/react-timeline-demo-button-3yrs5)
