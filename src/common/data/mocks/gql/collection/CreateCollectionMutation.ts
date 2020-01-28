import { CreateCollectionMutationMutation } from 'graphql/createCollection.generated';

export const basicCreateCollectionMutation: CreateCollectionMutationMutation = {
  __typename: 'RootMutationType',
  createCollection: {
    __typename: 'Collection',
    canonicalUrl: '',
    icon: '',
    community: {
      __typename: 'Community',
      name: '',
      id: '',
      isLocal: true,
      isPublic: true,
      myFollow: { __typename: 'Follow', id: '' },
      myFlag: { __typename: 'Flag', id: '' },
      canonicalUrl: '',
      icon: ''
    },
    createdAt: '',
    creator: {
      __typename: 'User',
      summary: '',
      image: '',
      lastActivity: '',
      id: '',
      canonicalUrl: '',
      name: '',
      icon: '',
      location: '',
      createdAt: '',
      isLocal: true,
      myFollow: { __typename: 'Follow', id: '' },
      myLike: { __typename: 'Like', id: '' },
      myFlag: { __typename: 'Flag', id: '' },
      displayUsername: '',
      updatedAt: ''
    },
    followers: { __typename: 'FollowsEdges', totalCount: 0 },
    isPublic: false,
    isLocal: false,
    myLike: null,
    name: 'name',
    summary: 'summary',
    id: '',
    outbox: { __typename: 'ActivitiesEdges', totalCount: 0 },
    preferredUsername: '',
    myFollow: null,
    myFlag: null,
    threads: { __typename: 'ThreadsEdges', totalCount: 0 },
    resources: {
      __typename: 'ResourcesEdges',
      totalCount: 0,
      edges: [],
      pageInfo: null
    }
  }
};
