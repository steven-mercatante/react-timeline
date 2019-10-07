import React from 'react';
import { Timeline, Events, TextEvent, Marker } from '../../index';

export default {
  title: 'Events/Custom Marker',
};

export const customMarker = () => {
  const MyCustomMarker = () => <span>😀</span>;

  return (
    <Timeline>
      <Events>
        <TextEvent date="10/03/19" text="Hello world" marker={MyCustomMarker} />
      </Events>
    </Timeline>
  );
};
