import React, { useContext, createContext } from 'react';
import { StateContext, StateContextT } from './stateCtx';
import { StoreContext, StoreContextT } from './storeCtx';
import { ActionContext, ActionContextT } from './actionCtx';
import { SessionContext, SessionContextT } from './sessionCtx';

export interface GlobCtx {
  state: StateContextT;
  store: StoreContextT;
  action: ActionContextT;
  session: SessionContextT;
}

export const GlobCtx = createContext({} as GlobCtx);
let GLOBSYM: GlobCtx;

export const getGlob = (): GlobCtx => GLOBSYM;

export const ProvideGlobCtx: React.FC = ({ children }) => {
  const state = useContext(StateContext);
  const store = useContext(StoreContext);
  const action = useContext(ActionContext);
  const session = useContext(SessionContext);
  const glob: GlobCtx = {
    state,
    store,
    action,
    session
  };
  GLOBSYM = glob;
  return <GlobCtx.Provider value={glob}>{children}</GlobCtx.Provider>;
};
