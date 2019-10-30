import React from 'react';
import { ProvideActionCtx } from './actionCtx';
import { ProvideGlobCtx } from './GLOB';
import { ProvideSessionCtx } from './sessionCtx';
import { ProvideStateCtx } from './stateCtx';
import { ProvideStoreCtx, StoreContextT } from './storeCtx';
import { InterceptorSrv } from '../../apollo/client';
import { ProvideApolloInterceptorCtx } from './apolloInterceptorCtx';

interface Props {
  children: React.ReactNode;
  store: StoreContextT;
  apolloInterceptor: InterceptorSrv;
}
export const ProvideContexts = ({
  children,
  store,
  apolloInterceptor
}: Props) => {
  return (
    <ProvideStoreCtx store={store}>
      <ProvideStateCtx>
        <ProvideActionCtx>
          <ProvideSessionCtx>
            <ProvideApolloInterceptorCtx interceptor={apolloInterceptor}>
              <ProvideGlobCtx>{children}</ProvideGlobCtx>
            </ProvideApolloInterceptorCtx>
          </ProvideSessionCtx>
        </ProvideActionCtx>
      </ProvideStateCtx>
    </ProvideStoreCtx>
  );
};
