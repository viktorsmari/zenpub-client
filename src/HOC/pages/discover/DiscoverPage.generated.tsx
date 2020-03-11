import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';

export type DiscoverPageFeaturedCommunityInfoFragment = (
  { __typename: 'Community' }
  & Pick<Types.Community, 'id' | 'icon' | 'name'>
);

export type DiscoverPageFeaturedCollectionInfoFragment = (
  { __typename: 'Collection' }
  & Pick<Types.Collection, 'id' | 'icon' | 'name'>
);

export const DiscoverPageFeaturedCommunityInfoFragmentDoc = gql`
    fragment DiscoverPageFeaturedCommunityInfo on Community {
  id
  icon
  name
}
    `;
export const DiscoverPageFeaturedCollectionInfoFragmentDoc = gql`
    fragment DiscoverPageFeaturedCollectionInfo on Collection {
  id
  icon
  name
}
    `;
