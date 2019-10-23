import React from 'react';
import store from '../_redux/store';
import { createContext } from 'react';

export type StoreContextT = typeof store;
export const StoreContext = createContext<StoreContextT>({} as StoreContextT);

export const ProvideStoreCtx: React.FC = ({ children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
