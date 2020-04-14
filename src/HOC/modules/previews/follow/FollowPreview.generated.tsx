import * as Types from '../../../../graphql/types.generated';

import { ThreadPreviewFragment } from '../thread/ThreadPreview.generated';
import { UserPreviewFragment } from '../user/UserPreview.generated';
import { CollectionPreviewFragment } from '../collection/CollectionPreview.generated';
import { CommunityPreviewFragment } from '../community/CommunityPreview.generated';
import gql from 'graphql-tag';
import { CommunityPreviewFragmentDoc } from '../community/CommunityPreview.generated';
import { CollectionPreviewFragmentDoc } from '../collection/CollectionPreview.generated';
import { UserPreviewFragmentDoc } from '../user/UserPreview.generated';
import { ThreadPreviewFragmentDoc } from '../thread/ThreadPreview.generated';





export type FollowPreviewFragment = (
  { __typename: 'Follow' }
  & Pick<Types.Follow, 'id'>
  & { context: Types.Maybe<(
    { __typename: 'Collection' }
    & CollectionPreviewFragment
  ) | (
    { __typename: 'Community' }
    & CommunityPreviewFragment
  ) | (
    { __typename: 'Thread' }
    & ThreadPreviewFragment
  ) | (
    { __typename: 'User' }
    & UserPreviewFragment
  )> }
);

export const FollowPreviewFragmentDoc = gql`
    fragment FollowPreview on Follow {
  id
  context {
    ... on Community {
      ...CommunityPreview
    }
    ... on Collection {
      ...CollectionPreview
    }
    ... on User {
      ...UserPreview
    }
    ... on Thread {
      ...ThreadPreview
    }
  }
}
    ${CommunityPreviewFragmentDoc}
${CollectionPreviewFragmentDoc}
${UserPreviewFragmentDoc}
${ThreadPreviewFragmentDoc}`;
