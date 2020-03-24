import * as Types from '../../../graphql/types.generated';

import { UserPreviewFragment } from '../../../HOC/modules/previews/user/UserPreview.generated';
import { FullPageInfoFragment } from '../../../@fragments/misc.generated';
import gql from 'graphql-tag';
import { FullPageInfoFragmentDoc } from '../../../@fragments/misc.generated';
import { UserPreviewFragmentDoc } from '../../../HOC/modules/previews/user/UserPreview.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;



export type UserFollowedUsersQueryVariables = {
  userId: Types.Scalars['String'],
  limit?: Types.Maybe<Types.Scalars['Int']>,
  before?: Types.Maybe<Array<Types.Maybe<Types.Scalars['Cursor']>>>,
  after?: Types.Maybe<Array<Types.Maybe<Types.Scalars['Cursor']>>>
};


export type UserFollowedUsersQuery = (
  { __typename: 'RootQueryType' }
  & { user: Types.Maybe<(
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
    & { followedUsers: Types.Maybe<(
      { __typename: 'FollowedUsersPage' }
      & Pick<Types.FollowedUsersPage, 'totalCount'>
      & { pageInfo: (
        { __typename: 'PageInfo' }
        & FullPageInfoFragment
      ), edges: Array<(
        { __typename: 'FollowedUser' }
        & { follow: (
          { __typename: 'Follow' }
          & Pick<Types.Follow, 'id'>
        ), user: (
          { __typename: 'User' }
          & UserFollowedUserFragment
        ) }
      )> }
    )> }
  )> }
);

export type UserFollowedUserFragment = (
  { __typename: 'User' }
  & UserPreviewFragment
);

export const UserFollowedUserFragmentDoc = gql`
    fragment UserFollowedUser on User {
  ...UserPreview
}
    ${UserPreviewFragmentDoc}`;
export const UserFollowedUsersDocument = gql`
    query UserFollowedUsers($userId: String!, $limit: Int, $before: [Cursor], $after: [Cursor]) {
  user(userId: $userId) {
    id
    followedUsers(limit: $limit, before: $before, after: $after) {
      totalCount
      pageInfo {
        ...FullPageInfo
      }
      edges {
        follow {
          id
        }
        user {
          ...UserFollowedUser
        }
      }
    }
  }
}
    ${FullPageInfoFragmentDoc}
${UserFollowedUserFragmentDoc}`;
export type UserFollowedUsersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UserFollowedUsersQuery, UserFollowedUsersQueryVariables>, 'query'> & ({ variables: UserFollowedUsersQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const UserFollowedUsersComponent = (props: UserFollowedUsersComponentProps) => (
      <ApolloReactComponents.Query<UserFollowedUsersQuery, UserFollowedUsersQueryVariables> query={UserFollowedUsersDocument} {...props} />
    );
    
export type UserFollowedUsersProps<TChildProps = {}> = ApolloReactHoc.DataProps<UserFollowedUsersQuery, UserFollowedUsersQueryVariables> & TChildProps;
export function withUserFollowedUsers<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserFollowedUsersQuery,
  UserFollowedUsersQueryVariables,
  UserFollowedUsersProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, UserFollowedUsersQuery, UserFollowedUsersQueryVariables, UserFollowedUsersProps<TChildProps>>(UserFollowedUsersDocument, {
      alias: 'userFollowedUsers',
      ...operationOptions
    });
};

/**
 * __useUserFollowedUsersQuery__
 *
 * To run a query within a React component, call `useUserFollowedUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserFollowedUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserFollowedUsersQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      limit: // value for 'limit'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useUserFollowedUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserFollowedUsersQuery, UserFollowedUsersQueryVariables>) {
        return ApolloReactHooks.useQuery<UserFollowedUsersQuery, UserFollowedUsersQueryVariables>(UserFollowedUsersDocument, baseOptions);
      }
export function useUserFollowedUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserFollowedUsersQuery, UserFollowedUsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserFollowedUsersQuery, UserFollowedUsersQueryVariables>(UserFollowedUsersDocument, baseOptions);
        }
export type UserFollowedUsersQueryHookResult = ReturnType<typeof useUserFollowedUsersQuery>;
export type UserFollowedUsersLazyQueryHookResult = ReturnType<typeof useUserFollowedUsersLazyQuery>;
export type UserFollowedUsersQueryResult = ApolloReactCommon.QueryResult<UserFollowedUsersQuery, UserFollowedUsersQueryVariables>;


export interface UserFollowedUsersQueryOperation {
  operationName: 'UserFollowedUsers'
  result: UserFollowedUsersQuery
  variables: UserFollowedUsersQueryVariables
  type: 'query'
}
