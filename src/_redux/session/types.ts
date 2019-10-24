import { AuthPayload } from '../../generated/graphqlapollo';

export type User = AuthPayload;

export interface State {
  user: User | null;
}
