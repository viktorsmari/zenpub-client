import { actionCtx } from '../../util/redux/Actions';
import { BasicAuthPayloadFragment } from '../../graphql/fragments/generated/basicAuthPayload.generated';

export const login = actionCtx<'session.login', BasicAuthPayloadFragment['me']>(
  'session.login'
);
export const logout = actionCtx<'session.logout', void>('session.logout');
