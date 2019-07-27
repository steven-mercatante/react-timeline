import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';
import TimelineContext from '../../TimelineContext';

afterEach(cleanup);

test('Card includes custom class', () => {
  const customClassName = 'my-custom-class';

  const { container } = render(
    <TimelineContext.Provider value={{ kebabLayout: 'test' }}>
      <Card className={customClassName} />
    </TimelineContext.Provider>
  );

  expect(container.firstChild).toHaveClass(customClassName);
});
