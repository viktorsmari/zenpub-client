import React from 'react';
import { ProvideActionCtx } from './actionCtx';
import { ProvideGlobCtx } from './GLOB';
import { ProvideSessionCtx } from './sessionCtx';
import { ProvideStateCtx } from './stateCtx';
import { ProvideStoreCtx, StoreContextT } from './storeCtx';
import { ProvideGqlSdk } from '../../containers/App/ProvideGqlSdk';

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
