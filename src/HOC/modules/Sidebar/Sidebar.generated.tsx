import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';

export type SidebarFollowedCommunityFragment = (
  { __typename: 'Community' }
  & Pick<Types.Community, 'id' | 'isLocal' | 'canonicalUrl' | 'icon' | 'name'>
);

export type SidebarMeUserFragment = (
  { __typename: 'User' }
  & Pick<Types.User, 'id' | 'name' | 'icon'>
);

export const SidebarFollowedCommunityFragmentDoc = gql`
    fragment SidebarFollowedCommunity on Community {
  id
  isLocal
  canonicalUrl
  icon
  name
}
    `;
export const SidebarMeUserFragmentDoc = gql`
    fragment SidebarMeUser on User {
  id
  name
  icon
}
    `;
