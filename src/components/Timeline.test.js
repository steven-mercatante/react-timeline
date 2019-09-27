import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Timeline, Events, TextEvent } from '../index';

afterEach(cleanup);

test('Timeline renders', () => {
  const { container, debug } = render(
    <Timeline>
      <Events>
        <TextEvent date="9/27/19" text="Hello" />
      </Events>
    </Timeline>
  );
  // console.log(container);
  debug();

  expect(container).toContainHTML('<div class`"timeline-outer">');
});
