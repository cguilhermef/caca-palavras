export enum CommandType {
  Start,
  Finish,
  Type,
  Erase,
  Reset,
}

export interface Command {
  player: number;
  type: CommandType;
}

export interface TeamCommand extends Command {
  team: number;
}

export interface TypeCommand extends Command {
  character: string;
}

export interface RawCommand {
  player: number;
  payload: string;
}

export interface Team {
  id: number;
  name: string;
  points: number;
  image: string;
  chinese: string;
}

export interface RankedTeam extends Team {
  position: number | null;
}

export enum Teams {
  Boi = 1,
  Cao,
  Carneiro,
  Cavalo,
  Coelho,
  Dragao,
  Galo,
  Macaco,
  Porco,
  Rato,
  Serpente,
  Tigre,
}
