import * as Types from '../../../graphql/types.generated';

import { ActivityPreviewFragment } from '../../modules/previews/activity/ActivityPreview.generated';
import { ThreadPreviewFragment } from '../../modules/previews/thread/ThreadPreview.generated';
import { HeroCommunityDataFragment } from '../../modules/HeroCommunity/HeroCommunity.generated';
import gql from 'graphql-tag';
import { HeroCommunityDataFragmentDoc } from '../../modules/HeroCommunity/HeroCommunity.generated';
import { ThreadPreviewFragmentDoc } from '../../modules/previews/thread/ThreadPreview.generated';
import { ActivityPreviewFragmentDoc } from '../../modules/previews/activity/ActivityPreview.generated';
import { CommentPreviewFragment, CommentPreviewFragmentDoc } from 'HOC/modules/previews/comment/CommentPreview.generated';
import { CollectionPreviewFragment, CollectionPreviewFragmentDoc } from 'HOC/modules/previews/collection/CollectionPreview.generated';




export type CommunityPageDataFragment = (
  { __typename: 'Community' }
  & Pick<Types.Community, 'id'>
  & { myFollow: Types.Maybe<(
    { __typename: 'Follow' }
    & Pick<Types.Follow, 'id'>
  )> }
  & HeroCommunityDataFragment
);

export type CommunityPageThreadFragment = (
  { __typename: 'Thread' }
  & { comments: Types.Maybe<(
    { __typename: 'CommentsEdges' }
    & { edges: Array<Types.Maybe<(
      { __typename: 'CommentsEdge' }
      & { node: (
        { __typename: 'Comment' }
        & CommentPreviewFragment
      ) }
    )>> }
  )> }
  & ThreadPreviewFragment
);

export type CommunityPageCollectionBaseFragment = (
  { __typename: 'Collection' }
  & Pick<Types.Collection, 'id'>
  & CollectionPreviewFragment
);

export type CommunityPageActivityBaseFragment = (
  { __typename: 'Activity' }
  & Pick<Types.Activity, 'id'>
  & ActivityPreviewFragment
);

export const CommunityPageDataFragmentDoc = gql`
    fragment CommunityPageData on Community {
  id
  myFollow {
    id
  }
  ...HeroCommunityData
}
    ${HeroCommunityDataFragmentDoc}`;
export const CommunityPageThreadFragmentDoc = gql`
    fragment CommunityPageThread on Thread {
  ...ThreadPreview
  comments(limit: 1) {
    edges {
      node {
        ...CommentPreview
      }
    }
  }
}
    ${ThreadPreviewFragmentDoc}
${CommentPreviewFragmentDoc}`;
export const CommunityPageCollectionBaseFragmentDoc = gql`
    fragment CommunityPageCollectionBase on Collection {
  id
  ...CollectionPreview
}
    ${CollectionPreviewFragmentDoc}`;
export const CommunityPageActivityBaseFragmentDoc = gql`
    fragment CommunityPageActivityBase on Activity {
  id
  ...ActivityPreview
}
    ${ActivityPreviewFragmentDoc}`;
