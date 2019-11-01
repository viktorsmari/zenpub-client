import * as Types from '../types.d';

import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type GetCommunitiesQueryQueryVariables = {
  limit?: Types.Maybe<Types.Scalars['Int']>;
  end?: Types.Maybe<Types.Scalars['Int']>;
};

export type GetCommunitiesQueryQuery = { __typename?: 'RootQueryType' } & {
  communities: Types.Maybe<
    { __typename?: 'CommunityPage' } & {
      pageInfo: { __typename?: 'PageInfo' } & Pick<
        Types.PageInfo,
        'startCursor' | 'endCursor'
      >;
      nodes: Types.Maybe<
        Array<
          Types.Maybe<
            { __typename?: 'Community' } & Pick<
              Types.Community,
              | 'id'
              | 'localId'
              | 'preferredUsername'
              | 'name'
              | 'summary'
              | 'icon'
              | 'followed'
            > & {
                collections: Types.Maybe<
                  { __typename?: 'CommunityCollectionsConnection' } & Pick<
                    Types.CommunityCollectionsConnection,
                    'totalCount'
                  >
                >;
                members: Types.Maybe<
                  { __typename?: 'CommunityMembersConnection' } & Pick<
                    Types.CommunityMembersConnection,
                    'totalCount'
                  >
                >;
                threads: Types.Maybe<
                  { __typename?: 'CommunityThreadsConnection' } & Pick<
                    Types.CommunityThreadsConnection,
                    'totalCount'
                  >
                >;
              }
          >
        >
      >;
    }
  >;
};

export const GetCommunitiesQueryDocument = gql`
  query getCommunitiesQuery($limit: Int, $end: Int) {
    communities(limit: $limit, after: $end) {
      pageInfo {
        startCursor
        endCursor
      }
      nodes {
        id
        localId
        preferredUsername
        name
        summary
        icon
        collections {
          totalCount
        }
        members {
          totalCount
        }
        threads {
          totalCount
        }
        followed
      }
    }
  }
`;
export type GetCommunitiesQueryComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    GetCommunitiesQueryQuery,
    GetCommunitiesQueryQueryVariables
  >,
  'query'
>;

export const GetCommunitiesQueryComponent = (
  props: GetCommunitiesQueryComponentProps
) => (
  <ApolloReactComponents.Query<
    GetCommunitiesQueryQuery,
    GetCommunitiesQueryQueryVariables
  >
    query={GetCommunitiesQueryDocument}
    {...props}
  />
);

export type GetCommunitiesQueryProps<
  TChildProps = {}
> = ApolloReactHoc.DataProps<
  GetCommunitiesQueryQuery,
  GetCommunitiesQueryQueryVariables
> &
  TChildProps;
export function withGetCommunitiesQuery<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetCommunitiesQueryQuery,
    GetCommunitiesQueryQueryVariables,
    GetCommunitiesQueryProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetCommunitiesQueryQuery,
    GetCommunitiesQueryQueryVariables,
    GetCommunitiesQueryProps<TChildProps>
  >(GetCommunitiesQueryDocument, {
    alias: 'getCommunitiesQuery',
    ...operationOptions
  });
}

/**
 * __useGetCommunitiesQueryQuery__
 *
 * To run a query within a React component, call `useGetCommunitiesQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommunitiesQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommunitiesQueryQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useGetCommunitiesQueryQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetCommunitiesQueryQuery,
    GetCommunitiesQueryQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetCommunitiesQueryQuery,
    GetCommunitiesQueryQueryVariables
  >(GetCommunitiesQueryDocument, baseOptions);
}
export function useGetCommunitiesQueryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetCommunitiesQueryQuery,
    GetCommunitiesQueryQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetCommunitiesQueryQuery,
    GetCommunitiesQueryQueryVariables
  >(GetCommunitiesQueryDocument, baseOptions);
}
export type GetCommunitiesQueryQueryHookResult = ReturnType<
  typeof useGetCommunitiesQueryQuery
>;
export type GetCommunitiesQueryLazyQueryHookResult = ReturnType<
  typeof useGetCommunitiesQueryLazyQuery
>;
export type GetCommunitiesQueryQueryResult = ApolloReactCommon.QueryResult<
  GetCommunitiesQueryQuery,
  GetCommunitiesQueryQueryVariables
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
        name: 'CommentContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Community'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'ActivityObject',
        possibleTypes: [
          {
            name: 'Community'
          },
          {
            name: 'Collection'
          },
          {
            name: 'Resource'
          },
          {
            name: 'Comment'
          }
        ]
      }
    ]
  }
};

export default result;
