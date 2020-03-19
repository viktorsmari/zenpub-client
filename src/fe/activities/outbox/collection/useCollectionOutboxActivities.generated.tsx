import * as Types from '../../../../graphql/types.generated';

import { ActivityPreviewDataFragment } from '../../../../HOC/modules/ActivityPreview/getActivityPreview.generated';
import gql from 'graphql-tag';
import { ActivityPreviewDataFragmentDoc } from '../../../../HOC/modules/ActivityPreview/getActivityPreview.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export type CollectionOutboxActivitiesQueryVariables = {
  collectionId: Types.Scalars['String'],
  limit?: Types.Maybe<Types.Scalars['Int']>,
  before?: Types.Maybe<Types.Scalars['String']>,
  after?: Types.Maybe<Types.Scalars['String']>
};


export type CollectionOutboxActivitiesQuery = (
  { __typename: 'RootQueryType' }
  & { collection: Types.Maybe<(
    { __typename: 'Collection' }
    & Pick<Types.Collection, 'id'>
    & { outbox: Types.Maybe<(
      { __typename: 'ActivitiesEdges' }
      & { edges: Types.Maybe<Array<Types.Maybe<(
        { __typename: 'ActivitiesEdge' }
        & { node: (
          { __typename: 'Activity' }
          & CollectionOutboxActivityFragment
        ) }
      )>>> }
    )> }
  )> }
);

export type CollectionOutboxActivityFragment = (
  { __typename: 'Activity' }
  & ActivityPreviewDataFragment
);

export const CollectionOutboxActivityFragmentDoc = gql`
    fragment CollectionOutboxActivity on Activity {
  ...ActivityPreviewData
}
    ${ActivityPreviewDataFragmentDoc}`;
export const CollectionOutboxActivitiesDocument = gql`
    query collectionOutboxActivities($collectionId: String!, $limit: Int, $before: String, $after: String) {
  collection(collectionId: $collectionId) {
    id
    outbox(limit: $limit, before: $before, after: $after) {
      edges {
        node {
          ...CollectionOutboxActivity
        }
      }
    }
  }
}
    ${CollectionOutboxActivityFragmentDoc}`;
export type CollectionOutboxActivitiesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CollectionOutboxActivitiesQuery, CollectionOutboxActivitiesQueryVariables>, 'query'> & ({ variables: CollectionOutboxActivitiesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CollectionOutboxActivitiesComponent = (props: CollectionOutboxActivitiesComponentProps) => (
      <ApolloReactComponents.Query<CollectionOutboxActivitiesQuery, CollectionOutboxActivitiesQueryVariables> query={CollectionOutboxActivitiesDocument} {...props} />
    );
    
export type CollectionOutboxActivitiesProps<TChildProps = {}> = ApolloReactHoc.DataProps<CollectionOutboxActivitiesQuery, CollectionOutboxActivitiesQueryVariables> & TChildProps;
export function withCollectionOutboxActivities<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CollectionOutboxActivitiesQuery,
  CollectionOutboxActivitiesQueryVariables,
  CollectionOutboxActivitiesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CollectionOutboxActivitiesQuery, CollectionOutboxActivitiesQueryVariables, CollectionOutboxActivitiesProps<TChildProps>>(CollectionOutboxActivitiesDocument, {
      alias: 'collectionOutboxActivities',
      ...operationOptions
    });
};

/**
 * __useCollectionOutboxActivitiesQuery__
 *
 * To run a query within a React component, call `useCollectionOutboxActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionOutboxActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionOutboxActivitiesQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *      limit: // value for 'limit'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useCollectionOutboxActivitiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CollectionOutboxActivitiesQuery, CollectionOutboxActivitiesQueryVariables>) {
        return ApolloReactHooks.useQuery<CollectionOutboxActivitiesQuery, CollectionOutboxActivitiesQueryVariables>(CollectionOutboxActivitiesDocument, baseOptions);
      }
export function useCollectionOutboxActivitiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CollectionOutboxActivitiesQuery, CollectionOutboxActivitiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CollectionOutboxActivitiesQuery, CollectionOutboxActivitiesQueryVariables>(CollectionOutboxActivitiesDocument, baseOptions);
        }
export type CollectionOutboxActivitiesQueryHookResult = ReturnType<typeof useCollectionOutboxActivitiesQuery>;
export type CollectionOutboxActivitiesLazyQueryHookResult = ReturnType<typeof useCollectionOutboxActivitiesLazyQuery>;
export type CollectionOutboxActivitiesQueryResult = ApolloReactCommon.QueryResult<CollectionOutboxActivitiesQuery, CollectionOutboxActivitiesQueryVariables>;


export interface CollectionOutboxActivitiesQueryOperation {
  operationName: 'collectionOutboxActivities'
  result: CollectionOutboxActivitiesQuery
  variables: CollectionOutboxActivitiesQueryVariables
  type: 'query'
}