import React, { useContext } from 'react';
import { Action, IGlobalState } from 'types';

interface IGlobalContext {
  globalState: IGlobalState;
  globalDispatch: React.Dispatch<Action>;
}

export const defaultGlobalState: IGlobalState = {
  movies: [],
  ideas: [],
};

export const GlobalContext = React.createContext<IGlobalContext>({
  globalState: defaultGlobalState,
  globalDispatch: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);
