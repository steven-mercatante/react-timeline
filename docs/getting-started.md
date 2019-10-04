---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

React Timeline is the easiest way to add responsive and customizable timelines to React apps.

Check out the [demos](https://docusaurus.io).

## Quick Start

```bash
npm install @merc/react-timeline
```

```
import React from 'react'
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  TextEvent,
  YouTubeEvent,
} from '@merc/react-timeline';

export default function App() {
  return (
    <Timeline>
      <Events>
        <TextEvent date="1/1/19" text={`**Markdown** is *supported*`} />

        <ImageEvent
          date="4/13/19"
          src="https://res.cloudinary.com/dovoq8jou/image/upload/v1564772194/jellyfish.jpg"
          alt="jellyfish swimming"
          credit="Photo by [@tavi004](https://unsplash.com/@tavi004)"
        >
          <div>
            <UrlButton href="https://unsplash.com/search/photos/undersea">
              View more undersea photos
            </UrlButton>
          </div>
        </ImageEvent>

        <YouTubeEvent
          date="6/18/19"
          id="6UnRHtwHGSE"
          name="General Tso's Chicken recipe"
          text="I learned how to make General Tso's Chicken!"
        />
      </Events>
    </Timeline>
  );
}
```
