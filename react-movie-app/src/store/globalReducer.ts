import { EActionTypes, Action, IGlobalState } from '../types';

export function globalReducer(state: IGlobalState, action: Action) {
  const { type, payload } = action;
  switch (type) {
    case EActionTypes.REPLACE_MOVIES:
      return {
        ...state,
        movies: payload,
      };
    case EActionTypes.ADD_IDEA:
      return {
        ...state,
        ideas: [...state.ideas, payload],
      };
    default:
      return state;
  }
}
