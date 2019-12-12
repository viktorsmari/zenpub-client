import React from 'react';
import { ProvideActionCtx } from './actionCtx';
import { ProvideSessionCtx } from './sessionCtx';
import { ProvideStateCtx } from './stateCtx';
import { ProvideStoreCtx, StoreContextT } from './storeCtx';
import {
  ApolloDynamicLinkContext,
  DynamicLinkSrv
} from '../../util/apollo/dynamicLink';

interface Props {
  children: React.ReactNode;
  store: StoreContextT;
  dynamicLinkSrv: DynamicLinkSrv;
}
export const ProvideContexts: React.FC<Props> = ({
  children,
  store,
  dynamicLinkSrv
}) => {
  return (
    <ProvideStoreCtx store={store}>
      <ProvideStateCtx>
        <ProvideActionCtx>
          <ProvideSessionCtx>
            <ApolloDynamicLinkContext.Provider value={dynamicLinkSrv}>
              {children}
            </ApolloDynamicLinkContext.Provider>
          </ProvideSessionCtx>
        </ProvideActionCtx>
      </ProvideStateCtx>
    </ProvideStoreCtx>
  );
};
