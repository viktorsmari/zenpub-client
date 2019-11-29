import * as Types from '../../types.generated.d';

import { BasicUserFragment } from './basicUser.generated';
import gql from 'graphql-tag';
import { BasicUserFragmentDoc } from './basicUser.generated';


export type BasicResourceFragment = { __typename?: 'Resource', id: string, name: string, summary: Types.Maybe<string>, icon: Types.Maybe<string>, url: Types.Maybe<string>, license: Types.Maybe<string>, createdAt: string, updatedAt: string, myLike: Types.Maybe<{ __typename?: 'Like', id: string }>, likes: { __typename?: 'LikesEdges', totalCount: number }, creator: (
    { __typename?: 'User' }
    & BasicUserFragment
  ), collection: { __typename?: 'Collection', id: string, name: string, preferredUsername: string, isLocal: boolean, isPublic: boolean, isDisabled: boolean, community: { __typename?: 'Community', id: string, canonicalUrl: Types.Maybe<string>, isLocal: boolean } } };

export const BasicResourceFragmentDoc = gql`
    fragment BasicResource on Resource {
  id
  name
  summary
  icon
  url
  license
  createdAt
  updatedAt
  myLike {
    id
  }
  likes {
    totalCount
  }
  creator {
    ...BasicUser
  }
  collection {
    id
    name
    preferredUsername
    isLocal
    isPublic
    isDisabled
    community {
      id
      canonicalUrl
      isLocal
    }
  }
}
    ${BasicUserFragmentDoc}`;