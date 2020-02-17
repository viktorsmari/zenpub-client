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


export type UserPageOutboxQueryVariables = {
  userId: Types.Scalars['String'],
  after?: Types.Maybe<Types.Scalars['String']>,
  before?: Types.Maybe<Types.Scalars['String']>,
  limit?: Types.Maybe<Types.Scalars['Int']>
};


export type UserPageOutboxQuery = (
  { __typename: 'RootQueryType' }
  & { user: Types.Maybe<(
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
    & { outbox: Types.Maybe<(
      { __typename: 'ActivitiesEdges' }
      & Pick<Types.ActivitiesEdges, 'totalCount'>
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


export const UserPageOutboxDocument = gql`
    query userPageOutbox($userId: String!, $after: String, $before: String, $limit: Int) {
  user(userId: $userId) {
    id
    outbox(after: $after, before: $before, limit: $limit) {
      totalCount
      edges {
        node {
          ...ActivityPreviewData
        }
      }
    }
  }
}
    ${ActivityPreviewDataFragmentDoc}`;
export type UserPageOutboxComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UserPageOutboxQuery, UserPageOutboxQueryVariables>, 'query'> & ({ variables: UserPageOutboxQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const UserPageOutboxComponent = (props: UserPageOutboxComponentProps) => (
      <ApolloReactComponents.Query<UserPageOutboxQuery, UserPageOutboxQueryVariables> query={UserPageOutboxDocument} {...props} />
    );
    
export type UserPageOutboxProps<TChildProps = {}> = ApolloReactHoc.DataProps<UserPageOutboxQuery, UserPageOutboxQueryVariables> & TChildProps;
export function withUserPageOutbox<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserPageOutboxQuery,
  UserPageOutboxQueryVariables,
  UserPageOutboxProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, UserPageOutboxQuery, UserPageOutboxQueryVariables, UserPageOutboxProps<TChildProps>>(UserPageOutboxDocument, {
      alias: 'userPageOutbox',
      ...operationOptions
    });
};

/**
 * __useUserPageOutboxQuery__
 *
 * To run a query within a React component, call `useUserPageOutboxQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserPageOutboxQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserPageOutboxQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useUserPageOutboxQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserPageOutboxQuery, UserPageOutboxQueryVariables>) {
        return ApolloReactHooks.useQuery<UserPageOutboxQuery, UserPageOutboxQueryVariables>(UserPageOutboxDocument, baseOptions);
      }
export function useUserPageOutboxLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserPageOutboxQuery, UserPageOutboxQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserPageOutboxQuery, UserPageOutboxQueryVariables>(UserPageOutboxDocument, baseOptions);
        }
export type UserPageOutboxQueryHookResult = ReturnType<typeof useUserPageOutboxQuery>;
export type UserPageOutboxLazyQueryHookResult = ReturnType<typeof useUserPageOutboxLazyQuery>;
export type UserPageOutboxQueryResult = ApolloReactCommon.QueryResult<UserPageOutboxQuery, UserPageOutboxQueryVariables>;


export interface UserPageOutboxQueryOperation {
  operationName: 'userPageOutbox'
  result: UserPageOutboxQuery
  variables: UserPageOutboxQueryVariables
  type: 'query'
}
