import * as Types from '../types.d';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type CreateThreadMutationMutationVariables = {
  id: Types.Scalars['Int'];
  comment: Types.CommentInput;
};

export type CreateThreadMutationMutation = {
  __typename?: 'RootMutationType';
} & {
  createThread: Types.Maybe<
    { __typename?: 'Comment' } & Pick<
      Types.Comment,
      'id' | 'localId' | 'content'
    > & {
        author: Types.Maybe<
          { __typename?: 'User' } & Pick<Types.User, 'name' | 'icon'>
        >;
        replies: Types.Maybe<
          { __typename?: 'CommentRepliesConnection' } & Pick<
            Types.CommentRepliesConnection,
            'totalCount'
          >
        >;
      }
  >;
};

export const CreateThreadMutationDocument = gql`
  mutation createThreadMutation($id: Int!, $comment: CommentInput!) {
    createThread(contextLocalId: $id, comment: $comment) {
      id
      author {
        name
        icon
      }
      localId
      content
      replies {
        totalCount
      }
    }
  }
`;
export type CreateThreadMutationMutationFn = ApolloReactCommon.MutationFunction<
  CreateThreadMutationMutation,
  CreateThreadMutationMutationVariables
>;
export type CreateThreadMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateThreadMutationMutation,
    CreateThreadMutationMutationVariables
  >,
  'mutation'
>;

export const CreateThreadMutationComponent = (
  props: CreateThreadMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    CreateThreadMutationMutation,
    CreateThreadMutationMutationVariables
  >
    mutation={CreateThreadMutationDocument}
    {...props}
  />
);

export type CreateThreadMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  CreateThreadMutationMutation,
  CreateThreadMutationMutationVariables
> &
  TChildProps;
export function withCreateThreadMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateThreadMutationMutation,
    CreateThreadMutationMutationVariables,
    CreateThreadMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateThreadMutationMutation,
    CreateThreadMutationMutationVariables,
    CreateThreadMutationProps<TChildProps>
  >(CreateThreadMutationDocument, {
    alias: 'createThreadMutation',
    ...operationOptions
  });
}

/**
 * __useCreateThreadMutationMutation__
 *
 * To run a mutation, you first call `useCreateThreadMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateThreadMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createThreadMutationMutation, { data, loading, error }] = useCreateThreadMutationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useCreateThreadMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateThreadMutationMutation,
    CreateThreadMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateThreadMutationMutation,
    CreateThreadMutationMutationVariables
  >(CreateThreadMutationDocument, baseOptions);
}
export type CreateThreadMutationMutationHookResult = ReturnType<
  typeof useCreateThreadMutationMutation
>;
export type CreateThreadMutationMutationResult = ApolloReactCommon.MutationResult<
  CreateThreadMutationMutation
>;
export type CreateThreadMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateThreadMutationMutation,
  CreateThreadMutationMutationVariables
>;

export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}

const result: IntrospectionResultData = {
  __schema: {
    types: [
      {
        kind: 'UNION',
        name: 'CommentContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Community'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'ActivityObject',
        possibleTypes: [
          {
            name: 'Community'
          },
          {
            name: 'Collection'
          },
          {
            name: 'Resource'
          },
          {
            name: 'Comment'
          }
        ]
      }
    ]
  }
};

export default result;
