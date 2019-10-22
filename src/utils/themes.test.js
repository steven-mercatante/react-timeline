import { createTheme } from './themes';

test('createTheme creates a theme', () => {
  const baseTheme = { timeline: { backgroundColor: '#fff' } };
  const newTheme = createTheme(baseTheme, {
    timelineTrack: { backgroundColor: '#000' },
  });

  const expected = {
    timeline: {
      backgroundColor: '#fff',
    },
    timelineTrack: {
      backgroundColor: '#000',
    },
  };

  expect(newTheme).toEqual(expected);
});
