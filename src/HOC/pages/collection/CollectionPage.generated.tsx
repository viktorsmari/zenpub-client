import * as Types from '../../../graphql/types.generated';

import { ActivityPreviewDataFragment } from '../../modules/ActivityPreview/getActivityPreview.generated';
import { ActivityPreviewResourceCtxFragment } from '../../modules/ActivityPreview/getActivityPreview.generated';
import { HeroCollectionDataFragment } from '../../modules/HeroCollection/HeroCollection.generated';
import gql from 'graphql-tag';
import { HeroCollectionDataFragmentDoc } from '../../modules/HeroCollection/HeroCollection.generated';
import { ActivityPreviewResourceCtxFragmentDoc } from '../../modules/ActivityPreview/getActivityPreview.generated';
import { ActivityPreviewDataFragmentDoc } from '../../modules/ActivityPreview/getActivityPreview.generated';




export type CollectionPageDataFragment = (
  { __typename: 'Collection' }
  & HeroCollectionDataFragment
);

export type CollectionPageResourceFragment = (
  { __typename: 'Resource' }
  & Pick<Types.Resource, 'id' | 'createdAt'>
  & ActivityPreviewResourceCtxFragment
);

export type CollectionPageActivityFragment = (
  { __typename: 'Activity' }
  & Pick<Types.Activity, 'id'>
  & ActivityPreviewDataFragment
);

export const CollectionPageDataFragmentDoc = gql`
    fragment CollectionPageData on Collection {
  ...HeroCollectionData
}
    ${HeroCollectionDataFragmentDoc}`;
export const CollectionPageResourceFragmentDoc = gql`
    fragment CollectionPageResource on Resource {
  id
  createdAt
  ...ActivityPreviewResourceCtx
}
    ${ActivityPreviewResourceCtxFragmentDoc}`;
export const CollectionPageActivityFragmentDoc = gql`
    fragment CollectionPageActivity on Activity {
  id
  ...ActivityPreviewData
}
    ${ActivityPreviewDataFragmentDoc}`;
