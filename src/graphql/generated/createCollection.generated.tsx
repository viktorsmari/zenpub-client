import * as Types from '../types.d';

import { BasicCollectionFragment } from '../fragments/generated/basicCollection.generated';
import gql from 'graphql-tag';
import { BasicCollectionFragmentDoc } from '../fragments/generated/basicCollection.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type CreateCollectionMutationMutationVariables = {
  communityId: Types.Scalars['Int'];
  collection: Types.CollectionInput;
};

export type CreateCollectionMutationMutation = {
  __typename?: 'RootMutationType';
} & {
  createCollection: Types.Maybe<
    { __typename?: 'Collection' } & BasicCollectionFragment
  >;
};

export const CreateCollectionMutationDocument = gql`
  mutation createCollectionMutation(
    $communityId: Int!
    $collection: CollectionInput!
  ) {
    createCollection(communityLocalId: $communityId, collection: $collection) {
      ...BasicCollection
    }
  }
  ${BasicCollectionFragmentDoc}
`;
export type CreateCollectionMutationMutationFn = ApolloReactCommon.MutationFunction<
  CreateCollectionMutationMutation,
  CreateCollectionMutationMutationVariables
>;
export type CreateCollectionMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateCollectionMutationMutation,
    CreateCollectionMutationMutationVariables
  >,
  'mutation'
>;

export const CreateCollectionMutationComponent = (
  props: CreateCollectionMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    CreateCollectionMutationMutation,
    CreateCollectionMutationMutationVariables
  >
    mutation={CreateCollectionMutationDocument}
    {...props}
  />
);

export type CreateCollectionMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  CreateCollectionMutationMutation,
  CreateCollectionMutationMutationVariables
> &
  TChildProps;
export function withCreateCollectionMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreateCollectionMutationMutation,
    CreateCollectionMutationMutationVariables,
    CreateCollectionMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    CreateCollectionMutationMutation,
    CreateCollectionMutationMutationVariables,
    CreateCollectionMutationProps<TChildProps>
  >(CreateCollectionMutationDocument, {
    alias: 'createCollectionMutation',
    ...operationOptions
  });
}

/**
 * __useCreateCollectionMutationMutation__
 *
 * To run a mutation, you first call `useCreateCollectionMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCollectionMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCollectionMutationMutation, { data, loading, error }] = useCreateCollectionMutationMutation({
 *   variables: {
 *      communityId: // value for 'communityId'
 *      collection: // value for 'collection'
 *   },
 * });
 */
export function useCreateCollectionMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateCollectionMutationMutation,
    CreateCollectionMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateCollectionMutationMutation,
    CreateCollectionMutationMutationVariables
  >(CreateCollectionMutationDocument, baseOptions);
}
export type CreateCollectionMutationMutationHookResult = ReturnType<
  typeof useCreateCollectionMutationMutation
>;
export type CreateCollectionMutationMutationResult = ApolloReactCommon.MutationResult<
  CreateCollectionMutationMutation
>;
export type CreateCollectionMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateCollectionMutationMutation,
  CreateCollectionMutationMutationVariables
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
