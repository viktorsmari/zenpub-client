import * as Types from '../../../../graphql/types.generated';

import { CommunityInfoFragment } from '../community/CommunityPreview.generated';
import gql from 'graphql-tag';
import { CommunityInfoFragmentDoc } from '../community/CommunityPreview.generated';


export type ResourcePreviewFragment = (
  { __typename: 'Resource' }
  & Pick<Types.Resource, 'id' | 'icon' | 'name' | 'summary' | 'canonicalUrl' | 'url' | 'isLocal' | 'license'>
  & { myLike: Types.Maybe<(
    { __typename: 'Like' }
    & Pick<Types.Like, 'id'>
  )>, myFlag: Types.Maybe<(
    { __typename: 'Flag' }
    & Pick<Types.Flag, 'id'>
  )>, likers: Types.Maybe<(
    { __typename: 'LikesPage' }
    & Pick<Types.LikesPage, 'totalCount'>
  )>, collection: Types.Maybe<(
    { __typename: 'Collection' }
    & Pick<Types.Collection, 'id'>
    & { community: Types.Maybe<(
      { __typename: 'Community' }
      & Pick<Types.Community, 'id'>
      & CommunityInfoFragment
    )> }
  )> }
);

export const ResourcePreviewFragmentDoc = gql`
    fragment ResourcePreview on Resource {
  id
  icon
  name
  summary
  canonicalUrl
  url
  myLike {
    id
  }
  myFlag {
    id
  }
  likers {
    totalCount
  }
  collection {
    id
    community {
      id
      ...CommunityInfo
    }
  }
  isLocal
  license
}
    ${CommunityInfoFragmentDoc}`;
