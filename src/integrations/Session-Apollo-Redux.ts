import { InterceptorSrv, BLOCK_REQUEST, BlockRequest } from '../apollo/client';
import { Store } from 'redux';
import { login, logout } from '../redux/session';
import { AuthPayload } from '../graphql/types';

export const integrateSessionApolloRedux = (
  intercSrv: InterceptorSrv,
  store: Store
) => {
  intercSrv.add({
    operation: 'createSession',
    request: _ => doMaybeLogin
  });

  intercSrv.add({
    operation: 'createUser',
    request: _ => doMaybeLogin
  });

  const doMaybeLogin = (
    resp: AuthPayload | BlockRequest | null | undefined
  ) => {
    if (resp !== BLOCK_REQUEST) {
      resp
        ? store.dispatch(login.create(resp))
        : store.dispatch(logout.create());
    }
  };

  intercSrv.add({
    operation: 'deleteSession',
    request: _ => {
      store.dispatch(logout.create());
    }
  });
};
