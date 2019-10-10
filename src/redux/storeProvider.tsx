import React, { createContext, useState, useEffect } from 'react';
import store, { State } from './store';
import { Dispatch } from 'redux';

export const StoreCtx = createContext<{ state: State; dispatch: Dispatch }>(
  {} as any
);

export const ProvideStore: React.FC = ({ children }) => {
  const dispatch = store.dispatch;
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    return store.subscribe(() => {
      setState(store.getState());
    });
  });
  return (
    <StoreCtx.Provider value={{ state, dispatch }}>
      {children}
    </StoreCtx.Provider>
  );
};
