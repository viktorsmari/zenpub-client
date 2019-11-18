import { Store } from 'redux';
import { InterceptorSrv } from '../apollo/client';
import { login, logout } from '../redux/session';

export const integrateSessionApolloRedux = (
  intercSrv: InterceptorSrv,
  store: Store
) => {
  intercSrv.add({
    operation: 'createSession',
    request: _ => resp => {
      if (!resp.error && resp.data && resp.data.me && resp.data.token) {
        const payload = { me: resp.data.me, token: resp.data.token };
        store.dispatch(login.create(payload));
      } else {
        store.dispatch(logout.create());
      }
    }
  });

  intercSrv.add({
    operation: 'deleteSession',
    request: _ => {
      store.dispatch(logout.create());
    }
  });
};
