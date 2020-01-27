import { GetCollectionQuery } from 'graphql/getCollection.generated';

export const basicGetCollectionQuery: GetCollectionQuery = {
  __typename: 'RootQueryType',
  collection: {
    __typename: 'Collection',
    name: 'name',
    summary: 'summary',
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
      preferredUsername: '',
      updatedAt: ''
    },
    followers: { __typename: 'FollowsEdges', totalCount: 0 },
    id: '',
    isPublic: false,
    isLocal: false,
    outbox: { __typename: 'ActivitiesEdges', totalCount: 0 },
    preferredUsername: '',
    myFollow: null,
    myFlag: null,
    canonicalUrl: null,
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
    myLike: { __typename: 'Like', id: '' },
    resources: {
      __typename: 'ResourcesEdges',
      edges: [],
      pageInfo: null,
      totalCount: 0
    },
    threads: { __typename: 'ThreadsEdges', totalCount: 0 }
  }
};
