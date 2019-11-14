import * as Types from '../types.d';

import { BasicCommentFragment } from '../fragments/generated/basicComment.generated';
import gql from 'graphql-tag';
import { BasicCommentFragmentDoc } from '../fragments/generated/basicComment.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type GetThreadQueryVariables = {
  threadId: Types.Scalars['String'];
};

export type GetThreadQuery = { __typename?: 'RootQueryType' } & {
  thread: Types.Maybe<
    { __typename?: 'Thread' } & Pick<
      Types.Thread,
      | 'id'
      | 'canonicalUrl'
      | 'isLocal'
      | 'isPublic'
      | 'isHidden'
      | 'createdAt'
      | 'updatedAt'
      | 'lastActivity'
    > & {
        myFollow: Types.Maybe<
          { __typename?: 'Follow' } & Pick<Types.Follow, 'id'>
        >;
        comments: Types.Maybe<
          { __typename?: 'CommentsEdges' } & Pick<
            Types.CommentsEdges,
            'totalCount'
          > & {
              edges: Types.Maybe<
                Array<
                  Types.Maybe<
                    { __typename?: 'CommentsEdge' } & {
                      node: Types.Maybe<
                        { __typename?: 'Comment' } & BasicCommentFragment
                      >;
                    }
                  >
                >
              >;
            }
        >;
      }
  >;
};

export const GetThreadDocument = gql`
  query getThread($threadId: String!) {
    thread(threadId: $threadId) {
      id
      canonicalUrl
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
        edges {
          node {
            ...BasicComment
          }
        }
      }
    }
  }
  ${BasicCommentFragmentDoc}
`;
export type GetThreadComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetThreadQuery,
    GetThreadQueryVariables
  >,
  'query'
> &
  ({ variables: GetThreadQueryVariables; skip?: boolean } | { skip: boolean });

export const GetThreadComponent = (props: GetThreadComponentProps) => (
  <ApolloReactComponents.Query<GetThreadQuery, GetThreadQueryVariables>
    query={GetThreadDocument}
    {...props}
  />
);

export type GetThreadProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  GetThreadQuery,
  GetThreadQueryVariables
> &
  TChildProps;
export function withGetThread<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetThreadQuery,
    GetThreadQueryVariables,
    GetThreadProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetThreadQuery,
    GetThreadQueryVariables,
    GetThreadProps<TChildProps>
  >(GetThreadDocument, {
    alias: 'getThread',
    ...operationOptions
  });
}

/**
 * __useGetThreadQuery__
 *
 * To run a query within a React component, call `useGetThreadQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetThreadQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetThreadQuery({
 *   variables: {
 *      threadId: // value for 'threadId'
 *   },
 * });
 */
export function useGetThreadQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetThreadQuery,
    GetThreadQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetThreadQuery, GetThreadQueryVariables>(
    GetThreadDocument,
    baseOptions
  );
}
export function useGetThreadLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetThreadQuery,
    GetThreadQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetThreadQuery, GetThreadQueryVariables>(
    GetThreadDocument,
    baseOptions
  );
}
export type GetThreadQueryHookResult = ReturnType<typeof useGetThreadQuery>;
export type GetThreadLazyQueryHookResult = ReturnType<
  typeof useGetThreadLazyQuery
>;
export type GetThreadQueryResult = ApolloReactCommon.QueryResult<
  GetThreadQuery,
  GetThreadQueryVariables
>;

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
