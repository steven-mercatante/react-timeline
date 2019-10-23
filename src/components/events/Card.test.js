import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';
import Timeline from '../Timeline';

afterEach(cleanup);

test('Card renders a custom date component from a function', () => {
  function renderCustomDate() {
    return (
      <div className="my-custom-date">
        <h1>CUSTOM DATE</h1>
      </div>
    );
  }

  const { container } = render(
    <Timeline>
      <Card date={renderCustomDate} />
    </Timeline>
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
    <Timeline>
      <Card
        date={
          <CustomDate>
            <h1>CUSTOM DATE</h1>
          </CustomDate>
        }
      />
    </Timeline>
  );

  expect(container).toContainHTML(
    '<div class="my-custom-date"><h1>CUSTOM DATE</h1></div>'
  );
});
