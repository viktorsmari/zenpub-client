import * as Types from '../types.d';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type UpdateCollectionMutationMutationVariables = {
  collection: Types.CollectionInput;
  collectionId: Types.Scalars['String'];
};

export type UpdateCollectionMutationMutation = {
  __typename?: 'RootMutationType';
} & {
  updateCollection: { __typename?: 'Collection' } & Pick<
    Types.Collection,
    | 'id'
    | 'canonicalUrl'
    | 'preferredUsername'
    | 'name'
    | 'summary'
    | 'icon'
    | 'createdAt'
    | 'updatedAt'
  > & {
      primaryLanguage: Types.Maybe<
        { __typename?: 'Language' } & Pick<
          Types.Language,
          'id' | 'englishName' | 'localName'
        >
      >;
      resources: { __typename?: 'ResourcesEdges' } & Pick<
        Types.ResourcesEdges,
        'totalCount'
      >;
    };
};

export const UpdateCollectionMutationDocument = gql`
  mutation updateCollectionMutation(
    $collection: CollectionInput!
    $collectionId: String!
  ) {
    updateCollection(collection: $collection, collectionId: $collectionId) {
      id
      canonicalUrl
      preferredUsername
      name
      summary
      icon
      createdAt
      updatedAt
      primaryLanguage {
        id
        englishName
        localName
      }
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
 *      collection: // value for 'collection'
 *      collectionId: // value for 'collectionId'
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
            name: 'Country'
          },
          {
            name: 'Flag'
          },
          {
            name: 'Follow'
          },
          {
            name: 'Language'
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
