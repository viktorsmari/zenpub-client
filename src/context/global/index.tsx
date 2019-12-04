import React from 'react';
import { ProvideActionCtx } from './actionCtx';
import { ProvideSessionCtx } from './sessionCtx';
import { ProvideStateCtx } from './stateCtx';
import { ProvideStoreCtx, StoreContextT } from './storeCtx';
import { InterceptorSrv } from '../../apollo/client';
import { ProvideApolloInterceptorCtx } from './apolloInterceptorCtx';
import {
  ApolloDynamicLinkContext,
  DynamicLinkSrv
} from '../../util/apollo/dynamicLink';

interface Props {
  children: React.ReactNode;
  store: StoreContextT;
  apolloInterceptor: InterceptorSrv;
  dynamicLinkSrv: DynamicLinkSrv;
}
export const ProvideContexts: React.FC<Props> = ({
  children,
  store,
  apolloInterceptor,
  dynamicLinkSrv
}) => {
  return (
    <ProvideStoreCtx store={store}>
      <ProvideStateCtx>
        <ProvideActionCtx>
          <ProvideSessionCtx>
            <ProvideApolloInterceptorCtx interceptor={apolloInterceptor}>
              <ApolloDynamicLinkContext.Provider value={dynamicLinkSrv}>
                {children}
              </ApolloDynamicLinkContext.Provider>
            </ProvideApolloInterceptorCtx>
          </ProvideSessionCtx>
        </ProvideActionCtx>
      </ProvideStateCtx>
    </ProvideStoreCtx>
  );
};
