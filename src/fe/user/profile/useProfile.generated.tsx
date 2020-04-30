import * as Types from '../../../graphql/types.generated';

import { SettingsPageMeFragment } from '../../../HOC/pages/settings/SettingsPage.generated';
import gql from 'graphql-tag';
import { SettingsPageMeFragmentDoc } from '../../../HOC/pages/settings/SettingsPage.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type MyProfileQueryVariables = {};


export type MyProfileQuery = (
  { __typename: 'RootQueryType' }
  & { me: Types.Maybe<(
    { __typename: 'Me' }
    & SettingsPageMeFragment
  )> }
);

export type UpdateMyProfileMutationVariables = {
  profile: Types.UpdateProfileInput,
  icon?: Types.Maybe<Types.UploadInput>,
  image?: Types.Maybe<Types.UploadInput>
};


export type UpdateMyProfileMutation = (
  { __typename: 'RootMutationType' }
  & { updateProfile: Types.Maybe<(
    { __typename: 'Me' }
    & SettingsPageMeFragment
  )> }
);


export const MyProfileDocument = gql`
    query myProfile {
  me {
    ...SettingsPageMe
  }
}
    ${SettingsPageMeFragmentDoc}`;

/**
 * __useMyProfileQuery__
 *
 * To run a query within a React component, call `useMyProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyProfileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyProfileQuery, MyProfileQueryVariables>) {
        return ApolloReactHooks.useQuery<MyProfileQuery, MyProfileQueryVariables>(MyProfileDocument, baseOptions);
      }
export function useMyProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyProfileQuery, MyProfileQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MyProfileQuery, MyProfileQueryVariables>(MyProfileDocument, baseOptions);
        }
export type MyProfileQueryHookResult = ReturnType<typeof useMyProfileQuery>;
export type MyProfileLazyQueryHookResult = ReturnType<typeof useMyProfileLazyQuery>;
export type MyProfileQueryResult = ApolloReactCommon.QueryResult<MyProfileQuery, MyProfileQueryVariables>;
export const UpdateMyProfileDocument = gql`
    mutation updateMyProfile($profile: UpdateProfileInput!, $icon: UploadInput, $image: UploadInput) {
  updateProfile(profile: $profile, icon: $icon, image: $image) {
    ...SettingsPageMe
  }
}
    ${SettingsPageMeFragmentDoc}`;
export type UpdateMyProfileMutationFn = ApolloReactCommon.MutationFunction<UpdateMyProfileMutation, UpdateMyProfileMutationVariables>;

/**
 * __useUpdateMyProfileMutation__
 *
 * To run a mutation, you first call `useUpdateMyProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMyProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMyProfileMutation, { data, loading, error }] = useUpdateMyProfileMutation({
 *   variables: {
 *      profile: // value for 'profile'
 *      icon: // value for 'icon'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useUpdateMyProfileMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateMyProfileMutation, UpdateMyProfileMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateMyProfileMutation, UpdateMyProfileMutationVariables>(UpdateMyProfileDocument, baseOptions);
      }
export type UpdateMyProfileMutationHookResult = ReturnType<typeof useUpdateMyProfileMutation>;
export type UpdateMyProfileMutationResult = ApolloReactCommon.MutationResult<UpdateMyProfileMutation>;
export type UpdateMyProfileMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateMyProfileMutation, UpdateMyProfileMutationVariables>;


export interface MyProfileQueryOperation {
  operationName: 'myProfile'
  result: MyProfileQuery
  variables: MyProfileQueryVariables
  type: 'query'
}
export const MyProfileQueryName:MyProfileQueryOperation['operationName'] = 'myProfile'

export const MyProfileQueryRefetch = (
  variables:MyProfileQueryVariables, 
  context?:any
)=>({
  query:MyProfileDocument,
  variables,
  context
})
      


export interface UpdateMyProfileMutationOperation {
  operationName: 'updateMyProfile'
  result: UpdateMyProfileMutation
  variables: UpdateMyProfileMutationVariables
  type: 'mutation'
}
export const UpdateMyProfileMutationName:UpdateMyProfileMutationOperation['operationName'] = 'updateMyProfile'

export const UpdateMyProfileMutationRefetch = (
  variables:UpdateMyProfileMutationVariables, 
  context?:any
)=>({
  query:UpdateMyProfileDocument,
  variables,
  context
})
      
