import * as Types from '../../../graphql/types.generated';

import { ActivityPreviewDataFragment } from '../../modules/ActivityPreview/getActivityPreview.generated';
import gql from 'graphql-tag';
import { ActivityPreviewDataFragmentDoc } from '../../modules/ActivityPreview/getActivityPreview.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export type CollectionPageActivitiesQueryVariables = {
  collectionId: Types.Scalars['String'],
  limit?: Types.Maybe<Types.Scalars['Int']>,
  after?: Types.Maybe<Types.Scalars['String']>,
  before?: Types.Maybe<Types.Scalars['String']>
};


export type CollectionPageActivitiesQuery = (
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
          & ActivityPreviewDataFragment
        ) }
      )>>> }
    )> }
  )> }
);


export const CollectionPageActivitiesDocument = gql`
    query collectionPageActivities($collectionId: String!, $limit: Int, $after: String, $before: String) {
  collection(collectionId: $collectionId) {
    id
    outbox(limit: $limit, after: $after, before: $before) {
      edges {
        node {
          ...ActivityPreviewData
        }
      }
    }
  }
}
    ${ActivityPreviewDataFragmentDoc}`;
export type CollectionPageActivitiesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CollectionPageActivitiesQuery, CollectionPageActivitiesQueryVariables>, 'query'> & ({ variables: CollectionPageActivitiesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CollectionPageActivitiesComponent = (props: CollectionPageActivitiesComponentProps) => (
      <ApolloReactComponents.Query<CollectionPageActivitiesQuery, CollectionPageActivitiesQueryVariables> query={CollectionPageActivitiesDocument} {...props} />
    );
    
export type CollectionPageActivitiesProps<TChildProps = {}> = ApolloReactHoc.DataProps<CollectionPageActivitiesQuery, CollectionPageActivitiesQueryVariables> & TChildProps;
export function withCollectionPageActivities<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CollectionPageActivitiesQuery,
  CollectionPageActivitiesQueryVariables,
  CollectionPageActivitiesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CollectionPageActivitiesQuery, CollectionPageActivitiesQueryVariables, CollectionPageActivitiesProps<TChildProps>>(CollectionPageActivitiesDocument, {
      alias: 'collectionPageActivities',
      ...operationOptions
    });
};

/**
 * __useCollectionPageActivitiesQuery__
 *
 * To run a query within a React component, call `useCollectionPageActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionPageActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionPageActivitiesQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *      limit: // value for 'limit'
 *      after: // value for 'after'
 *      before: // value for 'before'
 *   },
 * });
 */
export function useCollectionPageActivitiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CollectionPageActivitiesQuery, CollectionPageActivitiesQueryVariables>) {
        return ApolloReactHooks.useQuery<CollectionPageActivitiesQuery, CollectionPageActivitiesQueryVariables>(CollectionPageActivitiesDocument, baseOptions);
      }
export function useCollectionPageActivitiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CollectionPageActivitiesQuery, CollectionPageActivitiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CollectionPageActivitiesQuery, CollectionPageActivitiesQueryVariables>(CollectionPageActivitiesDocument, baseOptions);
        }
export type CollectionPageActivitiesQueryHookResult = ReturnType<typeof useCollectionPageActivitiesQuery>;
export type CollectionPageActivitiesLazyQueryHookResult = ReturnType<typeof useCollectionPageActivitiesLazyQuery>;
export type CollectionPageActivitiesQueryResult = ApolloReactCommon.QueryResult<CollectionPageActivitiesQuery, CollectionPageActivitiesQueryVariables>;


export interface CollectionPageActivitiesQueryOperation {
  operationName: 'collectionPageActivities'
  result: CollectionPageActivitiesQuery
  variables: CollectionPageActivitiesQueryVariables
  type: 'query'
}
