import { AuthPayload } from '../../generated/graphqlapollo';

export type User = AuthPayload | null;

export interface State {
  user: User;
}
