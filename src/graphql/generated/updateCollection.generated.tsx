import * as Types from '../types.d';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type UpdateCollectionMutationMutationVariables = {
  collectionId: Types.Scalars['Int'];
  collection: Types.CollectionInput;
};

export type UpdateCollectionMutationMutation = {
  __typename?: 'RootMutationType';
} & {
  updateCollection: Types.Maybe<
    { __typename?: 'Collection' } & Pick<
      Types.Collection,
      | 'id'
      | 'localId'
      | 'name'
      | 'summary'
      | 'content'
      | 'preferredUsername'
      | 'primaryLanguage'
      | 'icon'
      | 'published'
      | 'updated'
    > & {
        resources: Types.Maybe<
          { __typename?: 'CollectionResourcesConnection' } & Pick<
            Types.CollectionResourcesConnection,
            'totalCount'
          >
        >;
      }
  >;
};

export const UpdateCollectionMutationDocument = gql`
  mutation updateCollectionMutation(
    $collectionId: Int!
    $collection: CollectionInput!
  ) {
    updateCollection(
      collectionLocalId: $collectionId
      collection: $collection
    ) {
      id
      localId
      name
      summary
      content
      preferredUsername
      primaryLanguage
      icon
      published
      updated
      resources {
        totalCount
      }
    }
  }
`;
export type UpdateCollectionMutationMutationFn = ApolloReactCommon.MutationFunction<
  UpdateCollectionMutationMutation,
  UpdateCollectionMutationMutationVariables
>;
export type UpdateCollectionMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateCollectionMutationMutation,
    UpdateCollectionMutationMutationVariables
  >,
  'mutation'
>;

export const UpdateCollectionMutationComponent = (
  props: UpdateCollectionMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateCollectionMutationMutation,
    UpdateCollectionMutationMutationVariables
  >
    mutation={UpdateCollectionMutationDocument}
    {...props}
  />
);

export type UpdateCollectionMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  UpdateCollectionMutationMutation,
  UpdateCollectionMutationMutationVariables
> &
  TChildProps;
export function withUpdateCollectionMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateCollectionMutationMutation,
    UpdateCollectionMutationMutationVariables,
    UpdateCollectionMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateCollectionMutationMutation,
    UpdateCollectionMutationMutationVariables,
    UpdateCollectionMutationProps<TChildProps>
  >(UpdateCollectionMutationDocument, {
    alias: 'updateCollectionMutation',
    ...operationOptions
  });
}

/**
 * __useUpdateCollectionMutationMutation__
 *
 * To run a mutation, you first call `useUpdateCollectionMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCollectionMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCollectionMutationMutation, { data, loading, error }] = useUpdateCollectionMutationMutation({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *      collection: // value for 'collection'
 *   },
 * });
 */
export function useUpdateCollectionMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateCollectionMutationMutation,
    UpdateCollectionMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UpdateCollectionMutationMutation,
    UpdateCollectionMutationMutationVariables
  >(UpdateCollectionMutationDocument, baseOptions);
}
export type UpdateCollectionMutationMutationHookResult = ReturnType<
  typeof useUpdateCollectionMutationMutation
>;
export type UpdateCollectionMutationMutationResult = ApolloReactCommon.MutationResult<
  UpdateCollectionMutationMutation
>;
export type UpdateCollectionMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateCollectionMutationMutation,
  UpdateCollectionMutationMutationVariables
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
