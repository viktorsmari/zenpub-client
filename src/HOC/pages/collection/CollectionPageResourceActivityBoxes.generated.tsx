import * as Types from '../../../graphql/types.generated';

import { CollectionPageResourceFragment } from './CollectionPageResourceActivity.generated';
import gql from 'graphql-tag';
import { CollectionPageResourceFragmentDoc } from './CollectionPageResourceActivity.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export type CollectionPageResourceActivitiesQueryVariables = {
  collectionId: Types.Scalars['String'],
  limit?: Types.Maybe<Types.Scalars['Int']>,
  after?: Types.Maybe<Types.Scalars['String']>,
  before?: Types.Maybe<Types.Scalars['String']>
};


export type CollectionPageResourceActivitiesQuery = (
  { __typename: 'RootQueryType' }
  & { collection: Types.Maybe<(
    { __typename: 'Collection' }
    & Pick<Types.Collection, 'id' | 'resourceCount'>
    & { resources: Types.Maybe<(
      { __typename: 'ResourcesEdges' }
      & { edges: Array<Types.Maybe<(
        { __typename: 'ResourcesEdge' }
        & { node: (
          { __typename: 'Resource' }
          & CollectionPageResourceFragment
        ) }
      )>> }
    )> }
  )> }
);


export const CollectionPageResourceActivitiesDocument = gql`
    query collectionPageResourceActivities($collectionId: String!, $limit: Int, $after: String, $before: String) {
  collection(collectionId: $collectionId) {
    id
    resourceCount
    resources(limit: $limit, after: $after, before: $before) {
      edges {
        node {
          ...CollectionPageResource
        }
      }
    }
  }
}
    ${CollectionPageResourceFragmentDoc}`;
export type CollectionPageResourceActivitiesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CollectionPageResourceActivitiesQuery, CollectionPageResourceActivitiesQueryVariables>, 'query'> & ({ variables: CollectionPageResourceActivitiesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CollectionPageResourceActivitiesComponent = (props: CollectionPageResourceActivitiesComponentProps) => (
      <ApolloReactComponents.Query<CollectionPageResourceActivitiesQuery, CollectionPageResourceActivitiesQueryVariables> query={CollectionPageResourceActivitiesDocument} {...props} />
    );
    
export type CollectionPageResourceActivitiesProps<TChildProps = {}> = ApolloReactHoc.DataProps<CollectionPageResourceActivitiesQuery, CollectionPageResourceActivitiesQueryVariables> & TChildProps;
export function withCollectionPageResourceActivities<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CollectionPageResourceActivitiesQuery,
  CollectionPageResourceActivitiesQueryVariables,
  CollectionPageResourceActivitiesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CollectionPageResourceActivitiesQuery, CollectionPageResourceActivitiesQueryVariables, CollectionPageResourceActivitiesProps<TChildProps>>(CollectionPageResourceActivitiesDocument, {
      alias: 'collectionPageResourceActivities',
      ...operationOptions
    });
};

/**
 * __useCollectionPageResourceActivitiesQuery__
 *
 * To run a query within a React component, call `useCollectionPageResourceActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionPageResourceActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionPageResourceActivitiesQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *      limit: // value for 'limit'
 *      after: // value for 'after'
 *      before: // value for 'before'
 *   },
 * });
 */
export function useCollectionPageResourceActivitiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CollectionPageResourceActivitiesQuery, CollectionPageResourceActivitiesQueryVariables>) {
        return ApolloReactHooks.useQuery<CollectionPageResourceActivitiesQuery, CollectionPageResourceActivitiesQueryVariables>(CollectionPageResourceActivitiesDocument, baseOptions);
      }
export function useCollectionPageResourceActivitiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CollectionPageResourceActivitiesQuery, CollectionPageResourceActivitiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CollectionPageResourceActivitiesQuery, CollectionPageResourceActivitiesQueryVariables>(CollectionPageResourceActivitiesDocument, baseOptions);
        }
export type CollectionPageResourceActivitiesQueryHookResult = ReturnType<typeof useCollectionPageResourceActivitiesQuery>;
export type CollectionPageResourceActivitiesLazyQueryHookResult = ReturnType<typeof useCollectionPageResourceActivitiesLazyQuery>;
export type CollectionPageResourceActivitiesQueryResult = ApolloReactCommon.QueryResult<CollectionPageResourceActivitiesQuery, CollectionPageResourceActivitiesQueryVariables>;


export interface CollectionPageResourceActivitiesQueryOperation {
  operationName: 'collectionPageResourceActivities'
  result: CollectionPageResourceActivitiesQuery
  variables: CollectionPageResourceActivitiesQueryVariables
  type: 'query'
}
