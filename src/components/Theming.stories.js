import React from 'react';
import {
  Timeline,
  Events,
  TextEvent,
  ImageEvent,
  UrlButton,
  themes,
  createTheme,
} from '../index';

export default {
  title: 'Timeline/Theming',
};

export const customThemeExample = () => {
  const theme = createTheme(themes.default, {
    timeline: {
      backgroundColor: '#070D24',
    },
    timelineTrack: {
      background: `linear-gradient(
        to bottom, #5ec0a7 0%,#070d24 100%
      )`,
      width: '2px',
    },
    date: {
      backgroundColor: '#3DA588',
      color: '#fff',
    },
    marker: {
      borderRadius: '4px',
      borderColor: '#070D24',
      borderWidth: '3px',
      transform: 'rotate(45deg)',
      backgroundColor: '#BF2D51',
    },
    button: {
      backgroundColor: '#000958',
    },
  });

  return (
    <Timeline theme={theme}>
      <Events>
        <TextEvent date="10/03/19" text="Theming example">
          <div>
            <UrlButton href="https://stevemerc.com">Visit My Site</UrlButton>
          </div>
        </TextEvent>
        <ImageEvent
          src="https://images.unsplash.com/photo-1559291001-693fb9166cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
          alt="jellyfish"
          credit="Photo by [Vino Li](https://unsplash.com/@vinomamba24)"
        />
        <ImageEvent
          src="https://images.unsplash.com/photo-1555901879-245ec81f706c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
          alt="blue octopus"
          credit="Photo by [Adam Muise](https://unsplash.com/@muiseadam)"
        />
        <TextEvent
          date="10/15/19"
          text="Click the `Show code` button below to view this theme's settings"
        ></TextEvent>
      </Events>
    </Timeline>
  );
};

export const defaultTheme = () => (
  <pre>{JSON.stringify(themes.default, null, 2)}</pre>
);

export const roliTheme = () => (
  <pre>{JSON.stringify(themes.roli, null, 2)}</pre>
);
