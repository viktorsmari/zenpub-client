import { CreateCommunityMutationMutation } from 'graphql/createCommunity.generated';

export const basicCreateCommunityMutation: CreateCommunityMutationMutation = {
  __typename: 'RootMutationType',
  createCommunity: {
    __typename: 'Community',
    name: 'name',
    summary: 'summary',
    collections: { __typename: 'CollectionsEdges', totalCount: 0 },
    createdAt: '',
    creator: {
      __typename: 'User',
      id: '',
      createdAt: '',
      myFollow: { __typename: 'Follow', id: '' },
      myFlag: { __typename: 'Flag', id: '' },
      myLike: null,
      displayUsername: '',
      updatedAt: '',
      isLocal: true,
      canonicalUrl: '',
      icon: '',
      image: '',
      lastActivity: '',
      location: '',
      name: '',
      summary: ''
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
    icon: '',
    threads: { __typename: 'ThreadsEdges', totalCount: 0 }
  }
};
