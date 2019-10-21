import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Event from './Event';
import TimelineContext from '../../TimelineContext';
import Timeline from '../Timeline';

afterEach(cleanup);

test('Event renders a custom marker from a function', () => {
  function CustomMarker() {
    return (
      <div className="my-custom-marker">
        <h1>CUSTOM MARKER</h1>
      </div>
    );
  }

  const { container } = render(
    <Timeline value={{ layout: 'test' }}>
      <Event marker={CustomMarker} />
    </Timeline>
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
    <Timeline value={{ layout: 'test' }}>
      <Event date={renderCustomDate} />
    </Timeline>
  );

  expect(container).toContainHTML(
    '<div class="my-custom-date"><h1>CUSTOM DATE</h1></div>'
  );
});

test('Event renders a custom card component from a function', () => {
  function CustomCard() {
    return <div className="my-custom-card">CUSTOM CARD</div>;
  }

  const { container } = render(
    <Timeline value={{ layout: 'test' }}>
      <Event card={CustomCard} />
    </Timeline>
  );

  expect(container).toContainHTML(
    '<div class="my-custom-card">CUSTOM CARD</div>'
  );
});
