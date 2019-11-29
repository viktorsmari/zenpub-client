import * as Types from '../../types.generated.d';

import { BasicUserFragment } from './basicUser.generated';
import gql from 'graphql-tag';
import { BasicUserFragmentDoc } from './basicUser.generated';


export type BasicCommunityFragment = (
  { __typename?: 'Community' }
  & Pick<Types.Community, 'id' | 'canonicalUrl' | 'preferredUsername' | 'name' | 'summary' | 'icon' | 'image' | 'createdAt' | 'updatedAt' | 'lastActivity' | 'isLocal' | 'isPublic' | 'isDisabled'>
  & { creator: (
    { __typename?: 'User' }
    & BasicUserFragment
  ), myFollow: Types.Maybe<(
    { __typename?: 'Follow' }
    & Pick<Types.Follow, 'id'>
  )>, collections: (
    { __typename?: 'CollectionsEdges' }
    & Pick<Types.CollectionsEdges, 'totalCount'>
  ), followers: (
    { __typename?: 'FollowsEdges' }
    & Pick<Types.FollowsEdges, 'totalCount'>
  ), threads: (
    { __typename?: 'ThreadsEdges' }
    & Pick<Types.ThreadsEdges, 'totalCount'>
  ), outbox: (
    { __typename?: 'ActivitiesEdges' }
    & Pick<Types.ActivitiesEdges, 'totalCount'>
  ) }
);

export const BasicCommunityFragmentDoc = gql`
    fragment BasicCommunity on Community {
  id
  canonicalUrl
  preferredUsername
  name
  summary
  creator {
    ...BasicUser
  }
  icon
  image
  createdAt
  updatedAt
  lastActivity
  isLocal
  isPublic
  isDisabled
  myFollow {
    id
  }
  collections {
    totalCount
  }
  followers {
    totalCount
  }
  threads {
    totalCount
  }
  outbox {
    totalCount
  }
}
    ${BasicUserFragmentDoc}`;
