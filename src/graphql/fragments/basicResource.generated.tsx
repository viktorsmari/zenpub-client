import * as Types from '../types.generated';

import { BasicUserFragment } from './basicUser.generated';
import gql from 'graphql-tag';
import { BasicUserFragmentDoc } from './basicUser.generated';


export type BasicResourceFragment = (
  { __typename: 'Resource' }
  & Pick<Types.Resource, 'id' | 'name' | 'summary' | 'icon' | 'url' | 'canonicalUrl' | 'license' | 'createdAt' | 'updatedAt' | 'author'>
  & { myLike: Types.Maybe<(
    { __typename: 'Like' }
    & Pick<Types.Like, 'id'>
  )>, myFlag: Types.Maybe<(
    { __typename: 'Flag' }
    & Pick<Types.Flag, 'id'>
  )>, likers: Types.Maybe<(
    { __typename: 'LikesPage' }
    & Pick<Types.LikesPage, 'totalCount'>
  )>, creator: Types.Maybe<(
    { __typename: 'User' }
    & BasicUserFragment
  )>, collection: Types.Maybe<(
    { __typename: 'Collection' }
    & Pick<Types.Collection, 'id' | 'name' | 'preferredUsername' | 'isLocal' | 'isPublic' | 'isDisabled'>
    & { community: Types.Maybe<(
      { __typename: 'Community' }
      & Pick<Types.Community, 'id' | 'canonicalUrl' | 'isLocal'>
    )> }
  )> }
);

export const BasicResourceFragmentDoc = gql`
    fragment BasicResource on Resource {
  id
  name
  summary
  icon
  url
  canonicalUrl
  license
  createdAt
  updatedAt
  myLike {
    id
  }
  myFlag {
    id
  }
  likers {
    totalCount
  }
  creator {
    ...BasicUser
  }
  author
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
