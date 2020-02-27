import * as Types from '../../../../graphql/types.generated';

import gql from 'graphql-tag';

export type UserPreviewFragment = (
  { __typename: 'User' }
  & Pick<Types.User, 'icon' | 'image' | 'displayUsername' | 'summary' | 'canonicalUrl'>
  & { userId: Types.User['id'], userName: Types.User['name'] }
  & { myFollow: Types.Maybe<(
    { __typename: 'Follow' }
    & Pick<Types.Follow, 'id'>
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
  summary
  canonicalUrl
  myFollow {
    id
  }
  myFlag {
    id
  }
}
    `;
