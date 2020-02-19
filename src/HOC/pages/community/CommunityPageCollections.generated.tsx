import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';

export type CommunityPageCollectionBaseFragment = (
  { __typename: 'Collection' }
  & Pick<Types.Collection, 'id'>
);

export const CommunityPageCollectionBaseFragmentDoc = gql`
    fragment CommunityPageCollectionBase on Collection {
  id
}
    `;
