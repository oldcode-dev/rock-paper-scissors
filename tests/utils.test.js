import { capitalize } from '../js/utils';

test('capitalize returns capitalized string', () => {
  expect(capitalize('rock')).toBe('Rock');
});