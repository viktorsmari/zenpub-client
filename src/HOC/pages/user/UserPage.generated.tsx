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
  & Pick<Types.User, 'id'>
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
  ...HeroUserUserData
}
    ${HeroUserUserDataFragmentDoc}`;
