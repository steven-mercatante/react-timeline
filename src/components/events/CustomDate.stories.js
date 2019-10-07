import React from 'react';
import { Timeline, Events, TextEvent } from '../../index';

export default {
  title: 'Events/Customization/EventDate',
};

export const customDateFunction = () => {
  const getDate = () => 'Fake date!';

  return (
    <Timeline>
      <Events>
        <TextEvent date={getDate} text="Hello world" />
      </Events>
    </Timeline>
  );
};
