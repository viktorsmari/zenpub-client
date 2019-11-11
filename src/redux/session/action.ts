import * as Sess from '.';
import { actionCtx } from '../../util/redux/Actions';

export const login = actionCtx<'session.login', Sess.State['auth']>(
  'session.login'
);
export const logout = actionCtx<'session.logout', void>('session.logout');
