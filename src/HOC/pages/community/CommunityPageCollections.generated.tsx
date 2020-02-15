import * as Types from '../../../graphql/types.generated';

import { CollectionPreviewDataFragment } from '../../modules/CollectionPreview/CollectionPreview.generated';
import gql from 'graphql-tag';
import { CollectionPreviewDataFragmentDoc } from '../../modules/CollectionPreview/CollectionPreview.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export type CommunityPageCollectionsQueryVariables = {
  communityId: Types.Scalars['String'],
  limit?: Types.Maybe<Types.Scalars['Int']>,
  before?: Types.Maybe<Types.Scalars['String']>,
  after?: Types.Maybe<Types.Scalars['String']>
};


export type CommunityPageCollectionsQuery = (
  { __typename: 'RootQueryType' }
  & { community: Types.Maybe<(
    { __typename: 'Community' }
    & Pick<Types.Community, 'id'>
    & { collections: Types.Maybe<(
      { __typename: 'CollectionsEdges' }
      & { edges: Array<Types.Maybe<(
        { __typename: 'CollectionsEdge' }
        & { node: (
          { __typename: 'Collection' }
          & CollectionPreviewDataFragment
        ) }
      )>> }
    )> }
  )> }
);


export const CommunityPageCollectionsDocument = gql`
    query communityPageCollections($communityId: String!, $limit: Int, $before: String, $after: String) {
  community(communityId: $communityId) {
    id
    collections(limit: $limit, before: $before, after: $after) {
      edges {
        node {
          ...CollectionPreviewData
        }
      }
    }
  }
}
    ${CollectionPreviewDataFragmentDoc}`;
export type CommunityPageCollectionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CommunityPageCollectionsQuery, CommunityPageCollectionsQueryVariables>, 'query'> & ({ variables: CommunityPageCollectionsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CommunityPageCollectionsComponent = (props: CommunityPageCollectionsComponentProps) => (
      <ApolloReactComponents.Query<CommunityPageCollectionsQuery, CommunityPageCollectionsQueryVariables> query={CommunityPageCollectionsDocument} {...props} />
    );
    
export type CommunityPageCollectionsProps<TChildProps = {}> = ApolloReactHoc.DataProps<CommunityPageCollectionsQuery, CommunityPageCollectionsQueryVariables> & TChildProps;
export function withCommunityPageCollections<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CommunityPageCollectionsQuery,
  CommunityPageCollectionsQueryVariables,
  CommunityPageCollectionsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CommunityPageCollectionsQuery, CommunityPageCollectionsQueryVariables, CommunityPageCollectionsProps<TChildProps>>(CommunityPageCollectionsDocument, {
      alias: 'communityPageCollections',
      ...operationOptions
    });
};

/**
 * __useCommunityPageCollectionsQuery__
 *
 * To run a query within a React component, call `useCommunityPageCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommunityPageCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommunityPageCollectionsQuery({
 *   variables: {
 *      communityId: // value for 'communityId'
 *      limit: // value for 'limit'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useCommunityPageCollectionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CommunityPageCollectionsQuery, CommunityPageCollectionsQueryVariables>) {
        return ApolloReactHooks.useQuery<CommunityPageCollectionsQuery, CommunityPageCollectionsQueryVariables>(CommunityPageCollectionsDocument, baseOptions);
      }
export function useCommunityPageCollectionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CommunityPageCollectionsQuery, CommunityPageCollectionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CommunityPageCollectionsQuery, CommunityPageCollectionsQueryVariables>(CommunityPageCollectionsDocument, baseOptions);
        }
export type CommunityPageCollectionsQueryHookResult = ReturnType<typeof useCommunityPageCollectionsQuery>;
export type CommunityPageCollectionsLazyQueryHookResult = ReturnType<typeof useCommunityPageCollectionsLazyQuery>;
export type CommunityPageCollectionsQueryResult = ApolloReactCommon.QueryResult<CommunityPageCollectionsQuery, CommunityPageCollectionsQueryVariables>;


export interface CommunityPageCollectionsQueryOperation {
  operationName: 'communityPageCollections'
  result: CommunityPageCollectionsQuery
  variables: CommunityPageCollectionsQueryVariables
  type: 'query'
}
