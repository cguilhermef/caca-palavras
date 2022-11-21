import { createAction, props } from '@ngrx/store';
import { Command, StartCommand, TypeCommand } from "@caca-palavras-app/shared/util-interfaces";

export const registerCommand = createAction(
  '[Game] register command',
  props<{command: Command | TypeCommand | StartCommand }>()
)
