import { Me } from '../../graphql/types';

export type Auth = {
  me: Me;
  token: string;
} | null;

export interface State {
  auth: Auth;
}
