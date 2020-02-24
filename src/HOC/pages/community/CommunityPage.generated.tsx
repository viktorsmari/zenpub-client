import * as Types from '../../../graphql/types.generated';

import { ActivityPreviewDataFragment } from '../../modules/ActivityPreview/getActivityPreview.generated';
import { CollectionPreviewDataFragment } from '../../modules/CollectionPreview/CollectionPreview.generated';
import { ActivityPreviewCommentCtxExtendedFragment } from '../../modules/ActivityPreview/getActivityPreview.generated';
import { ActivityPreviewExtendedThreadFragment } from '../../modules/ActivityPreview/getActivityPreview.generated';
import { HeroCommunityDataFragment } from '../../modules/HeroCommunity/HeroCommunity.generated';
import gql from 'graphql-tag';
import { HeroCommunityDataFragmentDoc } from '../../modules/HeroCommunity/HeroCommunity.generated';
import { ActivityPreviewExtendedThreadFragmentDoc } from '../../modules/ActivityPreview/getActivityPreview.generated';
import { ActivityPreviewCommentCtxExtendedFragmentDoc } from '../../modules/ActivityPreview/getActivityPreview.generated';
import { CollectionPreviewDataFragmentDoc } from '../../modules/CollectionPreview/CollectionPreview.generated';
import { ActivityPreviewDataFragmentDoc } from '../../modules/ActivityPreview/getActivityPreview.generated';






export type CommunityPageBaseFragment = (
  { __typename: 'Community' }
  & Pick<Types.Community, 'id'>
  & { myFollow: Types.Maybe<(
    { __typename: 'Follow' }
    & Pick<Types.Follow, 'id'>
  )> }
  & HeroCommunityDataFragment
);

export type ComunityPageThreadFragment = (
  { __typename: 'Thread' }
  & { comments: Types.Maybe<(
    { __typename: 'CommentsEdges' }
    & { edges: Array<Types.Maybe<(
      { __typename: 'CommentsEdge' }
      & { node: (
        { __typename: 'Comment' }
        & ActivityPreviewCommentCtxExtendedFragment
      ) }
    )>> }
  )> }
  & ActivityPreviewExtendedThreadFragment
);

export type CommunityPageCollectionBaseFragment = (
  { __typename: 'Collection' }
  & Pick<Types.Collection, 'id'>
  & CollectionPreviewDataFragment
);

export type CommunityPageActivityBaseFragment = (
  { __typename: 'Activity' }
  & Pick<Types.Activity, 'id'>
  & ActivityPreviewDataFragment
);

export const CommunityPageBaseFragmentDoc = gql`
    fragment CommunityPageBase on Community {
  id
  myFollow {
    id
  }
  ...HeroCommunityData
}
    ${HeroCommunityDataFragmentDoc}`;
export const ComunityPageThreadFragmentDoc = gql`
    fragment ComunityPageThread on Thread {
  ...ActivityPreviewExtendedThread
  comments(limit: 1) {
    edges {
      node {
        ...ActivityPreviewCommentCtxExtended
      }
    }
  }
}
    ${ActivityPreviewExtendedThreadFragmentDoc}
${ActivityPreviewCommentCtxExtendedFragmentDoc}`;
export const CommunityPageCollectionBaseFragmentDoc = gql`
    fragment CommunityPageCollectionBase on Collection {
  id
  ...CollectionPreviewData
}
    ${CollectionPreviewDataFragmentDoc}`;
export const CommunityPageActivityBaseFragmentDoc = gql`
    fragment CommunityPageActivityBase on Activity {
  id
  ...ActivityPreviewData
}
    ${ActivityPreviewDataFragmentDoc}`;
