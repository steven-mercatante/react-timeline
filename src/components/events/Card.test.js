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

test('Card renders a custom date component from a function', () => {
  function renderCustomDate() {
    return (
      <div className="my-custom-date">
        <h1>CUSTOM DATE</h1>
      </div>
    );
  }

  const { container } = render(
    <TimelineContext.Provider value={{ kebabLayout: 'test' }}>
      <Card date={renderCustomDate} />
    </TimelineContext.Provider>
  );

  expect(container).toContainHTML(
    '<div class="my-custom-date"><h1>CUSTOM DATE</h1></div>'
  );
});

test('Card renders a custom date component from JSX', () => {
  function CustomDate({ children }) {
    return <div className="my-custom-date">{children}</div>;
  }

  const { container } = render(
    <TimelineContext.Provider value={{ kebabLayout: 'test' }}>
      <Card
        date={
          <CustomDate>
            <h1>CUSTOM DATE</h1>
          </CustomDate>
        }
      />
    </TimelineContext.Provider>
  );

  expect(container).toContainHTML(
    '<div class="my-custom-date"><h1>CUSTOM DATE</h1></div>'
  );
});
