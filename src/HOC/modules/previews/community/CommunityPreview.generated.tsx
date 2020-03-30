import * as Types from '../../../../graphql/types.generated';

import gql from 'graphql-tag';

export type CommunityPreviewFragment = (
  { __typename: 'Community' }
  & Pick<Types.Community, 'id' | 'icon' | 'summary' | 'collectionCount' | 'followerCount'>
  & { myFlag: Types.Maybe<(
    { __typename: 'Flag' }
    & Pick<Types.Flag, 'id'>
  )>, threads: Types.Maybe<(
    { __typename: 'ThreadsPage' }
    & Pick<Types.ThreadsPage, 'totalCount'>
  )> }
  & CommunityInfoFragment
);

export type CommunityInfoFragment = (
  { __typename: 'Community' }
  & Pick<Types.Community, 'id' | 'name' | 'icon' | 'isLocal' | 'canonicalUrl' | 'displayUsername'>
  & { myFollow: Types.Maybe<(
    { __typename: 'Follow' }
    & Pick<Types.Follow, 'id'>
  )> }
);

export const CommunityInfoFragmentDoc = gql`
    fragment CommunityInfo on Community {
  id
  name
  icon
  isLocal
  myFollow {
    id
  }
  canonicalUrl
  displayUsername
}
    `;
export const CommunityPreviewFragmentDoc = gql`
    fragment CommunityPreview on Community {
  ...CommunityInfo
  id
  icon
  summary
  myFlag {
    id
  }
  collectionCount
  followerCount
  threads {
    totalCount
  }
}
    ${CommunityInfoFragmentDoc}`;
