import React from 'react';
import { ProvideActionCtx } from './actionCtx';
import { ProvideGlobCtx } from './GLOB';
import { ProvideSessionCtx } from './sessionCtx';
import { ProvideStateCtx } from './stateCtx';
import { ProvideStoreCtx, StoreContextT } from './storeCtx';

interface Props {
  children: React.ReactNode;
  store: StoreContextT;
}
export const ProvideContexts = ({ children, store }: Props) => {
  return (
    <ProvideStoreCtx store={store}>
      <ProvideStateCtx>
        <ProvideActionCtx>
          <ProvideSessionCtx>
            <ProvideGlobCtx>{children}</ProvideGlobCtx>
          </ProvideSessionCtx>
        </ProvideActionCtx>
      </ProvideStateCtx>
    </ProvideStoreCtx>
  );
};
