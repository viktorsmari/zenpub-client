import { AuthPayload } from '../../graphql/types';

export type User = AuthPayload | null;

export interface State {
  user: User;
}
