import { Team } from '@caca-palavras-app/shared/util-interfaces';

export interface Word {
  availableUnits: number;
  value: string;
}

const wordFactory = (value: string, availableUnits = 0): Word => ({
  value,
  availableUnits,
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
];

export const teamList: Team[] = [
  {
    ...teamFactory(),
    id: 1,
    name: 'Boi',
  },
  {
    ...teamFactory(),
    id: 2,
    name: 'Cão',
  },
  {
    ...teamFactory(),
    id: 3,
    name: 'Carneiro',
  },
  {
    ...teamFactory(),
    id: 4,
    name: 'Cavalo',
  },
  {
    ...teamFactory(),
    id: 5,
    name: 'Coelho',
  },
  {
    ...teamFactory(),
    id: 6,
    name: 'Dragão',
  },
  {
    ...teamFactory(),
    id: 7,
    name: 'Galo',
  },
  {
    ...teamFactory(),
    id: 8,
    name: 'Macaco',
  },
  {
    ...teamFactory(),
    id: 9,
    name: 'Porco',
  },
  {
    ...teamFactory(),
    id: 10,
    name: 'Rato',
  },
  {
    ...teamFactory(),
    id: 11,
    name: 'Serpente',
  },
  {
    ...teamFactory(),
    id: 12,
    name: 'Tigre',
  },
];
