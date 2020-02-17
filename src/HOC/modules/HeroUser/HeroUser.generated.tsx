import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';

export type HeroUserMeDataFragment = (
  { __typename: 'Me' }
  & Pick<Types.Me, 'isInstanceAdmin'>
  & { user: (
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
  ) }
);

export type HeroUserUserDataFragment = (
  { __typename: 'User' }
  & Pick<Types.User, 'id' | 'image' | 'icon' | 'displayUsername' | 'location' | 'summary' | 'name'>
  & { myFollow: Types.Maybe<(
    { __typename: 'Follow' }
    & Pick<Types.Follow, 'id'>
  )> }
);

export const HeroUserMeDataFragmentDoc = gql`
    fragment HeroUserMeData on Me {
  isInstanceAdmin
  user {
    id
  }
}
    `;
export const HeroUserUserDataFragmentDoc = gql`
    fragment HeroUserUserData on User {
  id
  image
  icon
  displayUsername
  location
  summary
  name
  myFollow {
    id
  }
}
    `;
