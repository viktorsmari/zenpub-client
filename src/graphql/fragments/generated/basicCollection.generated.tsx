import * as Types from '../../types.generated.d';

import { BasicUserFragment } from './basicUser.generated';
import gql from 'graphql-tag';
import { BasicUserFragmentDoc } from './basicUser.generated';


export type BasicCollectionFragment = { __typename?: 'Collection', id: string, canonicalUrl: Types.Maybe<string>, preferredUsername: string, name: string, summary: Types.Maybe<string>, icon: Types.Maybe<string>, isLocal: boolean, isPublic: boolean, createdAt: string, creator: (
    { __typename?: 'User' }
    & BasicUserFragment
  ), myLike: Types.Maybe<{ __typename?: 'Like', id: string }>, myFollow: Types.Maybe<{ __typename?: 'Follow', id: string }>, myFlag: Types.Maybe<{ __typename?: 'Flag', id: string }>, community: { __typename?: 'Community', id: string, canonicalUrl: Types.Maybe<string>, isLocal: boolean, isPublic: boolean, name: string, icon: Types.Maybe<string>, myFollow: Types.Maybe<{ __typename?: 'Follow', id: string }>, myFlag: Types.Maybe<{ __typename?: 'Flag', id: string }> }, resources: { __typename?: 'ResourcesEdges', totalCount: number }, followers: { __typename?: 'FollowsEdges', totalCount: number }, threads: { __typename?: 'ThreadsEdges', totalCount: number }, outbox: { __typename?: 'ActivitiesEdges', totalCount: number } };

export const BasicCollectionFragmentDoc = gql`
    fragment BasicCollection on Collection {
  id
  canonicalUrl
  preferredUsername
  name
  summary
  creator {
    ...BasicUser
  }
  icon
  isLocal
  isPublic
  createdAt
  myLike {
    id
  }
  myFollow {
    id
  }
  myFlag {
    id
  }
  community {
    id
    canonicalUrl
    isLocal
    isPublic
    name
    icon
    myFollow {
      id
    }
    myFlag {
      id
    }
  }
  resources {
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