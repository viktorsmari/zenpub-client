import * as Loc from '.';
import { Reducer } from 'redux';

export const defaultInitialState: Loc.State = {
  lang: 'en_GB'
};

export const reducer = (
  initialState = defaultInitialState
): Reducer<Loc.State> => (old = initialState, action) => {
  if (Loc.setLang.is(action)) {
    return {
      ...old,
      lang: action.payload
    };
  }
  return old;
};
