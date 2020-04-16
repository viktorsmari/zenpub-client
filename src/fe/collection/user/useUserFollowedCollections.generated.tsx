import * as Types from '../../../graphql/types.generated';

import { CollectionPreviewFragment } from '../../../HOC/modules/previews/collection/CollectionPreview.generated';
import { FullPageInfoFragment } from '../../../@fragments/misc.generated';
import gql from 'graphql-tag';
import { FullPageInfoFragmentDoc } from '../../../@fragments/misc.generated';
import { CollectionPreviewFragmentDoc } from '../../../HOC/modules/previews/collection/CollectionPreview.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';



export type UserFollowedCollectionsQueryVariables = {
  userId: Types.Scalars['String'],
  limit?: Types.Maybe<Types.Scalars['Int']>,
  before?: Types.Maybe<Array<Types.Maybe<Types.Scalars['Cursor']>>>,
  after?: Types.Maybe<Array<Types.Maybe<Types.Scalars['Cursor']>>>
};


export type UserFollowedCollectionsQuery = (
  { __typename: 'RootQueryType' }
  & { user: Types.Maybe<(
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
        & { follow: (
          { __typename: 'Follow' }
          & Pick<Types.Follow, 'id'>
        ), collection: (
          { __typename: 'Collection' }
          & UserFollowedCollectionFragment
        ) }
      )> }
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
    query userFollowedCollections($userId: String!, $limit: Int, $before: [Cursor], $after: [Cursor]) {
  user(userId: $userId) @connection(key: "userFollowedCollections", filter: ["userId"]) {
    id
    followedCollections(limit: $limit, before: $before, after: $after) {
      totalCount
      pageInfo {
        ...FullPageInfo
      }
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
    ${FullPageInfoFragmentDoc}
${UserFollowedCollectionFragmentDoc}`;

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
export const UserFollowedCollectionsQueryName:UserFollowedCollectionsQueryOperation['operationName'] = 'userFollowedCollections'
