import * as Types from '../../types.generated.d';

import { BasicUserFragment } from './basicUser.generated';
import gql from 'graphql-tag';
import { BasicUserFragmentDoc } from './basicUser.generated';


export type BasicResourceFragment = (
  { __typename?: 'Resource' }
  & Pick<Types.Resource, 'id' | 'name' | 'summary' | 'icon' | 'url' | 'license' | 'createdAt' | 'updatedAt'>
  & { myLike: Types.Maybe<(
    { __typename?: 'Like' }
    & Pick<Types.Like, 'id'>
  )>, likes: (
    { __typename?: 'LikesEdges' }
    & Pick<Types.LikesEdges, 'totalCount'>
  ), creator: (
    { __typename?: 'User' }
    & BasicUserFragment
  ), collection: (
    { __typename?: 'Collection' }
    & Pick<Types.Collection, 'id' | 'name' | 'preferredUsername' | 'isLocal' | 'isPublic' | 'isDisabled'>
    & { community: (
      { __typename?: 'Community' }
      & Pick<Types.Community, 'id' | 'canonicalUrl' | 'isLocal'>
    ) }
  ) }
);

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
