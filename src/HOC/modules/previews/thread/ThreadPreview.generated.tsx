import * as Types from '../../../../graphql/types.generated';

import { CommentPreviewBaseFragment } from '../comment/CommentPreview.generated';
import { ResourcePreviewFragment } from '../resource/ResourcePreview.generated';
import { CollectionPreviewFragment } from '../collection/CollectionPreview.generated';
import { CommunityPreviewFragment } from '../community/CommunityPreview.generated';
import gql from 'graphql-tag';
import { CommunityPreviewFragmentDoc } from '../community/CommunityPreview.generated';
import { CollectionPreviewFragmentDoc } from '../collection/CollectionPreview.generated';
import { ResourcePreviewFragmentDoc } from '../resource/ResourcePreview.generated';
import { CommentPreviewBaseFragmentDoc } from '../comment/CommentPreview.generated';





export type ThreadPreviewFragment = (
  { __typename: 'Thread' }
  & Pick<Types.Thread, 'id'>
  & { context: Types.Maybe<(
    { __typename: 'Collection' }
    & CollectionPreviewFragment
  ) | (
    { __typename: 'Community' }
    & CommunityPreviewFragment
  ) | { __typename: 'Flag' } | (
    { __typename: 'Resource' }
    & ResourcePreviewFragment
  )>, comments: Types.Maybe<(
    { __typename: 'CommentsEdges' }
    & { edges: Array<Types.Maybe<(
      { __typename: 'CommentsEdge' }
      & { node: (
        { __typename: 'Comment' }
        & CommentPreviewBaseFragment
      ) }
    )>> }
  )> }
);

export const ThreadPreviewFragmentDoc = gql`
    fragment ThreadPreview on Thread {
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
  }
  comments(limit: 1) {
    edges {
      node {
        ...CommentPreviewBase
      }
    }
  }
}
    ${CommunityPreviewFragmentDoc}
${CollectionPreviewFragmentDoc}
${ResourcePreviewFragmentDoc}
${CommentPreviewBaseFragmentDoc}`;
