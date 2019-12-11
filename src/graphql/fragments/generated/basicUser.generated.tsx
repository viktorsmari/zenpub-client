import * as Types from '../../types.generated.d';

import gql from 'graphql-tag';

export type BasicUserFragment = { __typename?: 'User', id: string, canonicalUrl: Types.Maybe<string>, preferredUsername: string, name: Types.Maybe<string>, icon: Types.Maybe<string>, location: Types.Maybe<string>, summary: Types.Maybe<string>, image: Types.Maybe<string>, isLocal: boolean, createdAt: string, updatedAt: string, lastActivity: Types.Maybe<string>, myFollow: Types.Maybe<{ __typename?: 'Follow', id: string }>, myLike: Types.Maybe<{ __typename?: 'Like', id: string }>, myFlag: Types.Maybe<{ __typename?: 'Flag', id: string }> };

export const BasicUserFragmentDoc = gql`
    fragment BasicUser on User {
  id
  canonicalUrl
  preferredUsername
  name
  icon
  location
  summary
  image
  isLocal
  createdAt
  updatedAt
  lastActivity
  myFollow {
    id
  }
  myLike {
    id
  }
  myFlag {
    id
  }
}
    `;