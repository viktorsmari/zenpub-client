import * as Types from '../../../../graphql/types.generated';

import { CommentPreviewFragment, CommentPreviewThreadFragment, CommentPreviewThreadFragmentDoc } from '../comment/CommentPreview.generated';
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






export type ActivityPreviewFragment = (
  { __typename: 'Activity' }
  & Pick<Types.Activity, 'id' | 'verb' | 'createdAt'>
  & { user: Types.Maybe<(
    { __typename: 'User' }
    & Pick<Types.User, 'icon' | 'canonicalUrl'>
    & { userId: Types.User['id'], userName: Types.User['name'] }
  )>, context: Types.Maybe<(
    { __typename: 'Collection' }
    & CollectionPreviewFragment
  ) | (
    { __typename: 'Comment' }
    & CommentPreviewFragment
  ) | (
    { __typename: 'Community' }
    & CommunityPreviewFragment
  ) | (
    { __typename: 'Flag' }
    & Pick<Types.Flag, 'id'>
    & { context: Types.Maybe<(
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
    )> }
  ) | (
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
      & CommentPreviewThreadFragment
    ) | (
      { __typename: 'User' }
      & UserPreviewFragment
    )> }
  ) | (
    { __typename: 'Like' }
    & Pick<Types.Like, 'id'>
    & { context: Types.Maybe<(
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
    )> }
  ) | (
    { __typename: 'Resource' }
    & ResourcePreviewFragment
  ) | (
    { __typename: 'User' }
    & UserPreviewFragment
  )> }
);

export const ActivityPreviewFragmentDoc = gql`
    fragment ActivityPreview on Activity {
  id
  verb
  createdAt
  user {
    icon
    userId: id
    userName: name
    canonicalUrl
  }
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
    ... on Flag {
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
    ... on Like {
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
    ... on Follow {
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
          ...CommentPreviewThread
        }
      }
    }
  }
}
    ${CommunityPreviewFragmentDoc}
${CollectionPreviewFragmentDoc}
${ResourcePreviewFragmentDoc}
${UserPreviewFragmentDoc}
${CommentPreviewFragmentDoc}
${CommentPreviewThreadFragmentDoc}`;
