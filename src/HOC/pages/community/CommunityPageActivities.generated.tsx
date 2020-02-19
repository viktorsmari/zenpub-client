import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';

export type CommunityPageActivityBaseFragment = (
  { __typename: 'Activity' }
  & Pick<Types.Activity, 'id'>
);

export const CommunityPageActivityBaseFragmentDoc = gql`
    fragment CommunityPageActivityBase on Activity {
  id
}
    `;
