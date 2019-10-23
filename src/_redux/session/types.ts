import { LoginMutationMutation } from '../../gql/sdk';

export type User = LoginMutationMutation['createSession'];

export interface State {
  user: User | null;
}
