import * as Types from './types.generated';

import { BasicCommunityFragment } from './fragments/basicCommunity.generated';
import gql from 'graphql-tag';
import { BasicCommunityFragmentDoc } from './fragments/basicCommunity.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type GetFollowedCommunitiesQueryQueryVariables = {
  limit?: Types.Maybe<Types.Scalars['Int']>,
  endComm?: Types.Maybe<Array<Types.Maybe<Types.Scalars['Cursor']>>>
};


export type GetFollowedCommunitiesQueryQuery = (
  { __typename: 'RootQueryType' }
  & { me: Types.Maybe<(
    { __typename: 'Me' }
    & { user: (
      { __typename: 'User' }
      & Pick<Types.User, 'id'>
      & { followedCommunities: Types.Maybe<(
        { __typename: 'FollowedCommunitiesPage' }
        & { pageInfo: (
          { __typename: 'PageInfo' }
          & Pick<Types.PageInfo, 'startCursor' | 'endCursor'>
        ), edges: Array<(
          { __typename: 'FollowedCommunity' }
          & { follow: (
            { __typename: 'Follow' }
            & Pick<Types.Follow, 'id' | 'canonicalUrl'>
          ), community: (
            { __typename: 'Community' }
            & BasicCommunityFragment
          ) }
        )> }
      )> }
    ) }
  )> }
);


export const GetFollowedCommunitiesQueryDocument = gql`
    query getFollowedCommunitiesQuery($limit: Int, $endComm: [Cursor]) {
  me {
    user {
      id
      followedCommunities(limit: $limit, after: $endComm) {
        pageInfo {
          startCursor
          endCursor
        }
        edges {
          follow {
            id
            canonicalUrl
          }
          community {
            __typename
            ... on Community {
              ...BasicCommunity
            }
          }
        }
      }
    }
  }
}
    ${BasicCommunityFragmentDoc}`;

/**
 * __useGetFollowedCommunitiesQueryQuery__
 *
 * To run a query within a React component, call `useGetFollowedCommunitiesQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFollowedCommunitiesQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFollowedCommunitiesQueryQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      endComm: // value for 'endComm'
 *   },
 * });
 */
export function useGetFollowedCommunitiesQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetFollowedCommunitiesQueryQuery, GetFollowedCommunitiesQueryQueryVariables>) {
        return ApolloReactHooks.useQuery<GetFollowedCommunitiesQueryQuery, GetFollowedCommunitiesQueryQueryVariables>(GetFollowedCommunitiesQueryDocument, baseOptions);
      }
export function useGetFollowedCommunitiesQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetFollowedCommunitiesQueryQuery, GetFollowedCommunitiesQueryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetFollowedCommunitiesQueryQuery, GetFollowedCommunitiesQueryQueryVariables>(GetFollowedCommunitiesQueryDocument, baseOptions);
        }
export type GetFollowedCommunitiesQueryQueryHookResult = ReturnType<typeof useGetFollowedCommunitiesQueryQuery>;
export type GetFollowedCommunitiesQueryLazyQueryHookResult = ReturnType<typeof useGetFollowedCommunitiesQueryLazyQuery>;
export type GetFollowedCommunitiesQueryQueryResult = ApolloReactCommon.QueryResult<GetFollowedCommunitiesQueryQuery, GetFollowedCommunitiesQueryQueryVariables>;


export interface GetFollowedCommunitiesQueryQueryOperation {
  operationName: 'getFollowedCommunitiesQuery'
  result: GetFollowedCommunitiesQueryQuery
  variables: GetFollowedCommunitiesQueryQueryVariables
  type: 'query'
}
export const GetFollowedCommunitiesQueryQueryName:GetFollowedCommunitiesQueryQueryOperation['operationName'] = 'getFollowedCommunitiesQuery'
