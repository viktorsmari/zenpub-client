import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';

export type SettingsPageMeFragment = (
  { __typename: 'Me' }
  & { user: (
    { __typename: 'User' }
    & Pick<Types.User, 'id' | 'name' | 'icon' | 'image' | 'location' | 'summary' | 'displayUsername' | 'website'>
  ) }
);

export const SettingsPageMeFragmentDoc = gql`
    fragment SettingsPageMe on Me {
  user {
    id
    name
    icon
    image
    location
    summary
    displayUsername
    website
  }
}
    `;
