import { joinClassNames } from './classNames';

test('joinClassNames joins truthy class names', () => {
  const possibleClassNames = [
    'foo',
    '',
    ' ',
    '    ',
    0,
    '0',
    false,
    null,
    undefined,
    'bar',
  ];
  const expected = 'foo 0 bar';

  expect(joinClassNames(possibleClassNames)).toEqual(expected);
});
