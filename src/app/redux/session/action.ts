import { actionCtx } from '../../util/redux/Actions';
import { BasicAuthPayloadFragment } from '../../../common/graphql/fragments/generated/basicAuthPayload.generated';

export const login = actionCtx<'session.login', BasicAuthPayloadFragment>(
  'session.login'
);
export const logout = actionCtx<'session.logout', void>('session.logout');
