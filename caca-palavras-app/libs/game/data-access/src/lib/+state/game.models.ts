import { Team } from '@caca-palavras-app/shared/util-interfaces';

export interface Word {
  availableUnits: number;
  value: string;
}

const wordFactory = (value: string, availableUnits = 0): Word => ({
  value,
  availableUnits,
});

const teamFactory = (
  id: number,
  name: string,
  image = '',
  points = 0
): Team => ({
  id,
  name,
  image,
  points,
});

export const wordList: Word[] = [
  wordFactory('agua', 10),
  wordFactory('bola', 3),
  wordFactory('carro', 10),
  wordFactory('dado', 10),
  wordFactory('eixo', 10),
  wordFactory('festa', 10),
];

export const teamList: Team[] = [
  teamFactory(1, 'Boi'),
  teamFactory(2, 'Cão'),
  teamFactory(3, 'Carneiro'),
  teamFactory(4, 'Cavalo'),
  teamFactory(5, 'Coelho'),
  teamFactory(6, 'Dragão'),
  teamFactory(7, 'Galo'),
  teamFactory(8, 'Macaco'),
  teamFactory(9, 'Porco'),
  teamFactory(10, 'Rato'),
  teamFactory(11, 'Serpente'),
  teamFactory(12, 'Tigre'),
];
