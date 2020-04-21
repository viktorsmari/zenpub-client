import * as Types from '../../../../graphql/types.generated';

import { CommentPreviewFragment } from '../comment/CommentPreview.generated';
import { UserPreviewFragment } from '../user/UserPreview.generated';
import { ResourcePreviewFragment } from '../resource/ResourcePreview.generated';
import { CollectionPreviewFragment } from '../collection/CollectionPreview.generated';
import { CommunityPreviewFragment } from '../community/CommunityPreview.generated';
import gql from 'graphql-tag';
import { CommunityPreviewFragmentDoc } from '../community/CommunityPreview.generated';
import { CollectionPreviewFragmentDoc } from '../collection/CollectionPreview.generated';
import { ResourcePreviewFragmentDoc } from '../resource/ResourcePreview.generated';
import { UserPreviewFragmentDoc } from '../user/UserPreview.generated';
import { CommentPreviewFragmentDoc } from '../comment/CommentPreview.generated';






export type FlagPreviewFragment = (
  { __typename: 'Flag' }
  & Pick<Types.Flag, 'id'>
  & { context: (
    { __typename: 'Collection' }
    & CollectionPreviewFragment
  ) | (
    { __typename: 'Comment' }
    & CommentPreviewFragment
  ) | (
    { __typename: 'Community' }
    & CommunityPreviewFragment
  ) | (
    { __typename: 'Resource' }
    & ResourcePreviewFragment
  ) | (
    { __typename: 'User' }
    & UserPreviewFragment
  ) }
);

export const FlagPreviewFragmentDoc = gql`
    fragment FlagPreview on Flag {
  id
  context {
    ... on Community {
      ...CommunityPreview
    }
    ... on Collection {
      ...CollectionPreview
    }
    ... on Resource {
      ...ResourcePreview
    }
    ... on User {
      ...UserPreview
    }
    ... on Comment {
      ...CommentPreview
    }
  }
}
    ${CommunityPreviewFragmentDoc}
${CollectionPreviewFragmentDoc}
${ResourcePreviewFragmentDoc}
${UserPreviewFragmentDoc}
${CommentPreviewFragmentDoc}`;
