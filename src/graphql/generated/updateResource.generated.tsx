import * as Types from '../types.d';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type UpdateResourceMutationMutationVariables = {
  resource: Types.ResourceInput;
  resourceId: Types.Scalars['String'];
};

export type UpdateResourceMutationMutation = {
  __typename?: 'RootMutationType';
} & {
  updateResource: Types.Maybe<
    { __typename?: 'Resource' } & Pick<
      Types.Resource,
      | 'id'
      | 'name'
      | 'summary'
      | 'url'
      | 'license'
      | 'icon'
      | 'isLocal'
      | 'isPublic'
      | 'isDisabled'
      | 'createdAt'
      | 'updatedAt'
    >
  >;
};

export const UpdateResourceMutationDocument = gql`
  mutation updateResourceMutation(
    $resource: ResourceInput!
    $resourceId: String!
  ) {
    updateResource(resource: $resource, resourceId: $resourceId) {
      id
      name
      summary
      url
      license
      icon
      isLocal
      isPublic
      isDisabled
      createdAt
      updatedAt
    }
  }
`;
export type UpdateResourceMutationMutationFn = ApolloReactCommon.MutationFunction<
  UpdateResourceMutationMutation,
  UpdateResourceMutationMutationVariables
>;
export type UpdateResourceMutationComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UpdateResourceMutationMutation,
    UpdateResourceMutationMutationVariables
  >,
  'mutation'
>;

export const UpdateResourceMutationComponent = (
  props: UpdateResourceMutationComponentProps
) => (
  <ApolloReactComponents.Mutation<
    UpdateResourceMutationMutation,
    UpdateResourceMutationMutationVariables
  >
    mutation={UpdateResourceMutationDocument}
    {...props}
  />
);

export type UpdateResourceMutationProps<
  TChildProps = {}
> = ApolloReactHoc.MutateProps<
  UpdateResourceMutationMutation,
  UpdateResourceMutationMutationVariables
> &
  TChildProps;
export function withUpdateResourceMutation<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UpdateResourceMutationMutation,
    UpdateResourceMutationMutationVariables,
    UpdateResourceMutationProps<TChildProps>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    UpdateResourceMutationMutation,
    UpdateResourceMutationMutationVariables,
    UpdateResourceMutationProps<TChildProps>
  >(UpdateResourceMutationDocument, {
    alias: 'updateResourceMutation',
    ...operationOptions
  });
}

/**
 * __useUpdateResourceMutationMutation__
 *
 * To run a mutation, you first call `useUpdateResourceMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateResourceMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateResourceMutationMutation, { data, loading, error }] = useUpdateResourceMutationMutation({
 *   variables: {
 *      resource: // value for 'resource'
 *      resourceId: // value for 'resourceId'
 *   },
 * });
 */
export function useUpdateResourceMutationMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateResourceMutationMutation,
    UpdateResourceMutationMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UpdateResourceMutationMutation,
    UpdateResourceMutationMutationVariables
  >(UpdateResourceMutationDocument, baseOptions);
}
export type UpdateResourceMutationMutationHookResult = ReturnType<
  typeof useUpdateResourceMutationMutation
>;
export type UpdateResourceMutationMutationResult = ApolloReactCommon.MutationResult<
  UpdateResourceMutationMutation
>;
export type UpdateResourceMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateResourceMutationMutation,
  UpdateResourceMutationMutationVariables
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
