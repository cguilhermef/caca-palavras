import { createAction, props } from '@ngrx/store';
import {
  Command,
  TeamCommand,
  TypeCommand,
} from '@caca-palavras-app/shared/util-interfaces';

export const registerCommand = createAction(
  '[Game] register command',
  props<{ command: Command | TypeCommand | TeamCommand }>()
);

export const startTyping = createAction(
  '[Game] start team typing',
  props<{ teamId: number; player: number }>()
);

export const finishTyping = createAction(
  '[Game] start team typing',
  props<{ teamId: number; player: number }>()
);

export const typeCharacter = createAction(
  '[Game] type character',
  props<{ character: string; player: number }>()
);

export const eraseLastCharacter = createAction(
  '[Game] erase last character',
  props<{ player: number }>()
);

export const resetTyping = createAction(
  '[Game] reset typing',
  props<{ player: number }>()
);

export const startGame = createAction('[Game] start the game');

export const endGame = createAction('[Game] end the game');
