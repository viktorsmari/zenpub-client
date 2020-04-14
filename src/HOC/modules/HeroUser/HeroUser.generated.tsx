import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';

export type HeroUserUserDataFragment = (
  { __typename: 'User' }
  & Pick<Types.User, 'id' | 'image' | 'icon' | 'displayUsername' | 'location' | 'summary' | 'name' | 'followerCount'>
  & { myFollow: Types.Maybe<(
    { __typename: 'Follow' }
    & Pick<Types.Follow, 'id'>
  )>, myFlag: Types.Maybe<(
    { __typename: 'Flag' }
    & Pick<Types.Flag, 'id'>
  )> }
);

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
  myFlag {
    id
  }
  followerCount
}
    `;
