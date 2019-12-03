import { BasicAuthPayloadFragment } from '../../../common/graphql/fragments/generated/basicAuthPayload.generated';

export type Auth = BasicAuthPayloadFragment;

export interface State {
  auth: Auth | null;
}
