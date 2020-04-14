import * as Types from '../../../graphql/types.generated';

import { CollectionPreviewFragment } from '../../../HOC/modules/previews/collection/CollectionPreview.generated';
import { FullPageInfoFragment } from '../../../@fragments/misc.generated';
import gql from 'graphql-tag';
import { FullPageInfoFragmentDoc } from '../../../@fragments/misc.generated';
import { CollectionPreviewFragmentDoc } from '../../../HOC/modules/previews/collection/CollectionPreview.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;



export type MyFollowedCollectionsQueryVariables = {};


export type MyFollowedCollectionsQuery = (
  { __typename: 'RootQueryType' }
  & { me: Types.Maybe<(
    { __typename: 'Me' }
    & MyFollowedCollectionsMeDataFragment
  )> }
);

export type MyFollowedCollectionsMeDataFragment = (
  { __typename: 'Me' }
  & { user: (
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
    & { followedCollections: Types.Maybe<(
      { __typename: 'FollowedCollectionsPage' }
      & Pick<Types.FollowedCollectionsPage, 'totalCount'>
      & { pageInfo: (
        { __typename: 'PageInfo' }
        & FullPageInfoFragment
      ), edges: Array<(
        { __typename: 'FollowedCollection' }
        & { collection: (
          { __typename: 'Collection' }
          & CollectionPreviewFragment
        ), follow: (
          { __typename: 'Follow' }
          & Pick<Types.Follow, 'id'>
        ) }
      )> }
    )> }
  ) }
);

export const MyFollowedCollectionsMeDataFragmentDoc = gql`
    fragment MyFollowedCollectionsMeData on Me {
  user {
    id
    followedCollections {
      totalCount
      pageInfo {
        ...FullPageInfo
      }
      edges {
        collection {
          ...CollectionPreview
        }
        follow {
          id
        }
      }
    }
  }
}
    ${FullPageInfoFragmentDoc}
${CollectionPreviewFragmentDoc}`;
export const MyFollowedCollectionsDocument = gql`
    query myFollowedCollections {
  me @connection(key: "myFollowedCollections") {
    ...MyFollowedCollectionsMeData
  }
}
    ${MyFollowedCollectionsMeDataFragmentDoc}`;
export type MyFollowedCollectionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MyFollowedCollectionsQuery, MyFollowedCollectionsQueryVariables>, 'query'>;

    export const MyFollowedCollectionsComponent = (props: MyFollowedCollectionsComponentProps) => (
      <ApolloReactComponents.Query<MyFollowedCollectionsQuery, MyFollowedCollectionsQueryVariables> query={MyFollowedCollectionsDocument} {...props} />
    );
    
export type MyFollowedCollectionsProps<TChildProps = {}> = ApolloReactHoc.DataProps<MyFollowedCollectionsQuery, MyFollowedCollectionsQueryVariables> & TChildProps;
export function withMyFollowedCollections<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MyFollowedCollectionsQuery,
  MyFollowedCollectionsQueryVariables,
  MyFollowedCollectionsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, MyFollowedCollectionsQuery, MyFollowedCollectionsQueryVariables, MyFollowedCollectionsProps<TChildProps>>(MyFollowedCollectionsDocument, {
      alias: 'myFollowedCollections',
      ...operationOptions
    });
};

/**
 * __useMyFollowedCollectionsQuery__
 *
 * To run a query within a React component, call `useMyFollowedCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyFollowedCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyFollowedCollectionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyFollowedCollectionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyFollowedCollectionsQuery, MyFollowedCollectionsQueryVariables>) {
        return ApolloReactHooks.useQuery<MyFollowedCollectionsQuery, MyFollowedCollectionsQueryVariables>(MyFollowedCollectionsDocument, baseOptions);
      }
export function useMyFollowedCollectionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyFollowedCollectionsQuery, MyFollowedCollectionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MyFollowedCollectionsQuery, MyFollowedCollectionsQueryVariables>(MyFollowedCollectionsDocument, baseOptions);
        }
export type MyFollowedCollectionsQueryHookResult = ReturnType<typeof useMyFollowedCollectionsQuery>;
export type MyFollowedCollectionsLazyQueryHookResult = ReturnType<typeof useMyFollowedCollectionsLazyQuery>;
export type MyFollowedCollectionsQueryResult = ApolloReactCommon.QueryResult<MyFollowedCollectionsQuery, MyFollowedCollectionsQueryVariables>;


export interface MyFollowedCollectionsQueryOperation {
  operationName: 'myFollowedCollections'
  result: MyFollowedCollectionsQuery
  variables: MyFollowedCollectionsQueryVariables
  type: 'query'
}
