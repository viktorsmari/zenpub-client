import React, { createContext, useContext, useEffect } from 'react';
import {
  InterceptorSrv,
  OperationName,
  Interceptor
} from '../../apollo/client';

export const ApolloInterceptorContext = createContext<InterceptorSrv>(
  {} as InterceptorSrv
);

interface Props {
  interceptor: InterceptorSrv;
}

export const ProvideApolloInterceptorCtx: React.FC<Props> = ({
  children,
  interceptor
}) => {
  return (
    <ApolloInterceptorContext.Provider value={interceptor}>
      {children}
    </ApolloInterceptorContext.Provider>
  );
};

export const useInterceptor = <OpName extends OperationName>(
  interc: Interceptor<OpName>
) => {
  const intercCtx = useContext(ApolloInterceptorContext);
  useEffect(
    () => {
      return intercCtx.add(interc);
    },
    [intercCtx, interc]
  );
};
