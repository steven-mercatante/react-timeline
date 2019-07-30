import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ImageEvent from './ImageEvent';
import TimelineContext from '../../TimelineContext';

afterEach(cleanup);

test('ImageEvent takes a custom class', () => {
  const customClass = 'my-custom-class';

  const { container } = render(
    <TimelineContext.Provider value={{ kebabLayout: 'test' }}>
      <ImageEvent className={customClass} />
    </TimelineContext.Provider>
  );

  expect(container.firstChild).toHaveClass(customClass);
});

test('ImageEvent renders an image tag', () => {
  const { container } = render(
    <TimelineContext.Provider value={{ kebabLayout: 'test' }}>
      <ImageEvent src="test.png" alt="test image" />
    </TimelineContext.Provider>
  );
  const img = container.querySelector('img');

  expect(img).toHaveAttribute('src', 'test.png');
  expect(img).toHaveAttribute('alt', 'test image');
});

test('ImageEvent renders text', () => {
  const { container } = render(
    <TimelineContext.Provider value={{ kebabLayout: 'test' }}>
      <ImageEvent text="check out my photo!" />
    </TimelineContext.Provider>
  );

  expect(container).toHaveTextContent(/^check out my photo!$/);
});

test('ImageEvent renders credit', () => {
  const { container } = render(
    <TimelineContext.Provider value={{ kebabLayout: 'test' }}>
      <ImageEvent credit="photo by me" />
    </TimelineContext.Provider>
  );

  expect(container).toHaveTextContent(/^photo by me$/);
});
