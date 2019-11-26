import { Store } from 'redux';
import { InterceptorSrv, InterceptorResultOf } from '../apollo/client';
import { login, logout } from '../redux/session';

export const integrateSessionApolloRedux = (
  intercSrv: InterceptorSrv,
  store: Store
) => {
  const setAuth = (
    resp:
      | InterceptorResultOf<'createSession'>
      | InterceptorResultOf<'confirmEmail'>
  ) => {
    if (!resp.error && resp.data && resp.data.me && resp.data.token) {
      const payload = { me: resp.data.me, token: resp.data.token };
      store.dispatch(login.create(payload));
    } else {
      store.dispatch(logout.create());
    }
  };
  // @ts-ignore
  intercSrv.add({
    operation: 'confirmEmail',
    request: _ => resp => setAuth(resp)
  });

  intercSrv.add({
    operation: 'createSession',
    request: _ => resp => setAuth(resp)
  });

  intercSrv.add({
    operation: 'deleteSession',
    request: _ => {
      store.dispatch(logout.create());
    }
  });
};
