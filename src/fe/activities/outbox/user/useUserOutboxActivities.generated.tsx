import * as Types from '../../../../graphql/types.generated';

import { ActivityPreviewFragment } from '../../../../HOC/modules/previews/activity/ActivityPreview.generated';
import { UserPageActivitiesFragment } from '../../../../HOC/pages/user/UserPage.generated';
import gql from 'graphql-tag';
import { UserPageActivitiesFragmentDoc } from '../../../../HOC/pages/user/UserPage.generated';
import { ActivityPreviewFragmentDoc } from '../../../../HOC/modules/previews/activity/ActivityPreview.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;



export type UserOutboxActivitiesQueryVariables = {
  userId: Types.Scalars['String'],
  after?: Types.Maybe<Array<Types.Maybe<Types.Scalars['Cursor']>>>,
  before?: Types.Maybe<Array<Types.Maybe<Types.Scalars['Cursor']>>>,
  limit?: Types.Maybe<Types.Scalars['Int']>
};


export type UserOutboxActivitiesQuery = (
  { __typename: 'RootQueryType' }
  & { user: Types.Maybe<(
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
    & { outbox: Types.Maybe<(
      { __typename: 'ActivitiesPage' }
      & Pick<Types.ActivitiesPage, 'totalCount'>
      & { edges: Types.Maybe<Array<Types.Maybe<(
        { __typename: 'Activity' }
        & UserOutboxActivityFragment
      )>>> }
    )> }
  )> }
);

export type UserOutboxActivityFragment = (
  { __typename: 'Activity' }
  & UserPageActivitiesFragment
  & ActivityPreviewFragment
);

export const UserOutboxActivityFragmentDoc = gql`
    fragment UserOutboxActivity on Activity {
  ...UserPageActivities
  ...ActivityPreview
}
    ${UserPageActivitiesFragmentDoc}
${ActivityPreviewFragmentDoc}`;
export const UserOutboxActivitiesDocument = gql`
    query userOutboxActivities($userId: String!, $after: [Cursor], $before: [Cursor], $limit: Int) {
  user(userId: $userId) {
    id
    outbox(after: $after, before: $before, limit: $limit) {
      totalCount
      edges {
        ...UserOutboxActivity
      }
    }
  }
}
    ${UserOutboxActivityFragmentDoc}`;
export type UserOutboxActivitiesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UserOutboxActivitiesQuery, UserOutboxActivitiesQueryVariables>, 'query'> & ({ variables: UserOutboxActivitiesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const UserOutboxActivitiesComponent = (props: UserOutboxActivitiesComponentProps) => (
      <ApolloReactComponents.Query<UserOutboxActivitiesQuery, UserOutboxActivitiesQueryVariables> query={UserOutboxActivitiesDocument} {...props} />
    );
    
export type UserOutboxActivitiesProps<TChildProps = {}> = ApolloReactHoc.DataProps<UserOutboxActivitiesQuery, UserOutboxActivitiesQueryVariables> & TChildProps;
export function withUserOutboxActivities<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserOutboxActivitiesQuery,
  UserOutboxActivitiesQueryVariables,
  UserOutboxActivitiesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, UserOutboxActivitiesQuery, UserOutboxActivitiesQueryVariables, UserOutboxActivitiesProps<TChildProps>>(UserOutboxActivitiesDocument, {
      alias: 'userOutboxActivities',
      ...operationOptions
    });
};

/**
 * __useUserOutboxActivitiesQuery__
 *
 * To run a query within a React component, call `useUserOutboxActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserOutboxActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserOutboxActivitiesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useUserOutboxActivitiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserOutboxActivitiesQuery, UserOutboxActivitiesQueryVariables>) {
        return ApolloReactHooks.useQuery<UserOutboxActivitiesQuery, UserOutboxActivitiesQueryVariables>(UserOutboxActivitiesDocument, baseOptions);
      }
export function useUserOutboxActivitiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserOutboxActivitiesQuery, UserOutboxActivitiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserOutboxActivitiesQuery, UserOutboxActivitiesQueryVariables>(UserOutboxActivitiesDocument, baseOptions);
        }
export type UserOutboxActivitiesQueryHookResult = ReturnType<typeof useUserOutboxActivitiesQuery>;
export type UserOutboxActivitiesLazyQueryHookResult = ReturnType<typeof useUserOutboxActivitiesLazyQuery>;
export type UserOutboxActivitiesQueryResult = ApolloReactCommon.QueryResult<UserOutboxActivitiesQuery, UserOutboxActivitiesQueryVariables>;


export interface UserOutboxActivitiesQueryOperation {
  operationName: 'userOutboxActivities'
  result: UserOutboxActivitiesQuery
  variables: UserOutboxActivitiesQueryVariables
  type: 'query'
}
