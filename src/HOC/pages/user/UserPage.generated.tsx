import * as Types from '../../../graphql/types.generated';

import { HeroUserUserDataFragment } from '../../modules/HeroUser/HeroUser.generated';
import gql from 'graphql-tag';
import { HeroUserUserDataFragmentDoc } from '../../modules/HeroUser/HeroUser.generated';


export type UserPageActivitiesFragment = (
  { __typename: 'Activity' }
  & Pick<Types.Activity, 'id'>
);

export type UserPageUserDataFragment = (
  { __typename: 'User' }
  & Pick<Types.User, 'id' | 'website' | 'name'>
  & { followedCollections: Types.Maybe<(
    { __typename: 'FollowedCollectionsPage' }
    & Pick<Types.FollowedCollectionsPage, 'totalCount'>
  )>, followedCommunities: Types.Maybe<(
    { __typename: 'FollowedCommunitiesPage' }
    & Pick<Types.FollowedCommunitiesPage, 'totalCount'>
  )>, followedUsers: Types.Maybe<(
    { __typename: 'FollowedUsersPage' }
    & Pick<Types.FollowedUsersPage, 'totalCount'>
  )>, outbox: Types.Maybe<(
    { __typename: 'ActivitiesPage' }
    & Pick<Types.ActivitiesPage, 'totalCount'>
  )> }
  & HeroUserUserDataFragment
);

export const UserPageActivitiesFragmentDoc = gql`
    fragment UserPageActivities on Activity {
  id
}
    `;
export const UserPageUserDataFragmentDoc = gql`
    fragment UserPageUserData on User {
  id
  followedCollections {
    totalCount
  }
  followedCommunities {
    totalCount
  }
  followedUsers {
    totalCount
  }
  outbox {
    totalCount
  }
  website
  name
  ...HeroUserUserData
}
    ${HeroUserUserDataFragmentDoc}`;
