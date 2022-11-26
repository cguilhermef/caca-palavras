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
  wordFactory('agua', 10),
  wordFactory('bola', 3),
  wordFactory('carro', 10),
  wordFactory('dado', 10),
  wordFactory('eixo', 10),
  wordFactory('festa', 10),
];

export const teamList: Team[] = [
  {
    ...teamFactory(),
    id: 1,
    name: 'Boi',
    image: 'boi.svg',
    chinese: '牛',
    points: 1400,
  },
  {
    ...teamFactory(),
    id: 2,
    name: 'Cão',
    image: 'cao.svg',
    chinese: '狗',
    points: 150,
  },
  {
    ...teamFactory(),
    id: 3,
    name: 'Carneiro',
    image: 'carneiro.svg',
    chinese: '羊',
    points: 33,
  },
  {
    ...teamFactory(),
    id: 4,
    name: 'Cavalo',
    image: 'cavalo.svg',
    chinese: '馬',
    points: 33,
  },
  {
    ...teamFactory(),
    id: 5,
    name: 'Coelho',
    image: 'coelho.svg',
    chinese: '兔',
  },
  {
    ...teamFactory(),
    id: 6,
    name: 'Dragão',
    image: 'dragao.svg',
    chinese: '龍',
  },
  { ...teamFactory(), id: 7, name: 'Galo', image: 'galo.svg', chinese: '雞' },
  {
    ...teamFactory(),
    id: 8,
    name: 'Macaco',
    image: 'macaco.svg',
    chinese: '猴',
  },
  { ...teamFactory(), id: 9, name: 'Porco', image: 'porco.svg', chinese: '豬' },
  { ...teamFactory(), id: 10, name: 'Rato', image: 'rato.svg', chinese: '鼠' },
  {
    ...teamFactory(),
    id: 11,
    name: 'Serpente',
    image: 'serpente.svg',
    chinese: '蛇',
  },
  {
    ...teamFactory(),
    id: 12,
    name: 'Tigre',
    image: 'tigre.svg',
    chinese: '虎',
  },
];
