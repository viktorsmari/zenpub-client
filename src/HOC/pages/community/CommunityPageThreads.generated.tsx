import * as Types from '../../../graphql/types.generated';

import { ActivityPreviewCommentCtxExtendedFragment } from '../../modules/ActivityPreview/getActivityPreview.generated';
import { ActivityPreviewExtendedThreadFragment } from '../../modules/ActivityPreview/getActivityPreview.generated';
import gql from 'graphql-tag';
import { ActivityPreviewExtendedThreadFragmentDoc } from '../../modules/ActivityPreview/getActivityPreview.generated';
import { ActivityPreviewCommentCtxExtendedFragmentDoc } from '../../modules/ActivityPreview/getActivityPreview.generated';



export type ComunityPageThreadFragment = (
  { __typename: 'Thread' }
  & { comments: Types.Maybe<(
    { __typename: 'CommentsEdges' }
    & { edges: Array<Types.Maybe<(
      { __typename: 'CommentsEdge' }
      & { node: (
        { __typename: 'Comment' }
        & Pick<Types.Comment, 'createdAt'>
        & ActivityPreviewCommentCtxExtendedFragment
      ) }
    )>> }
  )> }
  & ActivityPreviewExtendedThreadFragment
);

export const ComunityPageThreadFragmentDoc = gql`
    fragment ComunityPageThread on Thread {
  ...ActivityPreviewExtendedThread
  comments {
    edges {
      node {
        ...ActivityPreviewCommentCtxExtended
        createdAt
      }
    }
  }
}
    ${ActivityPreviewExtendedThreadFragmentDoc}
${ActivityPreviewCommentCtxExtendedFragmentDoc}`;
