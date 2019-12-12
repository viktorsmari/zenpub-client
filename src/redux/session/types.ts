import { BasicAuthPayloadFragment } from '../../graphql/fragments/generated/basicAuthPayload.generated';

export type SessionUser = BasicAuthPayloadFragment['me'];

export interface State {
  me: SessionUser | null;
}
