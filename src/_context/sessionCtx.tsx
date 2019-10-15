import React, { useContext } from 'react';
import { State } from '../_redux/session';
import { createContext } from 'react';
import { StateContext } from './stateCtx';

export interface SessionContextT {
  session: State;
}
export const SessionContext = createContext<SessionContextT>(
  {} as SessionContextT
);

export const ProvideSessionCtx: React.FC = ({ children }) => {
  const { session } = useContext(StateContext);

  return (
    <SessionContext.Provider value={{ session }}>
      {children}
    </SessionContext.Provider>
  );
};
