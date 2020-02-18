import * as Types from '../../../../graphql/types.generated';

import { HeroCommunityDataFragment } from '../../../../HOC/modules/HeroCommunity/getHeroCommunity.generated';
import gql from 'graphql-tag';
import { HeroCommunityDataFragmentDoc } from '../../../../HOC/modules/HeroCommunity/getHeroCommunity.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export type CommunityPageQueryVariables = {
  communityId: Types.Scalars['String']
};


export type CommunityPageQuery = (
  { __typename: 'RootQueryType' }
  & { community: Types.Maybe<(
    { __typename: 'Community' }
    & HeroCommunityDataFragment
  )> }
);

export type CommunityPageCreateThreadMutationVariables = {
  contextId: Types.Scalars['String'],
  comment: Types.CommentInput
};


export type CommunityPageCreateThreadMutation = (
  { __typename: 'RootMutationType' }
  & { createThread: Types.Maybe<(
    { __typename: 'Comment' }
    & { thread: Types.Maybe<(
      { __typename: 'Thread' }
      & Pick<Types.Thread, 'id'>
    )> }
  )> }
);


export const CommunityPageDocument = gql`
    query communityPage($communityId: String!) {
  community(communityId: $communityId) {
    ...HeroCommunityData
  }
}
    ${HeroCommunityDataFragmentDoc}`;
export type CommunityPageComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CommunityPageQuery, CommunityPageQueryVariables>, 'query'> & ({ variables: CommunityPageQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CommunityPageComponent = (props: CommunityPageComponentProps) => (
      <ApolloReactComponents.Query<CommunityPageQuery, CommunityPageQueryVariables> query={CommunityPageDocument} {...props} />
    );
    
export type CommunityPageProps<TChildProps = {}> = ApolloReactHoc.DataProps<CommunityPageQuery, CommunityPageQueryVariables> & TChildProps;
export function withCommunityPage<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CommunityPageQuery,
  CommunityPageQueryVariables,
  CommunityPageProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CommunityPageQuery, CommunityPageQueryVariables, CommunityPageProps<TChildProps>>(CommunityPageDocument, {
      alias: 'communityPage',
      ...operationOptions
    });
};

/**
 * __useCommunityPageQuery__
 *
 * To run a query within a React component, call `useCommunityPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommunityPageQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommunityPageQuery({
 *   variables: {
 *      communityId: // value for 'communityId'
 *   },
 * });
 */
export function useCommunityPageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CommunityPageQuery, CommunityPageQueryVariables>) {
        return ApolloReactHooks.useQuery<CommunityPageQuery, CommunityPageQueryVariables>(CommunityPageDocument, baseOptions);
      }
export function useCommunityPageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CommunityPageQuery, CommunityPageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CommunityPageQuery, CommunityPageQueryVariables>(CommunityPageDocument, baseOptions);
        }
export type CommunityPageQueryHookResult = ReturnType<typeof useCommunityPageQuery>;
export type CommunityPageLazyQueryHookResult = ReturnType<typeof useCommunityPageLazyQuery>;
export type CommunityPageQueryResult = ApolloReactCommon.QueryResult<CommunityPageQuery, CommunityPageQueryVariables>;
export const CommunityPageCreateThreadDocument = gql`
    mutation communityPageCreateThread($contextId: String!, $comment: CommentInput!) {
  createThread(comment: $comment, contextId: $contextId) {
    thread {
      id
    }
  }
}
    `;
export type CommunityPageCreateThreadMutationFn = ApolloReactCommon.MutationFunction<CommunityPageCreateThreadMutation, CommunityPageCreateThreadMutationVariables>;
export type CommunityPageCreateThreadComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CommunityPageCreateThreadMutation, CommunityPageCreateThreadMutationVariables>, 'mutation'>;

    export const CommunityPageCreateThreadComponent = (props: CommunityPageCreateThreadComponentProps) => (
      <ApolloReactComponents.Mutation<CommunityPageCreateThreadMutation, CommunityPageCreateThreadMutationVariables> mutation={CommunityPageCreateThreadDocument} {...props} />
    );
    
export type CommunityPageCreateThreadProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CommunityPageCreateThreadMutation, CommunityPageCreateThreadMutationVariables> & TChildProps;
export function withCommunityPageCreateThread<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CommunityPageCreateThreadMutation,
  CommunityPageCreateThreadMutationVariables,
  CommunityPageCreateThreadProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CommunityPageCreateThreadMutation, CommunityPageCreateThreadMutationVariables, CommunityPageCreateThreadProps<TChildProps>>(CommunityPageCreateThreadDocument, {
      alias: 'communityPageCreateThread',
      ...operationOptions
    });
};

/**
 * __useCommunityPageCreateThreadMutation__
 *
 * To run a mutation, you first call `useCommunityPageCreateThreadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCommunityPageCreateThreadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [communityPageCreateThreadMutation, { data, loading, error }] = useCommunityPageCreateThreadMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useCommunityPageCreateThreadMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CommunityPageCreateThreadMutation, CommunityPageCreateThreadMutationVariables>) {
        return ApolloReactHooks.useMutation<CommunityPageCreateThreadMutation, CommunityPageCreateThreadMutationVariables>(CommunityPageCreateThreadDocument, baseOptions);
      }
export type CommunityPageCreateThreadMutationHookResult = ReturnType<typeof useCommunityPageCreateThreadMutation>;
export type CommunityPageCreateThreadMutationResult = ApolloReactCommon.MutationResult<CommunityPageCreateThreadMutation>;
export type CommunityPageCreateThreadMutationOptions = ApolloReactCommon.BaseMutationOptions<CommunityPageCreateThreadMutation, CommunityPageCreateThreadMutationVariables>;


export interface CommunityPageQueryOperation {
  operationName: 'communityPage'
  result: CommunityPageQuery
  variables: CommunityPageQueryVariables
  type: 'query'
}


export interface CommunityPageCreateThreadMutationOperation {
  operationName: 'communityPageCreateThread'
  result: CommunityPageCreateThreadMutation
  variables: CommunityPageCreateThreadMutationVariables
  type: 'mutation'
}
