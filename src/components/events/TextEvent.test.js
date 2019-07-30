import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextEvent from './TextEvent';
import TimelineContext from '../../TimelineContext';

afterEach(cleanup);

test('TextEvent takes a custom class', () => {
  const customClass = 'my-custom-class';

  const { container } = render(
    <TimelineContext.Provider value={{ layout: 'test' }}>
      <TextEvent className={customClass} text="test" />
    </TimelineContext.Provider>
  );

  expect(container.firstChild).toHaveClass(customClass);
});

test('TextEvent renders text', () => {
  const { container } = render(
    <TimelineContext.Provider value={{ layout: 'test' }}>
      <TextEvent text="lorem ipsum" />
    </TimelineContext.Provider>
  );

  const markdown = container.querySelector('.markdown');

  expect(markdown).toHaveTextContent(/^lorem ipsum$/);
});
