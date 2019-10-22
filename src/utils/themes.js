import merge from 'lodash.merge';

export function createTheme(baseTheme, newTheme) {
  return merge({}, baseTheme, newTheme);
}
