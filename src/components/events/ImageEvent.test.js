import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ImageEvent from './ImageEvent';
import Timeline from '../Timeline';

afterEach(cleanup);

test('ImageEvent takes a custom class', () => {
  const customClass = 'my-custom-class';

  const { container, debug } = render(
    <Timeline value={{ layout: 'test' }}>
      <ImageEvent className={customClass} />
    </Timeline>
  );

  expect(container.querySelector('.image-event')).toHaveClass(customClass);
});

test('ImageEvent renders an image tag', () => {
  const { container } = render(
    <Timeline value={{ layout: 'test' }}>
      <ImageEvent src="test.png" alt="test image" />
    </Timeline>
  );
  const img = container.querySelector('img');

  expect(img).toHaveAttribute('src', 'test.png');
  expect(img).toHaveAttribute('alt', 'test image');
});

test('ImageEvent renders text', () => {
  const { container } = render(
    <Timeline value={{ layout: 'test' }}>
      <ImageEvent text="check out my photo!" />
    </Timeline>
  );

  expect(container).toHaveTextContent(/^check out my photo!$/);
});

test('ImageEvent renders credit', () => {
  const { container } = render(
    <Timeline value={{ layout: 'test' }}>
      <ImageEvent credit="photo by me" />
    </Timeline>
  );

  expect(container).toHaveTextContent(/^photo by me$/);
});
