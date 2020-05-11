import {
  getMaybeUploadInput,
  getUploadInput
} from 'fe/mutation/upload/getUploadInput';
import Maybe from 'graphql/tsutils/Maybe';
import { Collection, ResourceInput } from 'graphql/types.generated';
import { useMemo } from 'react';
import { CollectionResourcesQueryRefetch } from '../collection/useCollectionResources.generated';
import * as GQL from './useAddResource.generated';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';

export interface AddResource {
  collectionId: Collection['id'];
  resource: ResourceInput;
  content: File;
  icon: Maybe<File | string>;
}
export const useAddResource = () => {
  const [
    createResource,
    createResourceStatus
  ] = GQL.useAddResourceCreateResourceMutation();
  return useMemo(() => {
    const create = async ({
      collectionId,
      content,
      icon,
      resource
    }: AddResource) => {
      if (createResourceStatus.loading) {
        return;
      }

      return createResource({
        variables: {
          collectionId: collectionId,
          resource,
          content: getUploadInput(content),
          icon: getMaybeUploadInput(icon, null)
        },
        refetchQueries: [
          CollectionResourcesQueryRefetch({
            collectionId,
            limit: DEFAULT_PAGE_SIZE
          })
        ]
      });
    };
    return {
      create
    };
  }, [createResourceStatus, createResource]);
};
