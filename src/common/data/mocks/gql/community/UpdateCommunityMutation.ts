import { UpdateCommunityMutationMutation } from 'graphql/updateCommunity.generated';

export const basicUpdateCommunityMutation: UpdateCommunityMutationMutation = {
  __typename: 'RootMutationType',
  updateCommunity: {
    __typename: 'Community',
    name: 'name',
    summary: 'summary',
    createdAt: '',
    id: '',
    preferredUsername: '',
    updatedAt: '',
    canonicalUrl: null,
    icon: null
  }
};
