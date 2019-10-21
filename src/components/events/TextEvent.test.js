import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextEvent from './TextEvent';
import Timeline from '../Timeline';

afterEach(cleanup);

test('TextEvent takes a custom class', () => {
  const customClass = 'my-custom-class';

  const { container } = render(
    <Timeline value={{ layout: 'test' }}>
      <TextEvent className={customClass} text="test" />
    </Timeline>
  );

  expect(container.querySelector(`.text-event`)).toHaveClass(customClass);
});

test('TextEvent renders text', () => {
  const { container } = render(
    <Timeline value={{ layout: 'test' }}>
      <TextEvent text="lorem ipsum" />
    </Timeline>
  );

  const markdown = container.querySelector('.markdown');

  expect(markdown).toHaveTextContent(/^lorem ipsum$/);
});
