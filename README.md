# React Timeline

The easiest way to add responsive and customizable timelines to React apps.

## Installation

```bash
npm install @merc/react-timeline
# or
yarn add @merc/react-timeline
```

## Usage

```jsx
// App.js
import Timeline, {
  UrlButton,
  ImageEvent,
  TextEvent,
  TwitterEvent,
  YouTubeEvent,
} from '@merc/react-timeline';

export default function App() {
  return (
    <Timeline>
      <Events>
        <TextEvent date="1/1/19" text={`**Markdown** is *supported*`} />

        <TweetEvent
          date="6/11/18"
          id="1006202911632904197"
          text="I put together a resource for folks learning GraphQL"
        >
          <div>
            <UrlButton href="https://graphqlstack.com" target="_blank">
              Check it out!
            </UrlButton>
          </div>
        </TweetEvent>

        <ImageEvent
          date="4/13/70"
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
