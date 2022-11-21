import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GAME_FEATURE_KEY, GameState } from './game.reducer';
import { CommandType, } from '@caca-palavras-app/shared/util-interfaces';

// Lookup the 'Game' feature state managed by NgRx
export const getGameState = createFeatureSelector<GameState>(GAME_FEATURE_KEY);

export const playerOneTyping = createSelector(getGameState, ({ commands }) => {
  const reversed = commands.slice().reverse();
  const lastFinish = reversed.findIndex(
    ({ type, player }) => type === CommandType.Finish && player === 1
  );
  if (lastFinish >= 0) {
    return [];
  }
  const lastStart = reversed.findIndex(
    ({ type, player }) => type === CommandType.Start && player === 1
  );

  return reversed
    .slice(0, lastStart + 1)
    .filter(({ player }) => player === 1)
    .reverse();
});

export const playerOneWord = createSelector(
  getGameState,
  ({ playerOneWord }) => playerOneWord
);
export const playerTwoWord = createSelector(
  getGameState,
  ({ playerTwoWord }) => playerTwoWord
);
