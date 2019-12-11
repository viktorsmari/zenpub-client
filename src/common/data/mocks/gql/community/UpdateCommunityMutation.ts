import { UpdateCommunityMutationMutation } from 'graphql/generated/updateCommunity.generated';

export const basicUpdateCommunityMutation: UpdateCommunityMutationMutation = {
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
