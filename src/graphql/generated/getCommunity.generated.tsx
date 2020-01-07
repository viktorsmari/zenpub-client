import * as Types from '../types.generated';

import { BasicCommentWithInReplyToFragment } from '../fragments/generated/basicComment.generated';
import { BasicCollectionFragment } from '../fragments/generated/basicCollection.generated';
import { BasicCommunityFragment } from '../fragments/generated/basicCommunity.generated';
import { BasicResourceFragment } from '../fragments/generated/basicResource.generated';
import { BasicUserFragment } from '../fragments/generated/basicUser.generated';
import gql from 'graphql-tag';
import { BasicUserFragmentDoc } from '../fragments/generated/basicUser.generated';
import { BasicResourceFragmentDoc } from '../fragments/generated/basicResource.generated';
import { BasicCommunityFragmentDoc } from '../fragments/generated/basicCommunity.generated';
import { BasicCollectionFragmentDoc } from '../fragments/generated/basicCollection.generated';
import { BasicCommentWithInReplyToFragmentDoc } from '../fragments/generated/basicComment.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;






export type GetCommunityQueryQueryVariables = {
  communityId: Types.Scalars['String'],
  limit?: Types.Maybe<Types.Scalars['Int']>,
  end?: Types.Maybe<Types.Scalars['String']>
};


export type GetCommunityQueryQuery = (
  { __typename?: 'RootQueryType' }
  & { community: Types.Maybe<(
    { __typename?: 'Community' }
    & Pick<Types.Community, 'id' | 'canonicalUrl' | 'preferredUsername' | 'name' | 'summary' | 'icon' | 'image' | 'createdAt' | 'updatedAt' | 'lastActivity' | 'isLocal' | 'isPublic' | 'isDisabled'>
    & { creator: (
      { __typename?: 'User' }
      & Pick<Types.User, 'id'>
    ), myFollow: Types.Maybe<(
      { __typename?: 'Follow' }
      & Pick<Types.Follow, 'id'>
    )>, outbox: (
      { __typename?: 'ActivitiesEdges' }
      & { pageInfo: Types.Maybe<(
        { __typename?: 'PageInfo' }
        & Pick<Types.PageInfo, 'startCursor' | 'endCursor'>
      )>, edges: Array<Types.Maybe<(
        { __typename?: 'ActivitiesEdge' }
        & { node: (
          { __typename?: 'Activity' }
          & Pick<Types.Activity, 'id' | 'canonicalUrl' | 'verb' | 'isLocal' | 'isPublic' | 'createdAt'>
          & { user: (
            { __typename?: 'User' }
            & BasicUserFragment
          ), context: (
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
          ) }
        ) }
      )>> }
    ), threads: (
      { __typename?: 'ThreadsEdges' }
      & { pageInfo: Types.Maybe<(
        { __typename?: 'PageInfo' }
        & Pick<Types.PageInfo, 'startCursor' | 'endCursor'>
      )>, edges: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'ThreadsEdge' }
        & { node: (
          { __typename?: 'Thread' }
          & Pick<Types.Thread, 'id' | 'canonicalUrl' | 'isLocal' | 'isPublic' | 'isHidden' | 'createdAt' | 'updatedAt' | 'lastActivity'>
          & { context: (
            { __typename: 'Collection' }
            & Pick<Types.Collection, 'id' | 'icon' | 'name'>
          ) | (
            { __typename: 'Community' }
            & Pick<Types.Community, 'id' | 'icon' | 'name'>
          ) | { __typename: 'Flag' } | (
            { __typename: 'Resource' }
            & Pick<Types.Resource, 'id' | 'icon' | 'name'>
          ), myFollow: Types.Maybe<(
            { __typename?: 'Follow' }
            & Pick<Types.Follow, 'id'>
          )>, comments: (
            { __typename?: 'CommentsEdges' }
            & Pick<Types.CommentsEdges, 'totalCount'>
            & { edges: Array<Types.Maybe<(
              { __typename?: 'CommentsEdge' }
              & { node: (
                { __typename?: 'Comment' }
                & BasicCommentWithInReplyToFragment
              ) }
            )>> }
          ) }
        ) }
      )>>> }
    ), followers: (
      { __typename?: 'FollowsEdges' }
      & Pick<Types.FollowsEdges, 'totalCount'>
      & { pageInfo: Types.Maybe<(
        { __typename?: 'PageInfo' }
        & Pick<Types.PageInfo, 'startCursor' | 'endCursor'>
      )>, edges: Array<Types.Maybe<(
        { __typename?: 'FollowsEdge' }
        & { node: (
          { __typename?: 'Follow' }
          & Pick<Types.Follow, 'id' | 'canonicalUrl' | 'isLocal' | 'isPublic'>
          & { creator: (
            { __typename?: 'User' }
            & Pick<Types.User, 'id' | 'icon'>
          ) }
        ) }
      )>> }
    ), collections: (
      { __typename?: 'CollectionsEdges' }
      & Pick<Types.CollectionsEdges, 'totalCount'>
      & { pageInfo: Types.Maybe<(
        { __typename?: 'PageInfo' }
        & Pick<Types.PageInfo, 'startCursor' | 'endCursor'>
      )>, edges: Array<Types.Maybe<(
        { __typename?: 'CollectionsEdge' }
        & { node: (
          { __typename?: 'Collection' }
          & Pick<Types.Collection, 'id' | 'canonicalUrl' | 'preferredUsername' | 'name' | 'summary' | 'icon'>
          & { myFollow: Types.Maybe<(
            { __typename?: 'Follow' }
            & Pick<Types.Follow, 'id'>
          )>, likes: (
            { __typename?: 'LikesEdges' }
            & Pick<Types.LikesEdges, 'totalCount'>
          ), followers: (
            { __typename?: 'FollowsEdges' }
            & Pick<Types.FollowsEdges, 'totalCount'>
          ), resources: (
            { __typename?: 'ResourcesEdges' }
            & Pick<Types.ResourcesEdges, 'totalCount'>
          ), threads: (
            { __typename?: 'ThreadsEdges' }
            & Pick<Types.ThreadsEdges, 'totalCount'>
          ) }
        ) }
      )>> }
    ) }
  )> }
);


export const GetCommunityQueryDocument = gql`
    query getCommunityQuery($communityId: String!, $limit: Int, $end: String) {
  community(communityId: $communityId) {
    id
    canonicalUrl
    preferredUsername
    name
    summary
    icon
    image
    createdAt
    creator {
      id
    }
    updatedAt
    lastActivity
    isLocal
    isPublic
    isDisabled
    myFollow {
      id
    }
    outbox(limit: $limit, after: $end) {
      pageInfo {
        startCursor
        endCursor
      }
      edges {
        node {
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
    }
    threads(limit: $limit, after: $end) {
      pageInfo {
        startCursor
        endCursor
      }
      edges {
        node {
          id
          canonicalUrl
          isLocal
          isPublic
          isHidden
          createdAt
          updatedAt
          lastActivity
          context {
            __typename
            ... on Community {
              id
              icon
              name
            }
            ... on Collection {
              id
              icon
              name
            }
            ... on Resource {
              id
              icon
              name
            }
          }
          myFollow {
            id
          }
          comments {
            totalCount
            edges {
              node {
                ...BasicCommentWithInReplyTo
              }
            }
          }
        }
      }
    }
    followers {
      pageInfo {
        startCursor
        endCursor
      }
      totalCount
      edges {
        node {
          id
          canonicalUrl
          isLocal
          isPublic
          creator {
            id
            icon
          }
        }
      }
    }
    collections {
      pageInfo {
        startCursor
        endCursor
      }
      totalCount
      edges {
        node {
          id
          canonicalUrl
          preferredUsername
          name
          summary
          icon
          myFollow {
            id
          }
          likes {
            totalCount
          }
          followers {
            totalCount
          }
          resources {
            totalCount
          }
          threads {
            totalCount
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
export type GetCommunityQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetCommunityQueryQuery, GetCommunityQueryQueryVariables>, 'query'> & ({ variables: GetCommunityQueryQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetCommunityQueryComponent = (props: GetCommunityQueryComponentProps) => (
      <ApolloReactComponents.Query<GetCommunityQueryQuery, GetCommunityQueryQueryVariables> query={GetCommunityQueryDocument} {...props} />
    );
    
export type GetCommunityQueryProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetCommunityQueryQuery, GetCommunityQueryQueryVariables> & TChildProps;
export function withGetCommunityQuery<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetCommunityQueryQuery,
  GetCommunityQueryQueryVariables,
  GetCommunityQueryProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetCommunityQueryQuery, GetCommunityQueryQueryVariables, GetCommunityQueryProps<TChildProps>>(GetCommunityQueryDocument, {
      alias: 'getCommunityQuery',
      ...operationOptions
    });
};

/**
 * __useGetCommunityQueryQuery__
 *
 * To run a query within a React component, call `useGetCommunityQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommunityQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommunityQueryQuery({
 *   variables: {
 *      communityId: // value for 'communityId'
 *      limit: // value for 'limit'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useGetCommunityQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCommunityQueryQuery, GetCommunityQueryQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCommunityQueryQuery, GetCommunityQueryQueryVariables>(GetCommunityQueryDocument, baseOptions);
      }
export function useGetCommunityQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCommunityQueryQuery, GetCommunityQueryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCommunityQueryQuery, GetCommunityQueryQueryVariables>(GetCommunityQueryDocument, baseOptions);
        }
export type GetCommunityQueryQueryHookResult = ReturnType<typeof useGetCommunityQueryQuery>;
export type GetCommunityQueryLazyQueryHookResult = ReturnType<typeof useGetCommunityQueryLazyQuery>;
export type GetCommunityQueryQueryResult = ApolloReactCommon.QueryResult<GetCommunityQueryQuery, GetCommunityQueryQueryVariables>;


export interface GetCommunityQueryQueryOperation {
  operationName: 'getCommunityQuery'
  result: GetCommunityQueryQuery
  variables: GetCommunityQueryQueryVariables
  type: 'query'
}
