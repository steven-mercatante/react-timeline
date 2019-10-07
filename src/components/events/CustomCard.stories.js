import React from 'react';
import { Timeline, Events, TextEvent } from '../../index';

export default {
  title: 'Events/Customization/Card',
};

export const customDateFunction = () => {
  const MyCustomCard = ({ children }) => (
    <div>
      <h3>Custom Card</h3>
      {children}
    </div>
  );

  return (
    <Timeline>
      <Events>
        <TextEvent date="10/03/19" text="Hello world" card={MyCustomCard} />
      </Events>
    </Timeline>
  );
};
