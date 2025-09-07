import { updateScore } from '../js/scoreManager';

test('updateScore increments human score on win', () => {
  const score = { human: 0, computer: 0 };
  expect(updateScore('win', score)).toEqual({ human: 1, computer: 0 });
});