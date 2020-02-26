import * as Types from '../../../../graphql/types.generated';

import gql from 'graphql-tag';

export type UserPreviewFragment = (
  { __typename: 'User' }
  & Pick<Types.User, 'icon' | 'image' | 'displayUsername' | 'isLocal' | 'summary' | 'canonicalUrl' | 'likerCount'>
  & { userId: Types.User['id'], userName: Types.User['name'] }
  & { myFollow: Types.Maybe<(
    { __typename: 'Follow' }
    & Pick<Types.Follow, 'id'>
  )>, myLike: Types.Maybe<(
    { __typename: 'Like' }
    & Pick<Types.Like, 'id'>
  )>, myFlag: Types.Maybe<(
    { __typename: 'Flag' }
    & Pick<Types.Flag, 'id'>
  )> }
);

export const UserPreviewFragmentDoc = gql`
    fragment UserPreview on User {
  icon
  image
  userId: id
  userName: name
  displayUsername
  isLocal
  summary
  canonicalUrl
  myFollow {
    id
  }
  likerCount
  myLike {
    id
  }
  myFlag {
    id
  }
}
    `;
