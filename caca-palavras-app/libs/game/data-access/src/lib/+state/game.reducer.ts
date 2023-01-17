import { Action, createReducer, on } from '@ngrx/store';
import * as GameActions from './game.actions';
import { Team } from '@caca-palavras-app/shared/util-interfaces';
import { teamList, Word, wordList } from './game.models';

export const GAME_FEATURE_KEY = 'game';

export interface GameState {
  currentPlayerOne: number | null;
  currentPlayerTwo: number | null;
  playerOneWord: string;
  playerTwoWord: string;
  boosted: boolean;
  words: Word[];
  usedWords: Word[];
  teams: Team[];
}

export const initialGameState: GameState = {
  currentPlayerOne: null,
  currentPlayerTwo: null,
  boosted: false,
  playerOneWord: '',
  playerTwoWord: '',
  words: wordList,
  usedWords: [],
  teams: teamList,
};

const reducer = createReducer(
  initialGameState,
  on(GameActions.boostGame, (state) => ({
    ...state,
    boosted: true,
  })),
  on(GameActions.startTyping, (state, { player, teamId }) => ({
    ...state,
    currentPlayerOne: player === 1 ? teamId : state.currentPlayerOne,
    currentPlayerTwo: player === 2 ? teamId : state.currentPlayerTwo,
  })),
  on(GameActions.typeCharacter, (state, { player, character }) => ({
    ...state,
    playerOneWord:
      player === 1
        ? state.playerOneWord + character.toUpperCase()
        : state.playerOneWord,
    playerTwoWord:
      player === 2
        ? state.playerTwoWord + character.toUpperCase()
        : state.playerTwoWord,
  })),
  on(GameActions.eraseLastCharacter, (state, { player }) => ({
    ...state,
    playerOneWord:
      player === 1
        ? state.playerOneWord.slice(0, state.playerOneWord.length - 1)
        : state.playerOneWord,
    playerTwoWord:
      player === 2
        ? state.playerTwoWord.slice(0, state.playerTwoWord.length - 1)
        : state.playerTwoWord,
  })),
  on(GameActions.finishTyping, (state, { player, teamId }) => {
    const updatedState = {
      ...state,
      playerOneWord: player === 1 ? '' : state.playerOneWord,
      playerTwoWord: player === 2 ? '' : state.playerTwoWord,
    };

    const finishedWord =
      player === 1 ? state.playerOneWord : state.playerTwoWord;
    const wordFound = state.words.find((word) => word.value === finishedWord);
    if (!wordFound) {
      return updatedState;
    }

    const numberOfTimesTheWordWasUsed = state.usedWords.filter(
      (word) => word.value === finishedWord
    ).length;

    const wordIsAvailable =
      numberOfTimesTheWordWasUsed < wordFound.availableUnits;

    if (!wordIsAvailable) {
      return updatedState;
    }

    const isSpecialWord = wordFound.owner !== null;

    const wordScore = 100 / wordFound.availableUnits;
    // const gameState = state.usedWords.length / 100 + 1;

    const points = isSpecialWord ? 100 : Math.floor(wordScore) * 10;
    const boostedPoints = state.boosted ? points * 2 : points;
    let updatedTeams = state.teams.map((team) =>
      team.id !== teamId
        ? team
        : {
            ...team,
            points: team.points + boostedPoints,
          }
    );

    if (isSpecialWord && wordFound.owner !== teamId) {
      updatedTeams = updatedTeams.map((team) => ({
        ...team,
        points: wordFound.owner === team.id ? team.points - 50 : team.points,
      }));
    }

    return {
      ...updatedState,
      usedWords: state.usedWords.concat(wordFound),
      teams: updatedTeams,
    };
  })
);

export function gameReducer(state: GameState | undefined, action: Action) {
  return reducer(state, action);
}
