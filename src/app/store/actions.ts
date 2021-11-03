import { createAction, props } from '@ngrx/store';

enum ActionTypes {
  SIMPLE_ACTION = '[BASIC] SIMPLE_ACTION',
}

export class Actions {
  static simpleAction = createAction(
    ActionTypes.SIMPLE_ACTION,
    props<{ value: string }>()
  );
}
