import * as Types from '../../types.d';

import { BasicCommentFragment } from './basicComment.generated';
import gql from 'graphql-tag';
import { BasicCommentFragmentDoc } from './basicComment.generated';

export type BasicThreadFragment = { __typename?: 'Thread' } & Pick<
  Types.Thread,
  | 'id'
  | 'isLocal'
  | 'isPublic'
  | 'isHidden'
  | 'createdAt'
  | 'updatedAt'
  | 'lastActivity'
> & {
    myFollow: Types.Maybe<{ __typename?: 'Follow' } & Pick<Types.Follow, 'id'>>;
    comments: Types.Maybe<
      { __typename?: 'CommentsEdges' } & Pick<
        Types.CommentsEdges,
        'totalCount'
      > & {
          pageInfo: { __typename?: 'PageInfo' } & Pick<
            Types.PageInfo,
            'startCursor' | 'endCursor'
          >;
          edges: Types.Maybe<
            Array<
              Types.Maybe<
                { __typename?: 'CommentsEdge' } & Pick<
                  Types.CommentsEdge,
                  'cursor'
                > & {
                    node: Types.Maybe<
                      { __typename?: 'Comment' } & BasicCommentFragment
                    >;
                  }
              >
            >
          >;
        }
    >;
  };

export const BasicThreadFragmentDoc = gql`
  fragment BasicThread on Thread {
    id
    isLocal
    isPublic
    isHidden
    createdAt
    updatedAt
    lastActivity
    myFollow {
      id
    }
    comments {
      totalCount
      pageInfo {
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          ...BasicComment
        }
      }
    }
  }
  ${BasicCommentFragmentDoc}
`;

export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}

const result: IntrospectionResultData = {
  __schema: {
    types: [
      {
        kind: 'UNION',
        name: 'ActivityContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Comment'
          },
          {
            name: 'Community'
          },
          {
            name: 'Resource'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'FlagContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Comment'
          },
          {
            name: 'Community'
          },
          {
            name: 'Resource'
          },
          {
            name: 'User'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'LikeContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Comment'
          },
          {
            name: 'Resource'
          },
          {
            name: 'User'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'ThreadContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Community'
          },
          {
            name: 'Flag'
          },
          {
            name: 'Resource'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'FollowContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Community'
          },
          {
            name: 'Thread'
          },
          {
            name: 'User'
          }
        ]
      }
    ]
  }
};

export default result;
