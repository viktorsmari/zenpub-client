import React from 'react';
import { ProvideActionCtx } from './global/actionCtx';
import { ProvideGlobCtx } from './global/GLOB';
import { ProvideSessionCtx } from './global/sessionCtx';
import { ProvideStateCtx } from './global/stateCtx';
import { ProvideStoreCtx, StoreContextT } from './global/storeCtx';
import { ProvideGqlSdk } from '../containers/App/ProvideGqlSdk';

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
            <ProvideGqlSdk>
              <ProvideGlobCtx>{children}</ProvideGlobCtx>
            </ProvideGqlSdk>
          </ProvideSessionCtx>
        </ProvideActionCtx>
      </ProvideStateCtx>
    </ProvideStoreCtx>
  );
};
