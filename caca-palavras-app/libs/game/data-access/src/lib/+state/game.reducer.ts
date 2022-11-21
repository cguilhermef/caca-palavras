import { Action, createReducer, on } from '@ngrx/store';
import * as GameActions from './game.actions';
import {
  Command,
  CommandType,
  TypeCommand,
} from '@caca-palavras-app/shared/util-interfaces';

export const GAME_FEATURE_KEY = 'game';

export interface GameState {
  commands: Command[];
  playerOneWord: string;
  playerTwoWord: string;
}

export const initialGameState: GameState = {
  commands: [],
  playerOneWord: '',
  playerTwoWord: '',
  // commands: [
  //   {
  //     type: CommandType.Start,
  //     player: 2,
  //   },
  //   {
  //     type: CommandType.Type,
  //     player: 2,
  //     character: 'a',
  //   } as TypeCommand,
  //   {
  //     type: CommandType.Type,
  //     player: 2,
  //     character: 'b',
  //   } as TypeCommand,
  // ],
};

const reducer = createReducer(
  initialGameState,
  on(GameActions.registerCommand, (state, { command }) => {
    const { type, player } = command;
    if (type === CommandType.Erase) {
      let found = false;
      const commands = state.commands
        .slice()
        .reverse()
        .filter((command) => {
          if (found) {
            return true;
          }
          if (command.type === CommandType.Type && command.player === player) {
            found = true;
            return false;
          }
          return true;
        })
        .reverse();
      return {
        ...state,
        commands,
        playerOneWord:
          player === 1 ? currentWordByPlayer(commands, 1) : state.playerOneWord,
        playerTwoWord:
          player === 1 ? currentWordByPlayer(commands, 2) : state.playerTwoWord,
      };
    }
    if (type === CommandType.Type) {
      const commands = state.commands.concat(command);
      return {
        ...state,
        commands,
        playerOneWord:
          player === 1 ? currentWordByPlayer(commands, 1) : state.playerOneWord,
        playerTwoWord:
          player === 1 ? currentWordByPlayer(commands, 2) : state.playerTwoWord,
      };
    }
    return {
      ...state,
      commands: state.commands.concat(command),
    };
  })
);

export function gameReducer(state: GameState | undefined, action: Action) {
  return reducer(state, action);
}

const currentWordByPlayer = function (
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
