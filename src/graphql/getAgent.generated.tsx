import * as Types from './types.generated';

import { BasicCommentWithInReplyToFragment } from './fragments/basicComment.generated';
import { BasicCollectionFragment } from './fragments/basicCollection.generated';
import { BasicCommunityFragment } from './fragments/basicCommunity.generated';
import { BasicResourceFragment } from './fragments/basicResource.generated';
import { BasicUserFragment } from './fragments/basicUser.generated';
import gql from 'graphql-tag';
import { BasicUserFragmentDoc } from './fragments/basicUser.generated';
import { BasicResourceFragmentDoc } from './fragments/basicResource.generated';
import { BasicCommunityFragmentDoc } from './fragments/basicCommunity.generated';
import { BasicCollectionFragmentDoc } from './fragments/basicCollection.generated';
import { BasicCommentWithInReplyToFragmentDoc } from './fragments/basicComment.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';






export type GetAgentQueryQueryVariables = {
  userId: Types.Scalars['String'],
  limitComm?: Types.Maybe<Types.Scalars['Int']>,
  endComm?: Types.Maybe<Array<Types.Maybe<Types.Scalars['Cursor']>>>,
  limitColl?: Types.Maybe<Types.Scalars['Int']>,
  endColl?: Types.Maybe<Array<Types.Maybe<Types.Scalars['Cursor']>>>,
  limitTimeline?: Types.Maybe<Types.Scalars['Int']>,
  endTimeline?: Types.Maybe<Array<Types.Maybe<Types.Scalars['Cursor']>>>
};


export type GetAgentQueryQuery = (
  { __typename: 'RootQueryType' }
  & { user: Types.Maybe<(
    { __typename: 'User' }
    & { outbox: Types.Maybe<(
      { __typename: 'ActivitiesPage' }
      & { pageInfo: (
        { __typename: 'PageInfo' }
        & Pick<Types.PageInfo, 'startCursor' | 'endCursor'>
      ), edges: Array<(
        { __typename: 'Activity' }
        & Pick<Types.Activity, 'id' | 'canonicalUrl' | 'verb' | 'isLocal' | 'isPublic' | 'createdAt'>
        & { user: Types.Maybe<(
          { __typename: 'User' }
          & BasicUserFragment
        )>, context: Types.Maybe<(
          { __typename: 'Collection' }
          & BasicCollectionFragment
        ) | (
          { __typename: 'Comment' }
          & BasicCommentWithInReplyToFragment
        ) | (
          { __typename: 'Community' }
          & BasicCommunityFragment
        ) | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Like' } | (
          { __typename: 'Resource' }
          & BasicResourceFragment
        ) | { __typename: 'User' }> }
      )> }
    )>, followedCommunities: Types.Maybe<(
      { __typename: 'FollowedCommunitiesPage' }
      & { pageInfo: (
        { __typename: 'PageInfo' }
        & Pick<Types.PageInfo, 'startCursor' | 'endCursor'>
      ), edges: Array<(
        { __typename: 'FollowedCommunity' }
        & { follow: (
          { __typename: 'Follow' }
          & Pick<Types.Follow, 'id' | 'canonicalUrl' | 'isLocal' | 'isPublic' | 'createdAt'>
        ), community: (
          { __typename: 'Community' }
          & BasicCommunityFragment
        ) }
      )> }
    )>, followedCollections: Types.Maybe<(
      { __typename: 'FollowedCollectionsPage' }
      & { pageInfo: (
        { __typename: 'PageInfo' }
        & Pick<Types.PageInfo, 'startCursor' | 'endCursor'>
      ), edges: Array<(
        { __typename: 'FollowedCollection' }
        & { follow: (
          { __typename: 'Follow' }
          & Pick<Types.Follow, 'id' | 'canonicalUrl' | 'isLocal' | 'isPublic' | 'createdAt'>
        ), collection: (
          { __typename: 'Collection' }
          & BasicCollectionFragment
        ) }
      )> }
    )> }
    & BasicUserFragment
  )> }
);


export const GetAgentQueryDocument = gql`
    query getAgentQuery($userId: String!, $limitComm: Int, $endComm: [Cursor], $limitColl: Int, $endColl: [Cursor], $limitTimeline: Int, $endTimeline: [Cursor]) {
  user(userId: $userId) {
    ...BasicUser
    outbox(limit: $limitTimeline, after: $endTimeline) {
      pageInfo {
        startCursor
        endCursor
      }
      edges {
        id
        canonicalUrl
        verb
        isLocal
        isPublic
        createdAt
        user {
          ...BasicUser
        }
        context {
          __typename
          ... on Resource {
            ...BasicResource
          }
          ... on Community {
            ...BasicCommunity
          }
          ... on Collection {
            ...BasicCollection
          }
          ... on Comment {
            ...BasicCommentWithInReplyTo
          }
        }
      }
    }
    followedCommunities(limit: $limitComm, after: $endComm) {
      pageInfo {
        startCursor
        endCursor
      }
      edges {
        follow {
          id
          canonicalUrl
          isLocal
          isPublic
          createdAt
        }
        community {
          __typename
          ... on Community {
            ...BasicCommunity
          }
        }
      }
    }
    followedCollections(limit: $limitColl, after: $endColl) {
      pageInfo {
        startCursor
        endCursor
      }
      edges {
        follow {
          id
          canonicalUrl
          isLocal
          isPublic
          createdAt
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
    ${BasicUserFragmentDoc}
${BasicResourceFragmentDoc}
${BasicCommunityFragmentDoc}
${BasicCollectionFragmentDoc}
${BasicCommentWithInReplyToFragmentDoc}`;

/**
 * __useGetAgentQueryQuery__
 *
 * To run a query within a React component, call `useGetAgentQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAgentQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAgentQueryQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      limitComm: // value for 'limitComm'
 *      endComm: // value for 'endComm'
 *      limitColl: // value for 'limitColl'
 *      endColl: // value for 'endColl'
 *      limitTimeline: // value for 'limitTimeline'
 *      endTimeline: // value for 'endTimeline'
 *   },
 * });
 */
export function useGetAgentQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAgentQueryQuery, GetAgentQueryQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAgentQueryQuery, GetAgentQueryQueryVariables>(GetAgentQueryDocument, baseOptions);
      }
export function useGetAgentQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAgentQueryQuery, GetAgentQueryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAgentQueryQuery, GetAgentQueryQueryVariables>(GetAgentQueryDocument, baseOptions);
        }
export type GetAgentQueryQueryHookResult = ReturnType<typeof useGetAgentQueryQuery>;
export type GetAgentQueryLazyQueryHookResult = ReturnType<typeof useGetAgentQueryLazyQuery>;
export type GetAgentQueryQueryResult = ApolloReactCommon.QueryResult<GetAgentQueryQuery, GetAgentQueryQueryVariables>;


export interface GetAgentQueryQueryOperation {
  operationName: 'getAgentQuery'
  result: GetAgentQueryQuery
  variables: GetAgentQueryQueryVariables
  type: 'query'
}
export const GetAgentQueryQueryName:GetAgentQueryQueryOperation['operationName'] = 'getAgentQuery'
