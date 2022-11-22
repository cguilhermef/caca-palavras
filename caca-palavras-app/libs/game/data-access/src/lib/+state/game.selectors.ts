import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GAME_FEATURE_KEY, GameState } from './game.reducer';

// Lookup the 'Game' feature state managed by NgRx
export const getGameState = createFeatureSelector<GameState>(GAME_FEATURE_KEY);

export const playerOneWord = createSelector(
  getGameState,
  ({ playerOneWord }) => playerOneWord
);
export const playerTwoWord = createSelector(
  getGameState,
  ({ playerTwoWord }) => playerTwoWord
);

export const teamsList = createSelector(getGameState, ({ teams }) => teams);
export const ranking = createSelector(teamsList, (list) =>
  list.slice().sort((a, b) => b.points - a.points)
);
