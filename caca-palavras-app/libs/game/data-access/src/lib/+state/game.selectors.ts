import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GAME_FEATURE_KEY, GameState } from './game.reducer';
import { RankedTeam } from '@caca-palavras-app/shared/util-interfaces';

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
export const ranking = createSelector(teamsList, (list) => {
  const sortedList: RankedTeam[] = list
    .slice()
    .sort((a, b) => b.points - a.points)
    .map((team, index) => ({ ...team, position: index + 1 }));

  let position = 1;
  return sortedList
    .map((team, index) => {
      if (index === 0) {
        return team;
      }
      const previousTeam = sortedList[index - 1];
      if (previousTeam.points !== team.points) {
        position++;
      }
      return {
        ...team,
        position: previousTeam.points === team.points ? null : position,
      };
    })
    .sort((a, b) => String(a.name).localeCompare(b.name));
});

export const rankingLeaders = createSelector(ranking, (teams) =>
  teams
    .slice()
    .sort((a, b) => b.points - a.points)
    .slice(0, 3)
);

export const playerOneTeam = createSelector(
  getGameState,
  ({ teams, currentPlayerOne }) =>
    teams.find(({ id }) => id === currentPlayerOne) || null
);

export const playerTwoTeam = createSelector(
  getGameState,
  ({ teams, currentPlayerTwo }) =>
    teams.find(({ id }) => id === currentPlayerTwo) || null
);

export const totalPoints = createSelector(getGameState, ({ teams }) =>
  teams.reduce((r, { points }) => (r += points), 0)
);
