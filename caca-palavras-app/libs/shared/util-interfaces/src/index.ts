export enum CommandType {
  Start,
  Finish,
  Type,
  Erase,
  Reset
}

export interface Command {
  player: number;
  type: CommandType;
}

export interface StartCommand extends Command {
  team: number;
}

export interface TypeCommand extends Command {
  character: string
}

export interface RawCommand {
  player: number;
  payload: string;
}
