import React from 'react';
import { Timeline, Events, TextEvent, themes, createTheme } from '../index';

const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: '#efefef',
  },
  date: {
    backgroundColor: 'rebeccapurple',
  },
  marker: {
    borderColor: 'rebeccapurple',
  },
  timelineTrack: {
    backgroundColor: 'rebeccapurple',
  },
});

export default function() {
  return (
    <Timeline theme={customTheme}>
      <Events>
        <TextEvent date="10/01/19" text="The lines are now purple..." />
        <TextEvent
          date="10/02/19"
          text="... and the cards have a grey background!"
        />
      </Events>
    </Timeline>
  );
}
