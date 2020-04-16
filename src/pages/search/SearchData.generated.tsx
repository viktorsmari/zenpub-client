import * as Types from '../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type SearchHostIndexAndMyFollowingsQueryVariables = {};


export type SearchHostIndexAndMyFollowingsQuery = (
  { __typename: 'RootQueryType' }
  & { instance: Types.Maybe<(
    { __typename: 'Instance' }
    & SearchInstanceFragment
  )>, me: Types.Maybe<(
    { __typename: 'Me' }
    & SearchMeFragment
  )> }
);

export type SearchFollowMutationVariables = {
  url: Types.Scalars['String']
};


export type SearchFollowMutation = (
  { __typename: 'RootMutationType' }
  & { createFollowByUrl: Types.Maybe<(
    { __typename: 'Follow' }
    & Pick<Types.Follow, 'id'>
  )> }
);

export type SearchUnfollowMutationVariables = {
  contextId: Types.Scalars['String']
};


export type SearchUnfollowMutation = (
  { __typename: 'RootMutationType' }
  & { delete: Types.Maybe<{ __typename: 'Collection' } | { __typename: 'Comment' } | { __typename: 'Community' } | { __typename: 'Feature' } | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Like' } | { __typename: 'Resource' } | { __typename: 'Thread' } | { __typename: 'User' }> }
);

export type SearchInstanceFragment = (
  { __typename: 'Instance' }
  & Pick<Types.Instance, 'hostname'>
);

export type SearchMeFragment = (
  { __typename: 'Me' }
  & { user: (
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
    & { collectionFollows: Types.Maybe<(
      { __typename: 'FollowsPage' }
      & { edges: Array<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
        & { context: (
          { __typename: 'Collection' }
          & SearchFollowedCollectionFragment
        ) | { __typename: 'Community' } | { __typename: 'Thread' } | { __typename: 'User' } }
      )> }
    )>, communityFollows: Types.Maybe<(
      { __typename: 'FollowsPage' }
      & { edges: Array<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
        & { context: { __typename: 'Collection' } | (
          { __typename: 'Community' }
          & SearchFollowedCommunityFragment
        ) | { __typename: 'Thread' } | { __typename: 'User' } }
      )> }
    )> }
  ) }
);

export type SearchFollowedCommunityFragment = (
  { __typename: 'Community' }
  & Pick<Types.Community, 'id' | 'canonicalUrl'>
  & { myFollow: Types.Maybe<(
    { __typename: 'Follow' }
    & Pick<Types.Follow, 'id'>
  )> }
);

export type SearchFollowedCollectionFragment = (
  { __typename: 'Collection' }
  & Pick<Types.Collection, 'id' | 'canonicalUrl'>
  & { myFollow: Types.Maybe<(
    { __typename: 'Follow' }
    & Pick<Types.Follow, 'id'>
  )> }
);

export const SearchInstanceFragmentDoc = gql`
    fragment SearchInstance on Instance {
  hostname
}
    `;
export const SearchFollowedCollectionFragmentDoc = gql`
    fragment SearchFollowedCollection on Collection {
  id
  canonicalUrl
  myFollow {
    id
  }
}
    `;
export const SearchFollowedCommunityFragmentDoc = gql`
    fragment SearchFollowedCommunity on Community {
  id
  canonicalUrl
  myFollow {
    id
  }
}
    `;
export const SearchMeFragmentDoc = gql`
    fragment SearchMe on Me {
  user {
    id
    collectionFollows {
      edges {
        id
        context {
          ... on Collection {
            ...SearchFollowedCollection
          }
        }
      }
    }
    communityFollows {
      edges {
        id
        context {
          ... on Community {
            ...SearchFollowedCommunity
          }
        }
      }
    }
  }
}
    ${SearchFollowedCollectionFragmentDoc}
${SearchFollowedCommunityFragmentDoc}`;
export const SearchHostIndexAndMyFollowingsDocument = gql`
    query SearchHostIndexAndMyFollowings {
  instance {
    ...SearchInstance
  }
  me {
    ...SearchMe
  }
}
    ${SearchInstanceFragmentDoc}
${SearchMeFragmentDoc}`;

/**
 * __useSearchHostIndexAndMyFollowingsQuery__
 *
 * To run a query within a React component, call `useSearchHostIndexAndMyFollowingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchHostIndexAndMyFollowingsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchHostIndexAndMyFollowingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSearchHostIndexAndMyFollowingsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchHostIndexAndMyFollowingsQuery, SearchHostIndexAndMyFollowingsQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchHostIndexAndMyFollowingsQuery, SearchHostIndexAndMyFollowingsQueryVariables>(SearchHostIndexAndMyFollowingsDocument, baseOptions);
      }
export function useSearchHostIndexAndMyFollowingsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchHostIndexAndMyFollowingsQuery, SearchHostIndexAndMyFollowingsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchHostIndexAndMyFollowingsQuery, SearchHostIndexAndMyFollowingsQueryVariables>(SearchHostIndexAndMyFollowingsDocument, baseOptions);
        }
export type SearchHostIndexAndMyFollowingsQueryHookResult = ReturnType<typeof useSearchHostIndexAndMyFollowingsQuery>;
export type SearchHostIndexAndMyFollowingsLazyQueryHookResult = ReturnType<typeof useSearchHostIndexAndMyFollowingsLazyQuery>;
export type SearchHostIndexAndMyFollowingsQueryResult = ApolloReactCommon.QueryResult<SearchHostIndexAndMyFollowingsQuery, SearchHostIndexAndMyFollowingsQueryVariables>;
export const SearchFollowDocument = gql`
    mutation searchFollow($url: String!) {
  createFollowByUrl(url: $url) {
    id
  }
}
    `;
export type SearchFollowMutationFn = ApolloReactCommon.MutationFunction<SearchFollowMutation, SearchFollowMutationVariables>;

/**
 * __useSearchFollowMutation__
 *
 * To run a mutation, you first call `useSearchFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSearchFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [searchFollowMutation, { data, loading, error }] = useSearchFollowMutation({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useSearchFollowMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SearchFollowMutation, SearchFollowMutationVariables>) {
        return ApolloReactHooks.useMutation<SearchFollowMutation, SearchFollowMutationVariables>(SearchFollowDocument, baseOptions);
      }
export type SearchFollowMutationHookResult = ReturnType<typeof useSearchFollowMutation>;
export type SearchFollowMutationResult = ApolloReactCommon.MutationResult<SearchFollowMutation>;
export type SearchFollowMutationOptions = ApolloReactCommon.BaseMutationOptions<SearchFollowMutation, SearchFollowMutationVariables>;
export const SearchUnfollowDocument = gql`
    mutation searchUnfollow($contextId: String!) {
  delete(contextId: $contextId) {
    __typename
  }
}
    `;
export type SearchUnfollowMutationFn = ApolloReactCommon.MutationFunction<SearchUnfollowMutation, SearchUnfollowMutationVariables>;

/**
 * __useSearchUnfollowMutation__
 *
 * To run a mutation, you first call `useSearchUnfollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSearchUnfollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [searchUnfollowMutation, { data, loading, error }] = useSearchUnfollowMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *   },
 * });
 */
export function useSearchUnfollowMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SearchUnfollowMutation, SearchUnfollowMutationVariables>) {
        return ApolloReactHooks.useMutation<SearchUnfollowMutation, SearchUnfollowMutationVariables>(SearchUnfollowDocument, baseOptions);
      }
export type SearchUnfollowMutationHookResult = ReturnType<typeof useSearchUnfollowMutation>;
export type SearchUnfollowMutationResult = ApolloReactCommon.MutationResult<SearchUnfollowMutation>;
export type SearchUnfollowMutationOptions = ApolloReactCommon.BaseMutationOptions<SearchUnfollowMutation, SearchUnfollowMutationVariables>;


export interface SearchHostIndexAndMyFollowingsQueryOperation {
  operationName: 'SearchHostIndexAndMyFollowings'
  result: SearchHostIndexAndMyFollowingsQuery
  variables: SearchHostIndexAndMyFollowingsQueryVariables
  type: 'query'
}
export const SearchHostIndexAndMyFollowingsQueryName:SearchHostIndexAndMyFollowingsQueryOperation['operationName'] = 'SearchHostIndexAndMyFollowings'


export interface SearchFollowMutationOperation {
  operationName: 'searchFollow'
  result: SearchFollowMutation
  variables: SearchFollowMutationVariables
  type: 'mutation'
}
export const SearchFollowMutationName:SearchFollowMutationOperation['operationName'] = 'searchFollow'


export interface SearchUnfollowMutationOperation {
  operationName: 'searchUnfollow'
  result: SearchUnfollowMutation
  variables: SearchUnfollowMutationVariables
  type: 'mutation'
}
export const SearchUnfollowMutationName:SearchUnfollowMutationOperation['operationName'] = 'searchUnfollow'
