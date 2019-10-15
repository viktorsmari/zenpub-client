import { LoginMutationMutation } from 'src/gql/sdk';

export type User = LoginMutationMutation['createSession'];

export interface State {
  user: User | null;
}
