import * as Types from '../types.d';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type DeleteMutationVariables = {
  contextId: Types.Scalars['String'];
};

export type DeleteMutation = { __typename?: 'RootMutationType' } & {
  delete: Types.Maybe<
    | { __typename?: 'Activity' }
    | { __typename?: 'Collection' }
    | { __typename?: 'Comment' }
    | { __typename?: 'Community' }
    | { __typename?: 'Flag' }
    | { __typename?: 'Follow' }
    | { __typename?: 'Like' }
    | { __typename?: 'Resource' }
    | { __typename?: 'Thread' }
    | { __typename?: 'User' }
  >;
};

export const DeleteDocument = gql`
  mutation delete($contextId: String!) {
    delete(contextId: $contextId) {
      __typename
    }
  }
`;
export type DeleteMutationFn = ApolloReactCommon.MutationFunction<
  DeleteMutation,
  DeleteMutationVariables
>;
export type DeleteComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    DeleteMutation,
    DeleteMutationVariables
  >,
  'mutation'
>;

export const DeleteComponent = (props: DeleteComponentProps) => (
  <ApolloReactComponents.Mutation<DeleteMutation, DeleteMutationVariables>
    mutation={DeleteDocument}
    {...props}
  />
);

export type DeleteProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
  DeleteMutation,
  DeleteMutationVariables
> &
  TChildProps;
export function withDelete<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeleteMutation,
    DeleteMutationVariables,
    DeleteProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    DeleteMutation,
    DeleteMutationVariables,
    DeleteProps<TChildProps>
  >(DeleteDocument, {
    alias: 'delete',
    ...operationOptions
  });
}

/**
 * __useDeleteMutation__
 *
 * To run a mutation, you first call `useDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMutation, { data, loading, error }] = useDeleteMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *   },
 * });
 */
export function useDeleteMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    DeleteMutation,
    DeleteMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<DeleteMutation, DeleteMutationVariables>(
    DeleteDocument,
    baseOptions
  );
}
export type DeleteMutationHookResult = ReturnType<typeof useDeleteMutation>;
export type DeleteMutationResult = ApolloReactCommon.MutationResult<
  DeleteMutation
>;
export type DeleteMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteMutation,
  DeleteMutationVariables
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
        name: 'ActivityContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Comment'
          },
          {
            name: 'Community'
          },
          {
            name: 'Resource'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'FlagContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Comment'
          },
          {
            name: 'Community'
          },
          {
            name: 'Resource'
          },
          {
            name: 'User'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'LikeContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Comment'
          },
          {
            name: 'Resource'
          },
          {
            name: 'User'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'ThreadContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Community'
          },
          {
            name: 'Flag'
          },
          {
            name: 'Resource'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'FollowContext',
        possibleTypes: [
          {
            name: 'Collection'
          },
          {
            name: 'Community'
          },
          {
            name: 'Thread'
          },
          {
            name: 'User'
          }
        ]
      },
      {
        kind: 'UNION',
        name: 'DeleteContext',
        possibleTypes: [
          {
            name: 'Activity'
          },
          {
            name: 'Collection'
          },
          {
            name: 'Comment'
          },
          {
            name: 'Community'
          },
          {
            name: 'Flag'
          },
          {
            name: 'Follow'
          },
          {
            name: 'Like'
          },
          {
            name: 'Resource'
          },
          {
            name: 'Thread'
          },
          {
            name: 'User'
          }
        ]
      }
    ]
  }
};

export default result;
