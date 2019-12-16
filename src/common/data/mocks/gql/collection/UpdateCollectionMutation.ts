import { UpdateCollectionMutationMutation } from 'graphql/generated/updateCollection.generated';

export const basicUpdateCollectionMutation: UpdateCollectionMutationMutation = {
  updateCollection: {
    __typename: 'Collection',
    name: 'name',
    summary: 'summary',
    createdAt: '',
    id: '',
    preferredUsername: '',
    updatedAt: '',
    canonicalUrl: null,
    icon: null,
    resources: { __typename: 'ResourcesEdges', totalCount: 0 }
  }
};
