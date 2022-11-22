import {
  Command,
  CommandType,
  TypeCommand,
} from '@caca-palavras-app/shared/util-interfaces';
import { Word } from './game.models';

export const currentWordByPlayer = function (
  commands: Command[],
  playerTarget: number
) {
  const reversed = commands.slice().reverse();
  const lastFinish = reversed.findIndex(
    ({ type, player }) => type === CommandType.Finish && player === playerTarget
  );
  if (lastFinish >= 0) {
    return '';
  }
  const lastReset = reversed.findIndex(
    ({ type, player }) => type === CommandType.Reset && player === playerTarget
  );
  if (lastReset >= 0) {
    return '';
  }
  const lastStart = reversed.findIndex(
    ({ type, player }) => type === CommandType.Start && player === playerTarget
  );

  return reversed
    .slice(0, lastStart + 1)
    .filter(({ player }) => player === playerTarget)
    .reverse()
    .map((command) => (command as TypeCommand).character)
    .join('');
};

export const isValidWord = function (word: string, words: Word[]) {
  return word === '' || words.some(({ value }) => value === word);
};
