import { Store } from 'redux';
import { InterceptorSrv, InterceptorResultOf } from '../apollo/client';
import { login, logout } from '../redux/session';

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
    request: _ => _ => doMaybeLogin
  });

  const doMaybeLogin = (
    resp: InterceptorResultOf<'createUser' | 'createSession'>
  ) => {
    if (!resp.error && resp.data && resp.data.me && resp.data.token) {
      const payload = { me: resp.data.me, token: resp.data.token };
      store.dispatch(login.create(payload));
    } else {
      store.dispatch(logout.create());
    }
  };

  intercSrv.add({
    operation: 'deleteSession',
    request: _ => {
      store.dispatch(logout.create());
    }
  });
};
