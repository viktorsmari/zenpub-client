import { CreateCommunityMutationMutation } from 'graphql/generated/createCommunity.generated';

export const basicCreateCommunityMutation: CreateCommunityMutationMutation = {
  createCommunity: {
    __typename: 'Community',
    name: 'name',
    summary: 'summary',
    image: 'image',
    collections: { __typename: 'CollectionsEdges', totalCount: 0 },
    createdAt: '',
    creator: {
      __typename: 'User',
      id: '',
      createdAt: '',
      myFollow: { __typename: 'Follow', id: '' },
      myFlag: { __typename: 'Flag', id: '' },
      myLike: null,
      preferredUsername: '',
      updatedAt: '',
      isLocal: true
    },
    followers: { __typename: 'FollowsEdges', totalCount: 0 },
    id: '',
    isDisabled: false,
    isPublic: false,
    isLocal: false,
    outbox: { __typename: 'ActivitiesEdges', totalCount: 0 },
    preferredUsername: '',
    updatedAt: '',
    lastActivity: '',
    myFollow: null,
    myFlag: null,
    canonicalUrl: null,
    icon: null,
    threads: { __typename: 'ThreadsEdges', totalCount: 0 }
  }
};
