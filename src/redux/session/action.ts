import * as Sess from '.';
import { actionCtx } from '../../util/redux/Actions';

export const login = actionCtx<'session.login', Sess.User>('session.login');
export const logout = actionCtx<'session.logout', void>('session.logout');
