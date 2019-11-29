import * as Types from '../../types.generated.d';

import { BasicUserFragment } from './basicUser.generated';
import gql from 'graphql-tag';
import { BasicUserFragmentDoc } from './basicUser.generated';


export type BasicCommunityFragment = { __typename?: 'Community', id: string, canonicalUrl: Types.Maybe<string>, preferredUsername: string, name: string, summary: Types.Maybe<string>, icon: Types.Maybe<string>, image: Types.Maybe<string>, createdAt: string, updatedAt: string, lastActivity: string, isLocal: boolean, isPublic: boolean, isDisabled: boolean, creator: (
    { __typename?: 'User' }
    & BasicUserFragment
  ), myFollow: Types.Maybe<{ __typename?: 'Follow', id: string }>, collections: { __typename?: 'CollectionsEdges', totalCount: number }, followers: { __typename?: 'FollowsEdges', totalCount: number }, threads: { __typename?: 'ThreadsEdges', totalCount: number }, outbox: { __typename?: 'ActivitiesEdges', totalCount: number } };

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