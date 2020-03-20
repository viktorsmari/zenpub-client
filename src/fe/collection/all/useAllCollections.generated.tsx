import * as Types from '../../../graphql/types.generated';

import { CollectionPreviewFragment } from '../../../HOC/modules/previews/collection/CollectionPreview.generated';
import gql from 'graphql-tag';
import { CollectionPreviewFragmentDoc } from '../../../HOC/modules/previews/collection/CollectionPreview.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export type AllCollectionsQueryVariables = {};


export type AllCollectionsQuery = (
  { __typename: 'RootQueryType' }
  & { collections: (
    { __typename: 'CollectionsPage' }
    & Pick<Types.CollectionsPage, 'totalCount'>
    & { edges: Array<Types.Maybe<(
      { __typename: 'Collection' }
      & CollectionPreviewFragment
    )>> }
  ) }
);


export const AllCollectionsDocument = gql`
    query allCollections {
  collections {
    edges {
      ...CollectionPreview
    }
    totalCount
  }
}
    ${CollectionPreviewFragmentDoc}`;
export type AllCollectionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllCollectionsQuery, AllCollectionsQueryVariables>, 'query'>;

    export const AllCollectionsComponent = (props: AllCollectionsComponentProps) => (
      <ApolloReactComponents.Query<AllCollectionsQuery, AllCollectionsQueryVariables> query={AllCollectionsDocument} {...props} />
    );
    
export type AllCollectionsProps<TChildProps = {}> = ApolloReactHoc.DataProps<AllCollectionsQuery, AllCollectionsQueryVariables> & TChildProps;
export function withAllCollections<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllCollectionsQuery,
  AllCollectionsQueryVariables,
  AllCollectionsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, AllCollectionsQuery, AllCollectionsQueryVariables, AllCollectionsProps<TChildProps>>(AllCollectionsDocument, {
      alias: 'allCollections',
      ...operationOptions
    });
};

/**
 * __useAllCollectionsQuery__
 *
 * To run a query within a React component, call `useAllCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCollectionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCollectionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllCollectionsQuery, AllCollectionsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllCollectionsQuery, AllCollectionsQueryVariables>(AllCollectionsDocument, baseOptions);
      }
export function useAllCollectionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllCollectionsQuery, AllCollectionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllCollectionsQuery, AllCollectionsQueryVariables>(AllCollectionsDocument, baseOptions);
        }
export type AllCollectionsQueryHookResult = ReturnType<typeof useAllCollectionsQuery>;
export type AllCollectionsLazyQueryHookResult = ReturnType<typeof useAllCollectionsLazyQuery>;
export type AllCollectionsQueryResult = ApolloReactCommon.QueryResult<AllCollectionsQuery, AllCollectionsQueryVariables>;


export interface AllCollectionsQueryOperation {
  operationName: 'allCollections'
  result: AllCollectionsQuery
  variables: AllCollectionsQueryVariables
  type: 'query'
}
