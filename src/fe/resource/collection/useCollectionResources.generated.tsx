import * as Types from '../../../graphql/types.generated';

import { CollectionPageResourceFragment } from '../../../HOC/pages/collection/CollectionPage.generated';
import { FullPageInfoFragment } from '../../../@fragments/misc.generated';
import gql from 'graphql-tag';
import { FullPageInfoFragmentDoc } from '../../../@fragments/misc.generated';
import { CollectionPageResourceFragmentDoc } from '../../../HOC/pages/collection/CollectionPage.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;



export type CollectionResourcesQueryVariables = {
  collectionId: Types.Scalars['String'],
  limit?: Types.Maybe<Types.Scalars['Int']>,
  before?: Types.Maybe<Array<Types.Maybe<Types.Scalars['Cursor']>>>,
  after?: Types.Maybe<Array<Types.Maybe<Types.Scalars['Cursor']>>>
};


export type CollectionResourcesQuery = (
  { __typename: 'RootQueryType' }
  & { collection: Types.Maybe<(
    { __typename: 'Collection' }
    & Pick<Types.Collection, 'id'>
    & { resources: Types.Maybe<(
      { __typename: 'ResourcesPage' }
      & Pick<Types.ResourcesPage, 'totalCount'>
      & { pageInfo: Types.Maybe<(
        { __typename: 'PageInfo' }
        & FullPageInfoFragment
      )>, edges: Array<Types.Maybe<(
        { __typename: 'Resource' }
        & CollectionResourceFragment
      )>> }
    )> }
  )> }
);

export type CollectionResourceFragment = (
  { __typename: 'Resource' }
  & CollectionPageResourceFragment
);

export const CollectionResourceFragmentDoc = gql`
    fragment CollectionResource on Resource {
  ...CollectionPageResource
}
    ${CollectionPageResourceFragmentDoc}`;
export const CollectionResourcesDocument = gql`
    query collectionResources($collectionId: String!, $limit: Int, $before: [Cursor], $after: [Cursor]) {
  collection(collectionId: $collectionId) {
    id
    resources(limit: $limit, before: $before, after: $after) {
      totalCount
      pageInfo {
        ...FullPageInfo
      }
      edges {
        ...CollectionResource
      }
    }
  }
}
    ${FullPageInfoFragmentDoc}
${CollectionResourceFragmentDoc}`;
export type CollectionResourcesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CollectionResourcesQuery, CollectionResourcesQueryVariables>, 'query'> & ({ variables: CollectionResourcesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CollectionResourcesComponent = (props: CollectionResourcesComponentProps) => (
      <ApolloReactComponents.Query<CollectionResourcesQuery, CollectionResourcesQueryVariables> query={CollectionResourcesDocument} {...props} />
    );
    
export type CollectionResourcesProps<TChildProps = {}> = ApolloReactHoc.DataProps<CollectionResourcesQuery, CollectionResourcesQueryVariables> & TChildProps;
export function withCollectionResources<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CollectionResourcesQuery,
  CollectionResourcesQueryVariables,
  CollectionResourcesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CollectionResourcesQuery, CollectionResourcesQueryVariables, CollectionResourcesProps<TChildProps>>(CollectionResourcesDocument, {
      alias: 'collectionResources',
      ...operationOptions
    });
};

/**
 * __useCollectionResourcesQuery__
 *
 * To run a query within a React component, call `useCollectionResourcesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionResourcesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionResourcesQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *      limit: // value for 'limit'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useCollectionResourcesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CollectionResourcesQuery, CollectionResourcesQueryVariables>) {
        return ApolloReactHooks.useQuery<CollectionResourcesQuery, CollectionResourcesQueryVariables>(CollectionResourcesDocument, baseOptions);
      }
export function useCollectionResourcesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CollectionResourcesQuery, CollectionResourcesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CollectionResourcesQuery, CollectionResourcesQueryVariables>(CollectionResourcesDocument, baseOptions);
        }
export type CollectionResourcesQueryHookResult = ReturnType<typeof useCollectionResourcesQuery>;
export type CollectionResourcesLazyQueryHookResult = ReturnType<typeof useCollectionResourcesLazyQuery>;
export type CollectionResourcesQueryResult = ApolloReactCommon.QueryResult<CollectionResourcesQuery, CollectionResourcesQueryVariables>;


export interface CollectionResourcesQueryOperation {
  operationName: 'collectionResources'
  result: CollectionResourcesQuery
  variables: CollectionResourcesQueryVariables
  type: 'query'
}
