import * as Types from '../types.d';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type CreateReplyMutationMutationVariables = {
  id: Types.Scalars['Int'];
  comment: Types.CommentInput;
};

export type CreateReplyMutationMutation = {
  __typename?: 'RootMutationType';
} & {
  createReply: Types.Maybe<
    { __typename?: 'Comment' } & Pick<
      Types.Comment,
      'id' | 'localId' | 'published' | 'content'
    > & {
        replies: Types.Maybe<
          { __typename?: 'CommentRepliesConnection' } & Pick<
            Types.CommentRepliesConnection,
            'totalCount'
          > & {
              edges: Types.Maybe<
                Array<
                  Types.Maybe<
                    { __typename?: 'CommentRepliesEdge' } & {
                      node: Types.Maybe<
                        { __typename?: 'Comment' } & Pick<Types.Comment, 'id'>
                      >;
                    }
                  >
                >
              >;
            }
        >;
        author: Types.Maybe<
          { __typename?: 'User' } & Pick<
            Types.User,
            'icon' | 'localId' | 'id' | 'name'
          >
        >;
      }
  >;
};

export const CreateReplyMutationDocument = gql`
  mutation createReplyMutation($id: Int!, $comment: CommentInput!) {
    createReply(inReplyToLocalId: $id, comment: $comment) {
      id
      localId
      replies {
        totalCount
        edges {
          node {
            id
          }
        }
      }
      published
      author {
        icon
        localId
        id
        name
      }
      content
    }
  }
`;
export type CreateReplyMutationMutationFn = ApolloReactCommon.MutationFunction<
  CreateReplyMutationMutation,
  CreateReplyMutationMutationVariables
>;
export type CreateReplyMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateReplyMutationMutation,
    CreateReplyMutationMutationVariables
  >,
  'mutation'
>;

export const CreateReplyMutationComponent = (
  props: CreateReplyMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    CreateReplyMutationMutation,
    CreateReplyMutationMutationVariables
  >
    mutation={CreateReplyMutationDocument}
    {...props}
  />
);

export type CreateReplyMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  CreateReplyMutationMutation,
  CreateReplyMutationMutationVariables
> &
  TChildProps;
export function withCreateReplyMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateReplyMutationMutation,
    CreateReplyMutationMutationVariables,
    CreateReplyMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateReplyMutationMutation,
    CreateReplyMutationMutationVariables,
    CreateReplyMutationProps<TChildProps>
  >(CreateReplyMutationDocument, {
    alias: 'createReplyMutation',
    ...operationOptions
  });
}

/**
 * __useCreateReplyMutationMutation__
 *
 * To run a mutation, you first call `useCreateReplyMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReplyMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReplyMutationMutation, { data, loading, error }] = useCreateReplyMutationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useCreateReplyMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateReplyMutationMutation,
    CreateReplyMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateReplyMutationMutation,
    CreateReplyMutationMutationVariables
  >(CreateReplyMutationDocument, baseOptions);
}
export type CreateReplyMutationMutationHookResult = ReturnType<
  typeof useCreateReplyMutationMutation
>;
export type CreateReplyMutationMutationResult = ApolloReactCommon.MutationResult<
  CreateReplyMutationMutation
>;
export type CreateReplyMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateReplyMutationMutation,
  CreateReplyMutationMutationVariables
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
