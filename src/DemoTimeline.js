/**
 * This is only used when rendering the demo Timeline for Storybook.
 */
import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Timeline,
  Events,
  TextEvent,
  ImageEvent,
  YouTubeEvent,
  UrlButton,
} from './index';

const DemoContainer = styled.div`
  background-color: #f3f7f9;
`;

const ControlPanelContainer = styled.div`
  background-color: #f3f7f9;
  border-radius: 6px;
  margin-bottom: 20px;
  padding: 10px;
  font-family: 'Nunito Sans', -apple-system, '.SFNSText-Regular',
    'San Francisco', BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica,
    Arial, sans-serif;

  .header {
    margin: 0;
    font-weight: 600;
  }

  .note {
    font-size: 0.85rem;
    font-style: italic;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul li {
    margin-bottom: 5px;
  }

  input {
    margin-right: 10px;
  }
`;

export default function DemoTimeline() {
  const [layout, setLayout] = useState('alt-evts');

  const layouts = {
    'alt-evts': 'Alternate Events',
    'alt-evts-inline-date': 'Alternate Events, Inline Date',
    'inline-evts': 'Inline Events',
    'inline-evts-inline-date': 'Inline Events, Inline Date',
  };

  function ControlPanel({ layouts }) {
    return (
      <ControlPanelContainer>
        <p className="header">Select Layout</p>
        <p className="note">
          Note: layout will always be "Inline Events, Inline Date" if the
          viewport is too narrow, regardless of your choice.
        </p>
        <ul>
          {Object.entries(layouts).map(([k, v], i) => (
            <li key={i}>
              <label>
                <input
                  type="radio"
                  name="layout"
                  value={k}
                  onChange={e => setLayout(e.target.value)}
                  checked={k === layout}
                />
                {v}
              </label>
            </li>
          ))}
        </ul>
      </ControlPanelContainer>
    );
  }

  const opts = {
    layout,
  };

  return (
    <React.Fragment>
      <ControlPanel layouts={layouts} />
      <DemoContainer>
        <Timeline opts={opts}>
          <Events>
            <TextEvent date="1/1/19" text="**Markdown** is *supported*" />
            <TextEvent
              date="1/2/19"
              text="Events alternate by default (given enough space in the browser)"
            />

            <ImageEvent
              date="4/13/19"
              text="You can embed images..."
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
              text="... and YouTube videos!"
            />
          </Events>
        </Timeline>
      </DemoContainer>
    </React.Fragment>
  );
}
