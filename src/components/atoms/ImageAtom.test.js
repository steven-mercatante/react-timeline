import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ImageAtom from './ImageAtom';
import { ThemeProvider } from 'styled-components';
import themes from '../../themes';

afterEach(cleanup);

test('ImageAtom renders an img tag', () => {
  const { container } = render(
    <ThemeProvider theme={themes.default}>
      <ImageAtom src="test.png" alt="test image" />
    </ThemeProvider>
  );

  expect(container.firstChild).toHaveAttribute('src', 'test.png');
  expect(container.firstChild).toHaveAttribute('alt', 'test image');
});
