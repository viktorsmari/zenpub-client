import * as Types from '../../../graphql/types.generated';

import { HeroCollectionDataFragment } from '../../modules/HeroCollection/HeroCollection.generated';
import gql from 'graphql-tag';
import { HeroCollectionDataFragmentDoc } from '../../modules/HeroCollection/HeroCollection.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export type CollectionPageQueryVariables = {
  collectionId: Types.Scalars['String']
};


export type CollectionPageQuery = (
  { __typename: 'RootQueryType' }
  & { collection: Types.Maybe<(
    { __typename: 'Collection' }
    & Pick<Types.Collection, 'resourceCount'>
    & { community: Types.Maybe<(
      { __typename: 'Community' }
      & Pick<Types.Community, 'id'>
      & { myFollow: Types.Maybe<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
      )> }
    )> }
    & HeroCollectionDataFragment
  )> }
);


export const CollectionPageDocument = gql`
    query collectionPage($collectionId: String!) {
  collection(collectionId: $collectionId) {
    ...HeroCollectionData
    resourceCount
    community {
      id
      myFollow {
        id
      }
    }
  }
}
    ${HeroCollectionDataFragmentDoc}`;
export type CollectionPageComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CollectionPageQuery, CollectionPageQueryVariables>, 'query'> & ({ variables: CollectionPageQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CollectionPageComponent = (props: CollectionPageComponentProps) => (
      <ApolloReactComponents.Query<CollectionPageQuery, CollectionPageQueryVariables> query={CollectionPageDocument} {...props} />
    );
    
export type CollectionPageProps<TChildProps = {}> = ApolloReactHoc.DataProps<CollectionPageQuery, CollectionPageQueryVariables> & TChildProps;
export function withCollectionPage<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CollectionPageQuery,
  CollectionPageQueryVariables,
  CollectionPageProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CollectionPageQuery, CollectionPageQueryVariables, CollectionPageProps<TChildProps>>(CollectionPageDocument, {
      alias: 'collectionPage',
      ...operationOptions
    });
};

/**
 * __useCollectionPageQuery__
 *
 * To run a query within a React component, call `useCollectionPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionPageQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionPageQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useCollectionPageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CollectionPageQuery, CollectionPageQueryVariables>) {
        return ApolloReactHooks.useQuery<CollectionPageQuery, CollectionPageQueryVariables>(CollectionPageDocument, baseOptions);
      }
export function useCollectionPageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CollectionPageQuery, CollectionPageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CollectionPageQuery, CollectionPageQueryVariables>(CollectionPageDocument, baseOptions);
        }
export type CollectionPageQueryHookResult = ReturnType<typeof useCollectionPageQuery>;
export type CollectionPageLazyQueryHookResult = ReturnType<typeof useCollectionPageLazyQuery>;
export type CollectionPageQueryResult = ApolloReactCommon.QueryResult<CollectionPageQuery, CollectionPageQueryVariables>;


export interface CollectionPageQueryOperation {
  operationName: 'collectionPage'
  result: CollectionPageQuery
  variables: CollectionPageQueryVariables
  type: 'query'
}
