---
id: url-button
title: UrlButton
---

`UrlButton` extends `Button`, but is used specifically to link out to a site. It uses an `a` tag under the hood, but is styled like a `button`.

#### Example

```
import { Timeline, Events, UrlButton, TextEvent } from "@merc/react-timeline";

export default function App() {
  return (
    <Timeline>
      <Events>
        <TextEvent date="1/1/19" text="Check out my site">
          <div>
            <UrlButton href="https://stevenmercatante.com" target="_blank">
              Visit my site
            </UrlButton>
          </div>
        </TextEvent>
      </Events>
    </Timeline>
  );
}
```

[Click here for a demo](https://codesandbox.io/s/react-timeline-demo-urlbutton-8hdx4)
