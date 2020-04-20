import * as Types from '../../../../graphql/types.generated';

import { ActivityPreviewFragment } from '../../../../HOC/modules/previews/activity/ActivityPreview.generated';
import { FullPageInfoFragment } from '../../../../@fragments/misc.generated';
import gql from 'graphql-tag';
import { FullPageInfoFragmentDoc } from '../../../../@fragments/misc.generated';
import { ActivityPreviewFragmentDoc } from '../../../../HOC/modules/previews/activity/ActivityPreview.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';



export type MyOutboxActivitiesQueryVariables = {
  after?: Types.Maybe<Array<Types.Maybe<Types.Scalars['Cursor']>>>,
  before?: Types.Maybe<Array<Types.Maybe<Types.Scalars['Cursor']>>>,
  limit?: Types.Maybe<Types.Scalars['Int']>
};


export type MyOutboxActivitiesQuery = (
  { __typename: 'RootQueryType' }
  & { me: Types.Maybe<(
    { __typename: 'Me' }
    & { user: (
      { __typename: 'User' }
      & Pick<Types.User, 'id'>
      & { outbox: Types.Maybe<(
        { __typename: 'ActivitiesPage' }
        & Pick<Types.ActivitiesPage, 'totalCount'>
        & { pageInfo: (
          { __typename: 'PageInfo' }
          & FullPageInfoFragment
        ), edges: Array<(
          { __typename: 'Activity' }
          & MyOutboxActivityFragment
        )> }
      )> }
    ) }
  )> }
);

export type MyOutboxActivityFragment = (
  { __typename: 'Activity' }
  & ActivityPreviewFragment
);

export const MyOutboxActivityFragmentDoc = gql`
    fragment MyOutboxActivity on Activity {
  ...ActivityPreview
}
    ${ActivityPreviewFragmentDoc}`;
export const MyOutboxActivitiesDocument = gql`
    query myOutboxActivities($after: [Cursor], $before: [Cursor], $limit: Int) {
  me @connection(key: "myOutboxActivities") {
    user {
      id
      outbox(after: $after, before: $before, limit: $limit) {
        totalCount
        pageInfo {
          ...FullPageInfo
        }
        edges {
          ...MyOutboxActivity
        }
      }
    }
  }
}
    ${FullPageInfoFragmentDoc}
${MyOutboxActivityFragmentDoc}`;

/**
 * __useMyOutboxActivitiesQuery__
 *
 * To run a query within a React component, call `useMyOutboxActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyOutboxActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyOutboxActivitiesQuery({
 *   variables: {
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useMyOutboxActivitiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyOutboxActivitiesQuery, MyOutboxActivitiesQueryVariables>) {
        return ApolloReactHooks.useQuery<MyOutboxActivitiesQuery, MyOutboxActivitiesQueryVariables>(MyOutboxActivitiesDocument, baseOptions);
      }
export function useMyOutboxActivitiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyOutboxActivitiesQuery, MyOutboxActivitiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MyOutboxActivitiesQuery, MyOutboxActivitiesQueryVariables>(MyOutboxActivitiesDocument, baseOptions);
        }
export type MyOutboxActivitiesQueryHookResult = ReturnType<typeof useMyOutboxActivitiesQuery>;
export type MyOutboxActivitiesLazyQueryHookResult = ReturnType<typeof useMyOutboxActivitiesLazyQuery>;
export type MyOutboxActivitiesQueryResult = ApolloReactCommon.QueryResult<MyOutboxActivitiesQuery, MyOutboxActivitiesQueryVariables>;


export interface MyOutboxActivitiesQueryOperation {
  operationName: 'myOutboxActivities'
  result: MyOutboxActivitiesQuery
  variables: MyOutboxActivitiesQueryVariables
  type: 'query'
}
export const MyOutboxActivitiesQueryName:MyOutboxActivitiesQueryOperation['operationName'] = 'myOutboxActivities'
