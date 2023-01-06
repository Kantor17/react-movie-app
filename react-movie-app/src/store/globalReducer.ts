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
    case EActionTypes.REPLACE_DETAILS_ITEM:
      return {
        ...state,
        detailsItem: payload,
      };
    case EActionTypes.CHANGE_SUBMITTED_QUERY:
      return {
        ...state,
        submittedQuery: payload,
      };
    case EActionTypes.CHANGE_SEARCH_PAGE:
      return {
        ...state,
        searchPage: payload,
      };
    case EActionTypes.CHANGE_MAX_SEARCH_PAGE:
      return {
        ...state,
        maxSearchPage: payload,
      };
    default:
      return state;
  }
}
