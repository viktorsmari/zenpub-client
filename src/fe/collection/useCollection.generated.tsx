import * as Types from '../../graphql/types.generated';

import { CollectionPageDataFragment } from '../../HOC/pages/collection/CollectionPage.generated';
import gql from 'graphql-tag';
import { CollectionPageDataFragmentDoc } from '../../HOC/pages/collection/CollectionPage.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export type CollectionDataQueryVariables = {
  collectionId: Types.Scalars['String']
};


export type CollectionDataQuery = (
  { __typename: 'RootQueryType' }
  & { collection: Types.Maybe<(
    { __typename: 'Collection' }
    & CollectionPageDataFragment
  )> }
);


export const CollectionDataDocument = gql`
    query collectionData($collectionId: String!) {
  collection(collectionId: $collectionId) {
    ...CollectionPageData
  }
}
    ${CollectionPageDataFragmentDoc}`;
export type CollectionDataComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CollectionDataQuery, CollectionDataQueryVariables>, 'query'> & ({ variables: CollectionDataQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CollectionDataComponent = (props: CollectionDataComponentProps) => (
      <ApolloReactComponents.Query<CollectionDataQuery, CollectionDataQueryVariables> query={CollectionDataDocument} {...props} />
    );
    
export type CollectionDataProps<TChildProps = {}> = ApolloReactHoc.DataProps<CollectionDataQuery, CollectionDataQueryVariables> & TChildProps;
export function withCollectionData<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CollectionDataQuery,
  CollectionDataQueryVariables,
  CollectionDataProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CollectionDataQuery, CollectionDataQueryVariables, CollectionDataProps<TChildProps>>(CollectionDataDocument, {
      alias: 'collectionData',
      ...operationOptions
    });
};

/**
 * __useCollectionDataQuery__
 *
 * To run a query within a React component, call `useCollectionDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionDataQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionDataQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useCollectionDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CollectionDataQuery, CollectionDataQueryVariables>) {
        return ApolloReactHooks.useQuery<CollectionDataQuery, CollectionDataQueryVariables>(CollectionDataDocument, baseOptions);
      }
export function useCollectionDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CollectionDataQuery, CollectionDataQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CollectionDataQuery, CollectionDataQueryVariables>(CollectionDataDocument, baseOptions);
        }
export type CollectionDataQueryHookResult = ReturnType<typeof useCollectionDataQuery>;
export type CollectionDataLazyQueryHookResult = ReturnType<typeof useCollectionDataLazyQuery>;
export type CollectionDataQueryResult = ApolloReactCommon.QueryResult<CollectionDataQuery, CollectionDataQueryVariables>;


export interface CollectionDataQueryOperation {
  operationName: 'collectionData'
  result: CollectionDataQuery
  variables: CollectionDataQueryVariables
  type: 'query'
}
