import { getComputerChoice, determineWinner } from '../js/gameLogic';

test('getComputerChoice returns valid option', () => {
  expect(['rock', 'paper', 'scissors']).toContain(getComputerChoice());
});

test('determineWinner returns correct result', () => {
  expect(determineWinner('rock', 'scissors')).toBe('win');
  expect(determineWinner('rock', 'paper')).toBe('loss');
  expect(determineWinner('rock', 'rock')).toBe('draw');
});