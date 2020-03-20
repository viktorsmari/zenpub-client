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


export type UserFollowedCollectionsQueryVariables = {
  userId: Types.Scalars['String'],
  limit?: Types.Maybe<Types.Scalars['Int']>,
  before?: Types.Maybe<Types.Scalars['String']>,
  after?: Types.Maybe<Types.Scalars['String']>
};


export type UserFollowedCollectionsQuery = (
  { __typename: 'RootQueryType' }
  & { user: Types.Maybe<(
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
    & { followedCollections: Types.Maybe<(
      { __typename: 'FollowedCollectionsPage' }
      & { edges: Array<Types.Maybe<(
        { __typename: 'FollowedCollection' }
        & { follow: (
          { __typename: 'Follow' }
          & Pick<Types.Follow, 'id'>
        ), collection: (
          { __typename: 'Collection' }
          & UserFollowedCollectionFragment
        ) }
      )>> }
    )> }
  )> }
);

export type UserFollowedCollectionFragment = (
  { __typename: 'Collection' }
  & CollectionPreviewFragment
);

export const UserFollowedCollectionFragmentDoc = gql`
    fragment UserFollowedCollection on Collection {
  ...CollectionPreview
}
    ${CollectionPreviewFragmentDoc}`;
export const UserFollowedCollectionsDocument = gql`
    query userFollowedCollections($userId: String!, $limit: Int, $before: String, $after: String) {
  user(userId: $userId) {
    id
    followedCollections(limit: $limit, before: $before, after: $after) {
      edges {
        follow {
          id
        }
        collection {
          ...UserFollowedCollection
        }
      }
    }
  }
}
    ${UserFollowedCollectionFragmentDoc}`;
export type UserFollowedCollectionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UserFollowedCollectionsQuery, UserFollowedCollectionsQueryVariables>, 'query'> & ({ variables: UserFollowedCollectionsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const UserFollowedCollectionsComponent = (props: UserFollowedCollectionsComponentProps) => (
      <ApolloReactComponents.Query<UserFollowedCollectionsQuery, UserFollowedCollectionsQueryVariables> query={UserFollowedCollectionsDocument} {...props} />
    );
    
export type UserFollowedCollectionsProps<TChildProps = {}> = ApolloReactHoc.DataProps<UserFollowedCollectionsQuery, UserFollowedCollectionsQueryVariables> & TChildProps;
export function withUserFollowedCollections<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserFollowedCollectionsQuery,
  UserFollowedCollectionsQueryVariables,
  UserFollowedCollectionsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, UserFollowedCollectionsQuery, UserFollowedCollectionsQueryVariables, UserFollowedCollectionsProps<TChildProps>>(UserFollowedCollectionsDocument, {
      alias: 'userFollowedCollections',
      ...operationOptions
    });
};

/**
 * __useUserFollowedCollectionsQuery__
 *
 * To run a query within a React component, call `useUserFollowedCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserFollowedCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserFollowedCollectionsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      limit: // value for 'limit'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useUserFollowedCollectionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserFollowedCollectionsQuery, UserFollowedCollectionsQueryVariables>) {
        return ApolloReactHooks.useQuery<UserFollowedCollectionsQuery, UserFollowedCollectionsQueryVariables>(UserFollowedCollectionsDocument, baseOptions);
      }
export function useUserFollowedCollectionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserFollowedCollectionsQuery, UserFollowedCollectionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserFollowedCollectionsQuery, UserFollowedCollectionsQueryVariables>(UserFollowedCollectionsDocument, baseOptions);
        }
export type UserFollowedCollectionsQueryHookResult = ReturnType<typeof useUserFollowedCollectionsQuery>;
export type UserFollowedCollectionsLazyQueryHookResult = ReturnType<typeof useUserFollowedCollectionsLazyQuery>;
export type UserFollowedCollectionsQueryResult = ApolloReactCommon.QueryResult<UserFollowedCollectionsQuery, UserFollowedCollectionsQueryVariables>;


export interface UserFollowedCollectionsQueryOperation {
  operationName: 'userFollowedCollections'
  result: UserFollowedCollectionsQuery
  variables: UserFollowedCollectionsQueryVariables
  type: 'query'
}
