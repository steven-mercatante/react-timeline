import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Event from './Event';
import TimelineContext from '../../TimelineContext';

afterEach(cleanup);

test('Event renders a custom marker from a function', () => {
  function renderCustomMarker() {
    return (
      <div className="my-custom-marker">
        <h1>CUSTOM MARKER</h1>
      </div>
    );
  }

  const { container } = render(
    <TimelineContext.Provider value={{ kebabLayout: 'test' }}>
      <Event marker={renderCustomMarker} />
    </TimelineContext.Provider>
  );

  expect(container).toContainHTML(
    '<div class="my-custom-marker"><h1>CUSTOM MARKER</h1></div>'
  );
});

test('Event renders a custom marker from JSX', () => {
  function CustomMarker({ children }) {
    return <div className="my-custom-marker">{children}</div>;
  }

  const { container } = render(
    <TimelineContext.Provider value={{ kebabLayout: 'test' }}>
      <Event
        marker={
          <CustomMarker>
            <h1>CUSTOM MARKER</h1>
          </CustomMarker>
        }
      />
    </TimelineContext.Provider>
  );

  expect(container).toContainHTML(
    '<div class="my-custom-marker"><h1>CUSTOM MARKER</h1></div>'
  );
});

test('Event renders a custom date component from a function', () => {
  function renderCustomDate() {
    return (
      <div className="my-custom-date">
        <h1>CUSTOM DATE</h1>
      </div>
    );
  }

  const { container } = render(
    <TimelineContext.Provider value={{ kebabLayout: 'test' }}>
      <Event date={renderCustomDate} />
    </TimelineContext.Provider>
  );

  expect(container).toContainHTML(
    '<div class="my-custom-date"><h1>CUSTOM DATE</h1></div>'
  );
});

test('Event renders a custom date component from JSX', () => {
  function CustomDate({ children }) {
    return <div className="my-custom-date">{children}</div>;
  }

  const { container } = render(
    <TimelineContext.Provider value={{ kebabLayout: 'test' }}>
      <Event
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
