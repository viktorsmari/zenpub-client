import * as Types from '../../../../graphql/types.generated';

import gql from 'graphql-tag';

export type CommunityPreviewFragment = (
  { __typename: 'Community' }
  & Pick<Types.Community, 'id' | 'icon' | 'name' | 'summary' | 'collectionCount' | 'followerCount'>
  & { myFlag: Types.Maybe<(
    { __typename: 'Flag' }
    & Pick<Types.Flag, 'id'>
  )>, myFollow: Types.Maybe<(
    { __typename: 'Follow' }
    & Pick<Types.Follow, 'id'>
  )>, threads: Types.Maybe<(
    { __typename: 'ThreadsEdges' }
    & Pick<Types.ThreadsEdges, 'totalCount'>
  )> }
);

export const CommunityPreviewFragmentDoc = gql`
    fragment CommunityPreview on Community {
  id
  icon
  name
  summary
  myFlag {
    id
  }
  myFollow {
    id
  }
  collectionCount
  followerCount
  threads {
    totalCount
  }
}
    `;
