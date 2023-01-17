import { Team, Teams } from '@caca-palavras-app/shared/util-interfaces';

export interface Word {
  availableUnits: number;
  value: string;
  owner: Teams | null;
}

const wordFactory = (
  value: string,
  availableUnits = 0,
  owner: Teams | null = null
): Word => ({
  value,
  availableUnits,
  owner,
});

const teamFactory = (): Team => ({
  id: 0,
  name: '',
  image: '',
  points: 0,
  chinese: '',
});
export const wordList: Word[] = [
  wordFactory('BROWNSEA', 10),
  wordFactory('KILIMANJARO', 10),
  wordFactory('PAXTU', 15),
  wordFactory('ACAMPOLO', 10),
  wordFactory('MAFEKING', 10),
  wordFactory('IMPISA', 15),
  wordFactory('BADENPOWELL', 5),
  wordFactory('OLAVE', 3),
  wordFactory('BAGHEERA', 10),
  wordFactory('BALOO', 10),
  wordFactory('STEPHENSON', 5),
  wordFactory('FRATERNIDADE', 5),
  wordFactory('BOI', 1, Teams.Boi),
  wordFactory('CAO', 1, Teams.Cao),
  wordFactory('CARNEIRO', 1, Teams.Carneiro),
  wordFactory('CAVALO', 1, Teams.Cavalo),
  wordFactory('COELHO', 1, Teams.Coelho),
  wordFactory('DRAGAO', 1, Teams.Dragao),
  wordFactory('GALO', 1, Teams.Galo),
  wordFactory('MACACO', 1, Teams.Macaco),
  wordFactory('PORCO', 1, Teams.Porco),
  wordFactory('RATO', 1, Teams.Rato),
  wordFactory('SERPENTE', 1, Teams.Serpente),
  wordFactory('TIGRE', 1, Teams.Tigre),
];

export const teamList: Team[] = [
  {
    ...teamFactory(),
    id: Teams.Boi,
    name: 'Boi',
  },
  {
    ...teamFactory(),
    id: Teams.Cao,
    name: 'Cão',
  },
  {
    ...teamFactory(),
    id: Teams.Carneiro,
    name: 'Carneiro',
  },
  {
    ...teamFactory(),
    id: Teams.Cavalo,
    name: 'Cavalo',
  },
  {
    ...teamFactory(),
    id: Teams.Coelho,
    name: 'Coelho',
  },
  {
    ...teamFactory(),
    id: Teams.Dragao,
    name: 'Dragão',
  },
  {
    ...teamFactory(),
    id: Teams.Galo,
    name: 'Galo',
  },
  {
    ...teamFactory(),
    id: Teams.Macaco,
    name: 'Macaco',
  },
  {
    ...teamFactory(),
    id: Teams.Porco,
    name: 'Porco',
  },
  {
    ...teamFactory(),
    id: Teams.Rato,
    name: 'Rato',
  },
  {
    ...teamFactory(),
    id: Teams.Serpente,
    name: 'Serpente',
  },
  {
    ...teamFactory(),
    id: Teams.Tigre,
    name: 'Tigre',
  },
];
