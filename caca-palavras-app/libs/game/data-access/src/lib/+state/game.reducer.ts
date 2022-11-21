import { Action, createReducer, on } from '@ngrx/store';
import * as GameActions from './game.actions';
import {
  Command,
  CommandType,
} from '@caca-palavras-app/shared/util-interfaces';

export const GAME_FEATURE_KEY = 'game';

export interface GameState {
  commands: Command[];
}

export const initialGameState: GameState = {
  commands: [],
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
      return {
        ...state,
        commands: state.commands
          .slice()
          .reverse()
          .filter((command) => {
            if (found) {
              return true;
            }
            if (
              command.type === CommandType.Type &&
              command.player === player
            ) {
              found = true;
              return false;
            }
            return true;
          })
          .reverse(),
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
