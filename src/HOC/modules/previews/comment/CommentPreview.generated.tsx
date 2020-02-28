import * as Types from '../../../../graphql/types.generated';

import { CommunityPreviewFragment } from '../community/CommunityPreview.generated';
import { ResourcePreviewFragment } from '../resource/ResourcePreview.generated';
import { CollectionPreviewFragment } from '../collection/CollectionPreview.generated';
import gql from 'graphql-tag';
import { CollectionPreviewFragmentDoc } from '../collection/CollectionPreview.generated';
import { ResourcePreviewFragmentDoc } from '../resource/ResourcePreview.generated';
import { CommunityPreviewFragmentDoc } from '../community/CommunityPreview.generated';




export type CommentPreviewFragment = (
  { __typename: 'Comment' }
  & Pick<Types.Comment, 'id' | 'likerCount'>
  & { inReplyTo: Types.Maybe<(
    { __typename: 'Comment' }
    & CommentPreviewBaseFragment
  )>, myLike: Types.Maybe<(
    { __typename: 'Like' }
    & Pick<Types.Like, 'id'>
  )>, thread: Types.Maybe<(
    { __typename: 'Thread' }
    & Pick<Types.Thread, 'id'>
    & { comments: Types.Maybe<(
      { __typename: 'CommentsEdges' }
      & { edges: Array<Types.Maybe<(
        { __typename: 'CommentsEdge' }
        & { node: (
          { __typename: 'Comment' }
          & CommentPreviewBaseFragment
        ) }
      )>> }
    )>, context: Types.Maybe<(
      { __typename: 'Collection' }
      & Pick<Types.Collection, 'id'>
      & { community: Types.Maybe<(
        { __typename: 'Community' }
        & Pick<Types.Community, 'id'>
        & { myFollow: Types.Maybe<(
          { __typename: 'Follow' }
          & Pick<Types.Follow, 'id'>
        )> }
      )> }
    ) | (
      { __typename: 'Community' }
      & Pick<Types.Community, 'id'>
      & { myFollow: Types.Maybe<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
      )> }
    ) | (
      { __typename: 'Flag' }
      & Pick<Types.Flag, 'id'>
    ) | (
      { __typename: 'Resource' }
      & Pick<Types.Resource, 'id'>
      & { collection: Types.Maybe<(
        { __typename: 'Collection' }
        & Pick<Types.Collection, 'id'>
        & { community: Types.Maybe<(
          { __typename: 'Community' }
          & Pick<Types.Community, 'id'>
          & { myFollow: Types.Maybe<(
            { __typename: 'Follow' }
            & Pick<Types.Follow, 'id'>
          )> }
        )> }
      )> }
    )> }
  )> }
  & CommentPreviewBaseFragment
);

export type CommentPreviewBaseFragment = (
  { __typename: 'Comment' }
  & Pick<Types.Comment, 'id' | 'isLocal' | 'content' | 'canonicalUrl' | 'createdAt'>
  & { creator: Types.Maybe<(
    { __typename: 'User' }
    & Pick<Types.User, 'icon' | 'canonicalUrl'>
    & { userId: Types.User['id'], userName: Types.User['name'] }
  )> }
);

export type CommentPreviewThreadFragment = (
  { __typename: 'Thread' }
  & Pick<Types.Thread, 'id' | 'isLocal' | 'canonicalUrl'>
  & { context: Types.Maybe<(
    { __typename: 'Collection' }
    & CollectionPreviewFragment
  ) | (
    { __typename: 'Community' }
    & CommunityPreviewFragment
  ) | { __typename: 'Flag' } | (
    { __typename: 'Resource' }
    & ResourcePreviewFragment
  )> }
);

export const CommentPreviewBaseFragmentDoc = gql`
    fragment CommentPreviewBase on Comment {
  id
  isLocal
  content
  canonicalUrl
  createdAt
  creator {
    icon
    userId: id
    userName: name
    canonicalUrl
  }
}
    `;
export const CommentPreviewFragmentDoc = gql`
    fragment CommentPreview on Comment {
  ...CommentPreviewBase
  id
  inReplyTo {
    ...CommentPreviewBase
  }
  likerCount
  myLike {
    id
  }
  likerCount
  thread {
    id
    comments(limit: 1) {
      edges {
        node {
          ...CommentPreviewBase
        }
      }
    }
    context {
      ... on Flag {
        id
      }
      ... on Community {
        id
        myFollow {
          id
        }
      }
      ... on Collection {
        id
        community {
          id
          myFollow {
            id
          }
        }
      }
      ... on Resource {
        id
        collection {
          id
          community {
            id
            myFollow {
              id
            }
          }
        }
      }
    }
  }
}
    ${CommentPreviewBaseFragmentDoc}`;
export const CommentPreviewThreadFragmentDoc = gql`
    fragment CommentPreviewThread on Thread {
  id
  isLocal
  canonicalUrl
  context {
    ... on Collection {
      ...CollectionPreview
    }
    ... on Resource {
      ...ResourcePreview
    }
    ... on Community {
      ...CommunityPreview
    }
  }
}
    ${CollectionPreviewFragmentDoc}
${ResourcePreviewFragmentDoc}
${CommunityPreviewFragmentDoc}`;
