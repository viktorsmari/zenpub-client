import * as Types from './types.generated';

import { BasicCollectionFragment } from './fragments/basicCollection.generated';
import gql from 'graphql-tag';
import { BasicCollectionFragmentDoc } from './fragments/basicCollection.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type GetFollowedCollectionsQueryVariables = {
  limit?: Types.Maybe<Types.Scalars['Int']>,
  endColl?: Types.Maybe<Array<Types.Maybe<Types.Scalars['Cursor']>>>
};


export type GetFollowedCollectionsQuery = (
  { __typename: 'RootQueryType' }
  & { me: Types.Maybe<(
    { __typename: 'Me' }
    & { user: (
      { __typename: 'User' }
      & Pick<Types.User, 'id' | 'canonicalUrl'>
      & { followedCollections: Types.Maybe<(
        { __typename: 'FollowedCollectionsPage' }
        & { pageInfo: (
          { __typename: 'PageInfo' }
          & Pick<Types.PageInfo, 'startCursor' | 'endCursor'>
        ), edges: Array<(
          { __typename: 'FollowedCollection' }
          & { follow: (
            { __typename: 'Follow' }
            & Pick<Types.Follow, 'id' | 'canonicalUrl'>
          ), collection: (
            { __typename: 'Collection' }
            & BasicCollectionFragment
          ) }
        )> }
      )> }
    ) }
  )> }
);


export const GetFollowedCollectionsDocument = gql`
    query getFollowedCollections($limit: Int, $endColl: [Cursor]) {
  me {
    user {
      id
      canonicalUrl
      followedCollections(limit: $limit, after: $endColl) {
        pageInfo {
          startCursor
          endCursor
        }
        edges {
          follow {
            id
            canonicalUrl
          }
          collection {
            __typename
            ... on Collection {
              ...BasicCollection
            }
          }
        }
      }
    }
  }
}
    ${BasicCollectionFragmentDoc}`;

/**
 * __useGetFollowedCollectionsQuery__
 *
 * To run a query within a React component, call `useGetFollowedCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFollowedCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFollowedCollectionsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      endColl: // value for 'endColl'
 *   },
 * });
 */
export function useGetFollowedCollectionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetFollowedCollectionsQuery, GetFollowedCollectionsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetFollowedCollectionsQuery, GetFollowedCollectionsQueryVariables>(GetFollowedCollectionsDocument, baseOptions);
      }
export function useGetFollowedCollectionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetFollowedCollectionsQuery, GetFollowedCollectionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetFollowedCollectionsQuery, GetFollowedCollectionsQueryVariables>(GetFollowedCollectionsDocument, baseOptions);
        }
export type GetFollowedCollectionsQueryHookResult = ReturnType<typeof useGetFollowedCollectionsQuery>;
export type GetFollowedCollectionsLazyQueryHookResult = ReturnType<typeof useGetFollowedCollectionsLazyQuery>;
export type GetFollowedCollectionsQueryResult = ApolloReactCommon.QueryResult<GetFollowedCollectionsQuery, GetFollowedCollectionsQueryVariables>;


export interface GetFollowedCollectionsQueryOperation {
  operationName: 'getFollowedCollections'
  result: GetFollowedCollectionsQuery
  variables: GetFollowedCollectionsQueryVariables
  type: 'query'
}
export const GetFollowedCollectionsQueryName:GetFollowedCollectionsQueryOperation['operationName'] = 'getFollowedCollections'
