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
  { ...teamFactory(), id: 1, name: 'Boi', chinese: '牛' },
  { ...teamFactory(), id: 2, name: 'Cão', chinese: '狗' },
  { ...teamFactory(), id: 3, name: 'Carneiro', chinese: '羊' },
  { ...teamFactory(), id: 4, name: 'Cavalo', chinese: '馬' },
  { ...teamFactory(), id: 5, name: 'Coelho', chinese: '兔' },
  { ...teamFactory(), id: 6, name: 'Dragão', chinese: '龍' },
  { ...teamFactory(), id: 7, name: 'Galo', chinese: '雞' },
  { ...teamFactory(), id: 8, name: 'Macaco', chinese: '猴' },
  { ...teamFactory(), id: 9, name: 'Porco', chinese: '豬' },
  { ...teamFactory(), id: 10, name: 'Rato', chinese: '鼠' },
  { ...teamFactory(), id: 11, name: 'Serpente', chinese: '蛇' },
  { ...teamFactory(), id: 12, name: 'Tigre', chinese: '虎' },
];
