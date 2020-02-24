import * as Types from '../../../graphql/types.generated';

import { ComunityPageThreadFragment } from '../../../HOC/pages/community/CommunityPage.generated';
import gql from 'graphql-tag';
import { ComunityPageThreadFragmentDoc } from '../../../HOC/pages/community/CommunityPage.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export type CommunityThreadsQueryVariables = {
  communityId: Types.Scalars['String'],
  limit?: Types.Maybe<Types.Scalars['Int']>,
  before?: Types.Maybe<Types.Scalars['String']>,
  after?: Types.Maybe<Types.Scalars['String']>
};


export type CommunityThreadsQuery = (
  { __typename: 'RootQueryType' }
  & { community: Types.Maybe<(
    { __typename: 'Community' }
    & Pick<Types.Community, 'id'>
    & { threads: Types.Maybe<(
      { __typename: 'ThreadsEdges' }
      & { edges: Types.Maybe<Array<Types.Maybe<(
        { __typename: 'ThreadsEdge' }
        & { node: (
          { __typename: 'Thread' }
          & CommunityThreadFragment
        ) }
      )>>> }
    )> }
  )> }
);

export type CommunityThreadFragment = (
  { __typename: 'Thread' }
  & ComunityPageThreadFragment
);

export const CommunityThreadFragmentDoc = gql`
    fragment CommunityThread on Thread {
  ...ComunityPageThread
}
    ${ComunityPageThreadFragmentDoc}`;
export const CommunityThreadsDocument = gql`
    query communityThreads($communityId: String!, $limit: Int, $before: String, $after: String) {
  community(communityId: $communityId) {
    id
    threads(limit: $limit, before: $before, after: $after) {
      edges {
        node {
          ...CommunityThread
        }
      }
    }
  }
}
    ${CommunityThreadFragmentDoc}`;
export type CommunityThreadsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CommunityThreadsQuery, CommunityThreadsQueryVariables>, 'query'> & ({ variables: CommunityThreadsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CommunityThreadsComponent = (props: CommunityThreadsComponentProps) => (
      <ApolloReactComponents.Query<CommunityThreadsQuery, CommunityThreadsQueryVariables> query={CommunityThreadsDocument} {...props} />
    );
    
export type CommunityThreadsProps<TChildProps = {}> = ApolloReactHoc.DataProps<CommunityThreadsQuery, CommunityThreadsQueryVariables> & TChildProps;
export function withCommunityThreads<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CommunityThreadsQuery,
  CommunityThreadsQueryVariables,
  CommunityThreadsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CommunityThreadsQuery, CommunityThreadsQueryVariables, CommunityThreadsProps<TChildProps>>(CommunityThreadsDocument, {
      alias: 'communityThreads',
      ...operationOptions
    });
};

/**
 * __useCommunityThreadsQuery__
 *
 * To run a query within a React component, call `useCommunityThreadsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommunityThreadsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommunityThreadsQuery({
 *   variables: {
 *      communityId: // value for 'communityId'
 *      limit: // value for 'limit'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useCommunityThreadsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CommunityThreadsQuery, CommunityThreadsQueryVariables>) {
        return ApolloReactHooks.useQuery<CommunityThreadsQuery, CommunityThreadsQueryVariables>(CommunityThreadsDocument, baseOptions);
      }
export function useCommunityThreadsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CommunityThreadsQuery, CommunityThreadsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CommunityThreadsQuery, CommunityThreadsQueryVariables>(CommunityThreadsDocument, baseOptions);
        }
export type CommunityThreadsQueryHookResult = ReturnType<typeof useCommunityThreadsQuery>;
export type CommunityThreadsLazyQueryHookResult = ReturnType<typeof useCommunityThreadsLazyQuery>;
export type CommunityThreadsQueryResult = ApolloReactCommon.QueryResult<CommunityThreadsQuery, CommunityThreadsQueryVariables>;


export interface CommunityThreadsQueryOperation {
  operationName: 'communityThreads'
  result: CommunityThreadsQuery
  variables: CommunityThreadsQueryVariables
  type: 'query'
}
